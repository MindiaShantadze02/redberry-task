// Importing hooks
import { useContext } from "react";

// Importing images
import covid19 from "../imgs/vaccinate2.png";
import next_svg from "../imgs/next.svg"
import previous_svg from "../imgs/previous.svg"

// Importing context
import { AppContext } from "../context/AppState";

const CovidInfo = () => {

    const {
        nextPage,
        previousPage
    } = useContext(AppContext);

    return ( 
        <div className="covid-info">
            <div className="content-wrapper">
                <section className="form-wrapper">
                    <form id="covid-form">
                        <div className="input-group">
                            <h3 className="info-title required">გაქვს გადატანილი Covid-19?</h3>
                            <div className="input-group-item">
                                <input type="radio" name="covid-info" id="have-covid" />
                                <label htmlFor="have-covid">კი</label>
                            </div>
                            <div className="input-group-item">
                                <input type="radio" name="covid-info" id="doesnt-have-covid" />
                                <label htmlFor="doesnt-have-covid">არა</label>
                            </div>
                            <div className="input-group-item">
                                <input type="radio" name="covid-info" id="currently-have-covid" />
                                <label htmlFor="currently-have-covid">ახლა მაქვს</label>
                            </div>
                        </div>
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
                <button>
                        <img src={next_svg} alt="next" />
                </button>
            </div>
        </div>
     );
}
 
export default CovidInfo;