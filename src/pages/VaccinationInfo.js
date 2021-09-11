// Importing images
import doctor from "../imgs/doctor2.png";

const VaccinationInfo = () => {
    return ( 
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
            <aside class="img-wrapper">
                <img src={doctor} alt="doctor" />
            </aside>
        </div>
     );
}
 
export default VaccinationInfo;