// Importing images
import doctor from "../imgs/doctor2.png";

const VaccinationInfo = () => {
    return ( 
        <div className="info">
            <div className="info-form">
                <form id="vaccination-form" style={{marginTop: "42px"}}>
                    <label className="info-title">უკვე აცრილი ხარ?</label>
                    <div className="info-input-group">
                        <input type="radio" name="vaccination-info" id="vaccinated" className="info-label" />
                        <label htmlFor="vaccinated">კი</label>
                    </div>
                    <div className="info-input-group">
                        <input type="radio" name="vaccination-info" id="non-vaccinated" className="info-label" />
                        <label htmlFor="non-vaccinated">არა</label>
                    </div>
                </form>
            </div>
            <img src={doctor} alt="doctor" />
        </div>
     );
}
 
export default VaccinationInfo;