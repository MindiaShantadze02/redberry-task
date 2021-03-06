// Importing hooks
import { useContext , useState , useEffect } from "react";

// Importing images
import covid19 from "../imgs/vaccinate2.png";
import next_svg from "../imgs/next.svg"
import next_uncompleted from "../imgs/next-uncompleted-clicked.svg";
import previous_svg from "../imgs/previous.svg"

// Importing context
import { AppContext } from "../context/AppState";

const CovidInfo = () => {
    // Using context
    const {
        nextPage,
        previousPage,

        hadCovid,
        doneAntibodyTest,
        antibodyNumber,
        antibodyDate,
        hadCovidDate,

        setDoneAntibodyTest,
        setAntibodyDate,
        setAntibodyNumber,
        setHadCovidDate,
        
        setValue
    } = useContext(AppContext);
    
    // Input handlers
    
    //      checking if user had covid or not
    const handleHadCovid = ev => {
        const { name, value } = ev.target;

        if (value === "არა" || value === "ახლა მაქვს") {
            setDoneAntibodyTest("");
            setAntibodyDate("");
            setAntibodyNumber("");
        }
        setValue(name, value);
    };    
    //      checking if user has done antibody test or not
    const handleDoneAntibodyTest = doneABTest => {
        setDoneAntibodyTest(doneABTest);
        
        if (doneABTest === "კი") {
            setHadCovidDate("");
        }
        else if (doneABTest === "არა") {
            setAntibodyDate("");
            setAntibodyNumber("");
        }
    };
    //      checking antibody number of user
    const handleAntibodyNumber = abNumber => {
        
        let error;
        setAntibodyNumber(abNumber);    
        
        if (!abNumber) {
            error = "ანტისხეულების რაოდენობის შეყვანა სავალდებულოა";
        } 
        else if (!/[?0-9]+$/.test(abNumber)) {
            error = "მნიშვნელობა აუცილებლად უნდა იყოს Number: შეიყვანეთ რიცხვითი მნიშნელობა";
        }
        
        setAntibodyNumberErr(error);
    };
    //      checking when did user took antibody test
    const handleAntibodyDate = ev => setAntibodyDate(ev.target.value);    
    //      checking when user had covid
    const handleHadCovidDate = ev => setHadCovidDate(ev.target.value);
    
    // Error state
    const [antibodyNumberErr, setAntibodyNumberErr] = useState("");
    
    // Checking if form is filled
    const noOrCurrentlyHave = hadCovid === "არა" || hadCovid === "ახლა მაქვს";

    const isFilled1 = () => {

        if (hadCovid === "") return false;
        
        else if (hadCovid === "კი") {
            if (doneAntibodyTest === "") return false;

            else if (doneAntibodyTest === "კი") {
                if (antibodyDate === "" || antibodyNumber === "" || !/[?0-9]+$/.test(antibodyNumber)) return false;
                else return true;
            }
        }
    }
    const isFilled2 = () => {
        if (hadCovid === "") return false;
        else if (hadCovid === "კი") {
            if (doneAntibodyTest === "") return false;

            else if (doneAntibodyTest === "არა") {
                if (!hadCovidDate) return false;
                else return true;
            }
        }
    }

    const [uncompletedError, setUncompletedError] = useState(false);

    const showFillFieldErr = () => {
        setUncompletedError(true);
        setTimeout(()=> {
            setUncompletedError(false);
        }, 2000);
    };

    const canSubmit = isFilled1() || isFilled2() || noOrCurrentlyHave;

    // Variable for checking if user can submit or not
    const [showSubmit, setShowSubmit] = useState(false);
    
    // Showing button depending on if form is filled or not
    useEffect(()=> {

        if (canSubmit) {
            setShowSubmit(true);
        } else {
            setShowSubmit(false);
        }
    },[
        hadCovid,
        doneAntibodyTest,
        antibodyNumber,
        antibodyDate,
        hadCovidDate,
        canSubmit 
    ]);

    return ( 
        <div className="covid-info">
            <div className="content-wrapper">
                <section className="form-wrapper">
                    <form id="covid-form">
                        <div className="input-group">
                            <h3 className="info-title required">გაქვს გადატანილი Covid-19?</h3>
                            <label className="input-group-item radio" htmlFor="have-covid">
                                <input
                                 type="radio"
                                 name="hadCovid"
                                 id="have-covid"
                                 onChange={handleHadCovid}
                                 value="კი"
                                 checked={hadCovid === "კი"}
                                 />
                                 <div className="radio-dot"></div>
                                კი
                            </label>
                            <label className="input-group-item radio" htmlFor="doesnt-have-covid">
                                <input
                                 type="radio" 
                                 name="hadCovid" 
                                 id="doesnt-have-covid" 
                                 onChange={handleHadCovid}
                                 value="არა"
                                 checked={hadCovid === "არა"}
                                 />
                                 <div className="radio-dot"></div>
                                არა
                            </label>
                            <label className="input-group-item radio" htmlFor="currently-have-covid">
                                <input
                                 type="radio" 
                                 name="hadCovid" 
                                 id="currently-have-covid"
                                 value="ახლა მაქვს" 
                                 onChange={handleHadCovid}
                                 checked={hadCovid === "ახლა მაქვს"}
                                 />
                                 <div className="radio-dot"></div>
                                ახლა მაქვს
                            </label>
                        </div>

                    {hadCovid === "კი" && (
                        <div className="input-group">
                            <h3 className="info-title required">შემთხვევით ანტისხეულების ტესტი ხომ არ გაქვს გაკეთებული?</h3>
                            <label className="input-group-item radio" htmlFor="antibody-test-true">
                                <input
                                 type="radio"
                                 name="antibody-test-info"
                                 id="antibody-test-true"
                                 value="კი"
                                 onChange={ev => handleDoneAntibodyTest(ev.target.value)}
                                 checked={doneAntibodyTest === "კი"}
                                 />
                                 <div className="radio-dot"></div>
                                კი
                            </label>
                            <label className="input-group-item radio radio" htmlFor="antibody-test-false">
                                <input
                                 type="radio" 
                                 name="antibody-test-info" 
                                 id="antibody-test-false" 
                                 value="არა"
                                 onChange={ev => handleDoneAntibodyTest(ev.target.value)}
                                 checked={doneAntibodyTest === "არა"}
                                />
                                <div className="radio-dot"></div>
                            არა
                            </label>
                        </div>
                    )}

                    {doneAntibodyTest === "კი" && (
                        <div className="input-group">
                            <h3>თუ გახსოვს, გთხოვ მიუთითე მიახლოებითი თარიღი და რაოდენობა ანტისხეულების</h3>
                            <div className="input-group-item">
                                <input
                                 className="text-input"
                                 type="date" 
                                 name="antibody-test-date" 
                                 id="antibody-test-date" 
                                 onChange={handleAntibodyDate}
                                 value={antibodyDate}
                                />
                            </div>
                            <div className="input-group-item">
                                <input 
                                 className="text-input"
                                 type="number"
                                 name="antibody-test-number"
                                 id="antibody-test-number" 
                                 placeholder="ანტისხეულების რაოდენობა"
                                 value={antibodyNumber}
                                 onChange={ev => handleAntibodyNumber(ev.target.value)}
                                />
                            </div>
                            {antibodyNumberErr && (
                                <p className="text-danger">{antibodyNumberErr}</p>
                            )}
                        </div>
                    )}
                    
                    {doneAntibodyTest === "არა" && (
                        <div className="input-group">
                            <h3>მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი), როდის გქონდა კოვიდ19</h3>
                            <div className="input-group-item">
                                <input
                                 className="text-input"
                                 type="date"
                                 name="had-covid-date" 
                                 id="had-covid-date"
                                 placeholder="დდ/თთ/წწ"
                                 onChange={handleHadCovidDate}
                                 value={hadCovidDate}
                                 />
                            </div>
                        </div>
                    )}
                    </form>
                </section>
                <aside className="img-wrapper">
                    <img src={covid19} alt="covid-19" />
                </aside>
            </div>
            <div className="arrows">
                <button onClick={previousPage}>
                    <img src={previous_svg} alt="previous" />
                </button>
                
                {showSubmit ? 
                (
                    <button onClick={nextPage}>
                            <img src={next_svg} alt="next" />
                    </button>
                ) :
                <button onClick={showFillFieldErr}>
                        {uncompletedError && (
                            <p className="fill-fields-err">ჯერ შეავსე &lt;3</p>
                        )}
                        <img src={next_uncompleted} alt="uncompleted" />
                    </button>
                }

            </div>
        </div>
     );
}
 
export default CovidInfo;