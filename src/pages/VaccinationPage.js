// Importing hooks
import { useContext , useEffect , useState } from "react";

// Importing images
import doctor from "../imgs/doctor2.png";
import next_svg from "../imgs/next.svg"
import previous_svg from "../imgs/previous.svg"
import next_uncompleted from "../imgs/next-uncompleted-clicked.svg";

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

    // Input handlers
    const handleIsVaccinated = ev => {
        if (ev.target.value === "კი") {
            setIsVaccinated(ev.target.value);
            setWaitingFor("");
        }
        else if (ev.target.value === "არა") {
            setIsVaccinated(ev.target.value);
            setVaccinationDose("");
        }
    };
    const handleVaccinationDose = ev => setVaccinationDose(ev.target.value);
    const handleWaitingFor = ev => setWaitingFor(ev.target.value);

    // Checking if user filled every input
    const isFilled1 = () => {
        if (isVaccinated === "") return false;
        
        if (isVaccinated === "კი") {
            if (vaccinationDose === "") return false;
            else return true;
        }
    }
    const isFilled2 = () => {
        if (isVaccinated === "") return false;
        
        if (isVaccinated === "არა") {
            if (waitingFor === "") return false;
            else return true;
        }
    }
    
    // Checking if user can submit or not
    const canSubmit = isFilled1() || isFilled2();
    const [showSubmit, setShowSubmit] = useState(false);

    useEffect(() => {
        if (canSubmit) {
            setShowSubmit(true);
        } else {
            setShowSubmit(false);
        }
    }, [
        isVaccinated,
        vaccinationDose,
        waitingFor,
        canSubmit
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
                                 name="vaccination-info" 
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
                                 name="vaccination-info" 
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
                                     name="vaccination-dose" 
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
                                     name="vaccination-dose" 
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
                                     name="vaccination-dose" 
                                     id="f-true-s-false"
                                     value="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
                                     onChange={handleVaccinationDose} 
                                     checked={vaccinationDose === "პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"}
                                    />
                                    <label htmlFor="f-true-s-false">პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label>
                                </div>
                                {vaccinationDose === "პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე" && (
                                    <p className="additional-info">👉 რომ აღარ გადადო, ბარემ ეხლავე დარეგისტრირდი - <a href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a></p>
                                )}
                            </div>
                        )}

                        {isVaccinated === "არა" && (
                            <div className="input-group">
                            <h3 className="required">რას ელოდები?</h3>
                            <div className="input-group-item">
                                <input
                                 type="radio" 
                                 name="waiting-for" 
                                 id="waiting-for-date"
                                 value="დარეგისტრირებული ვარ და ველოდები თარიღს"
                                 onChange={handleWaitingFor}
                                 checked={waitingFor === "დარეგისტრირებული ვარ და ველოდები თარიღს"}
                                />
                                <label htmlFor="waiting-for-date">დარეგისტრირებული ვარ და ველოდები თარიღს</label>
                            </div>
                            <div className="input-group-item">
                                <input
                                 type="radio" 
                                 name="waiting-for" 
                                 id="not-planning"
                                 value="არ ვგეგმავ"
                                 onChange={handleWaitingFor} 
                                 checked={waitingFor === "არ ვგეგმავ"}
                                />
                                <label htmlFor="not-planning">არ ვგეგმავ</label>
                            </div>
                                {waitingFor === "არ ვგეგმავ" && (
                                    <p className="additional-info">
                                        <a href="https://booking.moh.gov.ge/">👉 https://booking.moh.gov.ge/</a>
                                    </p>
                                )}
                            <div className="input-group-item">
                                <input
                                 type="radio" 
                                 name="waiting-for" 
                                 id="hadcovid-plannnig"
                                 value="გადატანილი მაქვს და ვგეგმავ აცრას"
                                 onChange={handleWaitingFor} 
                                 checked={waitingFor === "გადატანილი მაქვს და ვგეგმავ აცრას"}
                                />
                                <label htmlFor="hadcovid-plannnig">გადატანილი მაქვს და ვგეგმავ აცრას</label>
                            </div>
                                {waitingFor === "გადატანილი მაქვს და ვგეგმავ აცრას" && (
                                    <p className="additional-info">
                                        ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.  
                                        <br />
                                        <br />
                                        👉 რეგისტრაციის ბმული <a href="https://booking.moh.gov.ge/"> https://booking.moh.gov.ge/</a>
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
                
                {showSubmit ? 
                (
                    <button onClick={nextPage}>
                            <img src={next_svg} alt="next" />
                    </button>
                ) :
                (
                    <button>
                        <img src={next_uncompleted} alt="next-uncompleted" />
                    </button>
                )
                }
            </div>
        </div>
     );
}
 
export default VaccinationInfo;