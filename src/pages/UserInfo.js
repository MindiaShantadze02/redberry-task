// Importing img sources
import user_info_img from "../imgs/people.png";

const UserInfo = () => {
    return ( 
        <div className="content-wrapper">
            <section className="form-wrapper">
                <form id="user-form">
                    <div className="input-group">
                        <h3 htmlFor="name" class="required">სახელი</h3>
                        <input type="text" id="first-name" className="text-input" />
                    </div>

                    <div className="input-group">
                        <h3 htmlFor="last-name" class="required">გვარი</h3>
                        <input type="text" id="last-name" className="text-input" />
                    </div>

                    <div className="input-group">
                        <h3 htmlFor="email" class="required">მეილი</h3>
                        <input type="text" id="email" className="text-input" />
                    </div>
                </form>
                <span className="required-fields-info">
                <hr />
                    *-ით მონიშნული ველების შევსება სავალდებულოა
                </span>
            </section>
            <aside class="img-wrapper">
                <img src={user_info_img} alt="user-info-img" />
            </aside>
        </div>
     );
}
 
export default UserInfo;