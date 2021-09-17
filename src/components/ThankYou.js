// Importing images
import star from "../imgs/star.svg";

// Importing context
import { AppContext } from "../context/AppState";

const ThankYou = () => {
    return ( 
        <div className="thank-you-page">
            <div>
                <img src={star} alt="start" className="star" />
                <h1>მადლობა</h1>
                <img src={star} className="small-star" alt="" />
            </div>
        </div>
     );
}
 
export default ThankYou;