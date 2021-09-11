// Importing react hooks
import { useContext } from "react";
// Importing components
import Navbar from "./Navbar";
import UserInfo from "../pages/UserInfo";
import CovidInfo from "../pages/CovidInfo";
import VaccinationInfo from "../pages/VaccinationInfo";
import WorkInfo from "../pages/WorkInfo";
import Arrows from "./Arrows";
// Importing app context
import { AppContext } from "../context/AppState";

const Form = () => {

    // Defining array of pages
    const Pages = [<UserInfo />,<CovidInfo />,<VaccinationInfo />,<WorkInfo />];
    // Using context
    const { currentPage } = useContext(AppContext);

    return ( 
        <div className="form-page">
            <Navbar />
            {Pages[currentPage]}
            <Arrows />
        </div>
     );
}
 
export default Form;