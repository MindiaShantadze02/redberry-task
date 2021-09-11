// Importing components
import Navbar from "./Navbar";
import UserInfo from "../pages/UserInfo";
const Form = () => {

    // Defining array of pages
    const Pages = [<UserInfo />];

    return ( 
        <div className="form-page">
            <Navbar />
            {Pages[0]}
        </div>
     );
}
 
export default Form;