// Importing hooks
import { useContext, useEffect , useState } from "react";

// Importing images
import doctor from "../imgs/doctor2.png";
import next_svg from "../imgs/next.svg";
import next_uncompleted from "../imgs/next-uncompleted.svg";
import previous_svg from "../imgs/previous.svg"

// Importing context
import { AppContext } from "../context/AppState";

const VaccinationInfo = () => {
    // Using context
    const {
        nextPage,
        previousPage,

        isVaccinated,
        vaccinationDose,
        waitingFor,

        setVaccinationDose,
        setWaitingFor,

        setValue
    } = useContext(AppContext);

    // Functions for handling input change
    const handleIsVaccinated = ev => {
        const { name, value } = ev.target;

        if (value === "კი") {
            setWaitingFor("");
        }
        if (value === "არა") {
            setVaccinationDose("");
        }

        setValue(name, value);
    }
    const handleVaccinationDose = ev => setValue(ev.target.name, ev.target.value);
    const handleWaitingFor = ev => setValue(ev.target.name, ev.target.value);
    
    // Checking if inputs are filled or not

    const isFilled = () => {
        if (isVaccinated === "") return false;
        else if (isVaccinated === "კი") {
            if (vaccinationDose === "") return false;
            else return true;
        }
        else if (isVaccinated === "არა") {
            if (waitingFor === "") return false;
            else return true;
        }
    }
    const [canSubmit, setCanSubmit] = useState(false);

    const [uncompletedError, setUncompletedError] = useState(false);

    const showFillFieldErr = () => {
        setUncompletedError(true);
        setTimeout(()=> {
            setUncompletedError(false);
        }, 1500);
    };

    useEffect(()=> {
        if (isFilled()) setCanSubmit(true);
        else setCanSubmit(false);
    },[
        isVaccinated,
        vaccinationDose,
        waitingFor
    ])

    return ( 
        <div className="vaccination-info">
            <div className="content-wrapper">
                <section className="form-wrapper">
                    <form id="vaccination-form">
                        <div className="input-group">
                            <h3 className="required">უკვე აცრილი ხარ?</h3>
                            <label className="input-group-item radio" htmlFor="is-vaccinated">
                                <input
                                 type="radio" 
                                 name="isVaccinated" 
                                 id="is-vaccinated"
                                 value="კი"
                                 onChange={handleIsVaccinated}
                                 checked={isVaccinated === "კი"}
                                />
                                <div className="radio-dot"></div>
                                კი
                            </label>
                            <label className="input-group-item radio" htmlFor="is-not-vaccinated">
                                <input
                                 type="radio" 
                                 name="isVaccinated" 
                                 id="is-not-vaccinated"
                                 value="არა"
                                 onChange={handleIsVaccinated} 
                                 checked={isVaccinated === "არა"}
                                />
                                <div className="radio-dot"></div>
                                არა
                            </label>
                        </div>
                        {isVaccinated === "კი" && (
                            <div className="input-group">
                                <h3>აირჩიე რომელ ეტაპზე ხარ:</h3>
                                <label className="input-group-item radio"  htmlFor="f-true-s-upcoming">
                                    <input
                                     type="radio" 
                                     name="vaccinationDose" 
                                     id="f-true-s-upcoming"
                                     value="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
                                     onChange={handleVaccinationDose} 
                                     checked={vaccinationDose === "პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"}
                                    />
                                    <div className="radio-dot"></div>
                                    პირველი დოზა და დარეგისტრირებული ვარ მეორეზე
                                </label>
                                <label className="input-group-item radio" htmlFor="fully-vaccinated">
                                    <input
                                     type="radio" 
                                     name="vaccinationDose" 
                                     id="fully-vaccinated"
                                     value="სრულად ვაქცინირებული ვარ"
                                     onChange={handleVaccinationDose} 
                                     checked={vaccinationDose === "სრულად ვაქცინირებული ვარ"}
                                    />
                                    <div className="radio-dot"></div>
                                    სრულად ვაქცინირებული ვარ
                                </label>
                                <label className="input-group-item radio" htmlFor="f-true-s-false">
                                    <input
                                     type="radio" 
                                     name="vaccinationDose" 
                                     id="f-true-s-false"
                                     value="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
                                     onChange={handleVaccinationDose} 
                                     checked={vaccinationDose === "პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"}
                                    />
                                    <div className="radio-dot"></div>
                                    პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
                                </label>
                                {vaccinationDose === "პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე" && (
                                    <p className="info-text">
                                        👉 რომ აღარ გადადო, <br />
                                        ბარემ ეხლავე დარეგისტრირდი <a href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
                                    </p>
                                )}
                            </div>
                        )}
                        {isVaccinated === "არა" && (
                            <div className="input-group">
                                <h3>რას ელოდები?</h3>
                                <label className="input-group-item radio" htmlFor="registered-waiting">
                                    <input
                                     type="radio"
                                     value="დარეგისტრირებული ვარ და ველოდები თარიღს"
                                     id="registered-waiting" 
                                     name="waitingFor"
                                     checked={waitingFor === "დარეგისტრირებული ვარ და ველოდები თარიღს"}
                                     onChange={handleWaitingFor}
                                    />
                                    <div className="radio-dot"></div>
                                    დარეგისტრირებული ვარ და ველოდები თარიღს
                                </label>
                                <label className="input-group-item radio" htmlFor="not-planning">
                                    <input
                                     type="radio"
                                     value="არ ვგეგმავ"
                                     id="not-planning" 
                                     name="waitingFor"
                                     checked={waitingFor === "არ ვგეგმავ"}
                                     onChange={handleWaitingFor}
                                    />
                                    <div className="radio-dot"></div>
                                    არ ვგეგმავ
                                </label>
                                <label className="input-group-item radio" htmlFor="planning-vaccination">
                                    <input
                                     type="radio"
                                     value="გადატანილი მაქვს და ვგეგმავ აცრას"
                                     id="planning-vaccination" 
                                     name="waitingFor"
                                     checked={waitingFor === "გადატანილი მაქვს და ვგეგმავ აცრას"}
                                     onChange={handleWaitingFor}
                                    />
                                    <dot className="radio-dot"></dot>
                                    გადატანილი მაქვს და ვგეგმავ აცრას
                                </label>
                                {waitingFor === "არ ვგეგმავ" && (
                                    <p className="info-text">
                                        👉 <a href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
                                    </p>
                                )}
                                {waitingFor === "გადატანილი მაქვს და ვგეგმავ აცრას" && (
                                    <p className="info-text">
                                        ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება. <br />
                                        👉 რეგისტრაციის ლინკი <a href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
                                    </p>
                                )}
                            </div>
                        )}
                    </form>
                </section>
                <aside className="img-wrapper">
                    <img src={doctor} alt="doctor" />
                </aside>
            </div>
            <div className="arrows">
                <button onClick={previousPage}>
                    <img src={previous_svg} alt="previous" />
                </button>
                {canSubmit ? 
                (
                    <button onClick={nextPage}>
                        <img src={next_svg} alt="next" />
                    </button>
                ) :
                (
                    <button onClick={showFillFieldErr}>
                        {uncompletedError && (
                            <p className="fill-fields-err">ჯერ შეავსე &lt;3</p>
                        )}
                        <img src={next_uncompleted} alt="uncompleted" />
                    </button>
                )}
            </div>
        </div>
     );
}
 
export default VaccinationInfo;