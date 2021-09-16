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

        setIsVaccinated,
        setVaccinationDose,
        setWaitingFor
    } = useContext(AppContext);

    // Functions for handling input change
    const handleIsVaccinated = ev => {
        if (ev.target.value === "კი") {
            setWaitingFor("");
        }
        if (ev.target.value === "არა") {
            setVaccinationDose("");
        }

        setIsVaccinated(ev.target.value);
    }
    const handleVaccinationDose = ev => setVaccinationDose(ev.target.value);
    const handleWaitingFor = ev => setWaitingFor(ev.target.value);
    
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
                            <div className="input-group-item">
                                <input
                                 type="radio" 
                                 name="isVaccinated" 
                                 id="is-vaccinated"
                                 value="კი"
                                 onChange={handleIsVaccinated}
                                 checked={isVaccinated === "კი"}
                                />
                                <label htmlFor="is-vaccinated">კი</label>
                            </div>
                            <div className="input-group-item">
                                <input
                                 type="radio" 
                                 name="isVaccinated" 
                                 id="is-not-vaccinated"
                                 value="არა"
                                 onChange={handleIsVaccinated} 
                                 checked={isVaccinated === "არა"}
                                />
                                <label htmlFor="is-not-vaccinated">არა</label>
                            </div>
                        </div>
                        {isVaccinated === "კი" && (
                            <div className="input-group">
                                <h3>აირჩიე რომელ ეტაპზე ხარ:</h3>
                                <div className="input-group-item">
                                    <input
                                     type="radio" 
                                     name="vaccinationDose" 
                                     id="f-true-s-upcoming"
                                     value="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
                                     onChange={handleVaccinationDose} 
                                     checked={vaccinationDose === "პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"}
                                    />
                                    <label htmlFor="f-true-s-upcoming">პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label>
                                </div>
                                <div className="input-group-item">
                                    <input
                                     type="radio" 
                                     name="vaccinationDose" 
                                     id="fully-vaccinated"
                                     value="სრულად ვაქცინირებული ვარ"
                                     onChange={handleVaccinationDose} 
                                     checked={vaccinationDose === "სრულად ვაქცინირებული ვარ"}
                                    />
                                    <label htmlFor="fully-vaccinated">სრულად ვაქცინირებული ვარ</label>
                                </div>
                                <div className="input-group-item">
                                    <input
                                     type="radio" 
                                     name="vaccinationDose" 
                                     id="f-true-s-false"
                                     value="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
                                     onChange={handleVaccinationDose} 
                                     checked={vaccinationDose === "პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"}
                                    />
                                    <label htmlFor="f-true-s-false">პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label>
                                </div>
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
                                <div className="input-group-item">
                                    <input
                                     type="radio"
                                     value="დარეგისტრირებული ვარ და ველოდები თარიღს"
                                     id="registered-waiting" 
                                     name="waitingFor"
                                     checked={waitingFor === "დარეგისტრირებული ვარ და ველოდები თარიღს"}
                                     onChange={handleWaitingFor}
                                    />
                                    <label htmlFor="registered-waiting">დარეგისტრირებული ვარ და ველოდები თარიღს</label>
                                </div>
                                <div className="input-group-item">
                                    <input
                                     type="radio"
                                     value="არ ვგეგმავ"
                                     id="not-planning" 
                                     name="waitingFor"
                                     checked={waitingFor === "არ ვგეგმავ"}
                                     onChange={handleWaitingFor}
                                    />
                                    <label htmlFor="not-planning">არ ვგეგმავ</label>
                                </div>
                                <div className="input-group-item">
                                    <input
                                     type="radio"
                                     value="გადატანილი მაქვს და ვგეგმავ აცრას"
                                     id="planning-vaccination" 
                                     name="waitingFor"
                                     checked={waitingFor === "გადატანილი მაქვს და ვგეგმავ აცრას"}
                                     onChange={handleWaitingFor}
                                    />
                                    <label htmlFor="planning-vaccination">გადატანილი მაქვს და ვგეგმავ აცრას</label>
                                </div>
                                {waitingFor === "არ ვგეგმავ" && (
                                    <p className="info-text">
                                        👉 <a href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
                                    </p>
                                )}
                                {waitingFor === "გადატანილი მაქვს და ვგეგმავ აცრას" && (
                                    <p className="info-text">
                                        ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.
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
                    <button>
                        <img src={next_uncompleted} alt="uncompleted" />
                    </button>
                )}
            </div>
        </div>
     );
}
 
export default VaccinationInfo;