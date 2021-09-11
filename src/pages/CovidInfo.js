// Importing images
import covid19 from "../imgs/vaccinate2.png";

const CovidInfo = () => {
    return ( 
        <div class="content-wrapper">
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
            <aside class="img-wrapper">
                <img src={covid19} alt="covid-19" />
            </aside>
        </div>
     );
}
 
export default CovidInfo;