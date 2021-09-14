// Importing hooks
import { useContext } from "react";

// Importing images
import doctor from "../imgs/doctor2.png";
import next_svg from "../imgs/next.svg"
import previous_svg from "../imgs/previous.svg"

// Importing context
import { AppContext } from "../context/AppState";

const VaccinationInfo = () => {

    const {
        nextPage,
        previousPage
    } = useContext(AppContext);

    return ( 
        <div className="vaccination-info">
            <div className="content-wrapper">
                <section className="form-wrapper">
                    <form id="vaccination-form">
                        <div className="input-group">
                            <h3 className="required">უკვე აცრილი ხარ?</h3>
                            <div className="input-group-item">
                                <input type="radio" name="vaccination-info" id="is-vaccinated" />
                                <label htmlFor="is-vaccinated">კი</label>
                            </div>
                            <div className="input-group-item">
                                <input type="radio" name="vaccination-info" id="is-not-vaccinated" />
                                <label htmlFor="is-not-vaccinated">არა</label>
                            </div>
                        </div>
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