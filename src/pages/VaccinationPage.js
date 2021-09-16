// Importing hooks
import { useContext } from "react";

// Importing images
import doctor from "../imgs/doctor2.png";
import next_svg from "../imgs/next.svg"
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

    // Input handlers
    const handleIsVaccinated = ev => {
        setIsVaccinated(ev.target.value);
    };
    const handleVaccinationDose = ev => setVaccinationDose(ev.target.value);
    const handleWaitingFor = ev => setWaitingFor(ev.target.value);

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
                <button>
                        <img src={next_svg} alt="next" />
                </button>
            </div>
        </div>
     );
}
 
export default VaccinationInfo;