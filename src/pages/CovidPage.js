// Importing hooks
import { useContext , useState , useEffect } from "react";

// Importing images
import covid19 from "../imgs/vaccinate2.png";
import next_svg from "../imgs/next.svg"
import next_uncompleted_clicked from "../imgs/next-uncompleted-clicked.svg";
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

        setHadCovid,
        setDoneAntibodyTest,
        setAntibodyDate,
        setAntibodyNumber,
        setHadCovidDate
    } = useContext(AppContext);
    
    // Input handlers
    
    //      checking if user had covid or not
    const handleHadCovid = ev => {
        if (ev.target.value === "არა" || ev.target.value === "ახლა მაქვს") {
            setDoneAntibodyTest("");
            setAntibodyDate("");
            setAntibodyNumber("");
        }
        setHadCovid(ev.target.value);
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
    const [antibodyDateErr, setAntibodyDateErr] = useState("");
    const [hadCovidDateErr, setHadCovidDateErr] = useState("");
    
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

    const setErrors = () => {
        if (!antibodyDate) setAntibodyDateErr("თარიღის შეყვანა სავალდებულოა");
        else setAntibodyDateErr("");

        if (!antibodyNumber) setAntibodyNumberErr("ანტისხეულების რაოდენობის შეყვანა სავალდებულოა");
        else setAntibodyNumberErr("");
        
        if (!hadCovidDate) setHadCovidDateErr("თარიღის შეყვანა სავალდებულოა");
        else setHadCovidDateErr("");
    }

    return ( 
        <div className="covid-info">
            <div className="content-wrapper">
                <section className="form-wrapper">
                    <form id="covid-form">
                        <div className="input-group">
                            <h3 className="info-title required">გაქვს გადატანილი Covid-19?</h3>
                            <div className="input-group-item">
                                <input
                                 type="radio"
                                 name="covid-info"
                                 id="have-covid"
                                 onChange={handleHadCovid}
                                 value="კი"
                                 checked={hadCovid === "კი"}
                                 />
                                <label htmlFor="have-covid">კი</label>
                            </div>
                            <div className="input-group-item">
                                <input
                                 type="radio" 
                                 name="covid-info" 
                                 id="doesnt-have-covid" 
                                 onChange={handleHadCovid}
                                 value="არა"
                                 checked={hadCovid === "არა"}
                                 />
                                <label htmlFor="doesnt-have-covid">არა</label>
                            </div>
                            <div className="input-group-item">
                                <input
                                 type="radio" 
                                 name="covid-info" 
                                 id="currently-have-covid"
                                 value="ახლა მაქვს" 
                                 onChange={handleHadCovid}
                                 checked={hadCovid === "ახლა მაქვს"}
                                 />
                                <label htmlFor="currently-have-covid">ახლა მაქვს</label>
                            </div>
                        </div>

                    {hadCovid === "კი" && (
                        <div className="input-group">
                            <h3 className="info-title required">შემთხვევით ანტისხეულების ტესტი ხომ არ გაქვს გაკეთებული?</h3>
                            <div className="input-group-item">
                                <input
                                 type="radio"
                                 name="antibody-test-info"
                                 id="antibody-test-true"
                                 value="კი"
                                 onChange={ev => handleDoneAntibodyTest(ev.target.value)}
                                 checked={doneAntibodyTest === "კი"}
                                 />
                                <label htmlFor="antibody-test-true">კი</label>
                            </div>
                            <div className="input-group-item">
                                <input
                                 type="radio" 
                                 name="antibody-test-info" 
                                 id="antibody-test-false" 
                                 value="არა"
                                 onChange={ev => handleDoneAntibodyTest(ev.target.value)}
                                 checked={doneAntibodyTest === "არა"}
                                />
                            <label htmlFor="antibody-test-false">არა</label>
                            </div>
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
                            {antibodyDateErr && (
                                <p class="text-danger">{antibodyDateErr}</p>
                            )}
                            <div className="input-group-item">
                                <input 
                                 className="text-input"
                                 type="text"
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
                            {hadCovidDateErr && (
                                <p className="text-danger">{hadCovidDateErr}</p>
                            )}
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
                (
                    <button onClick={setErrors}>
                        <img src={next_uncompleted_clicked} alt="next-uncompleted" />
                    </button>
                )
                }

            </div>
        </div>
     );
}
 
export default CovidInfo;