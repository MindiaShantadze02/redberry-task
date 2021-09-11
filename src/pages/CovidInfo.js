// Importing images
import covid19 from "../imgs/vaccinate2.png";

const CovidInfo = () => {
    return ( 
        <div className="info">
            <div className="info-form">
                <form id="covid-form" style={{marginTop: "42px"}}>
                    <label className="info-title">გაქვს გადატანილი Covid-19?</label>
                    <div className="info-input-group">
                        <input type="radio" name="covid-info" id="yes" className="info-label" />
                        <label htmlFor="yes">კი</label>
                    </div>
                    <div className="info-input-group">
                        <input type="radio" name="covid-info" id="no" className="info-label" />
                        <label htmlFor="no">არა</label>
                    </div>
                    <div className="info-input-group">
                        <input type="radio" name="covid-info" id="currently-have" className="info-label" />
                        <label htmlFor="currently-have">ახლა მაქვს</label>
                    </div>
                </form>
            </div>
            <img src={covid19} alt="covid-19" />
        </div>
     );
}
 
export default CovidInfo;