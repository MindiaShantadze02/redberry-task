// Importing img sources
import user_info_img from "../imgs/people.png";

const UserInfo = () => {
    return ( 
        <div className="user-info">
            <div className="user-info-form-wrapper">
                <div className="user-info-form">
                    <form id="user-form">
                        <div className="user-info-input-group">
                            <label htmlFor="name">სახელი</label>
                            <input type="text" id="first-name" />
                        </div>
                        <div className="user-info-input-group">
                            <label htmlFor="last-name">გვარი</label>
                            <input type="text" id="last-name" />
                        </div>
                        <div className="user-info-input-group">
                            <label htmlFor="email">მეილი</label>
                            <input type="text" id="email" />
                        </div>
                    </form>
                </div>
                <span className="required-fields-info">
                    <hr />
                    *-ით მონიშნული ველების შევსება სავალდებულოა
                </span>
            </div>
            <img src={user_info_img} alt="img" />
        </div>
     );
}
 
export default UserInfo;