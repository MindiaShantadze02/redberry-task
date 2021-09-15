// Importing react hooks
import { useContext } from "react";

// Importing components
import UserPage from "../pages/UserPage";
import CovidPage from "../pages/CovidPage";
import VaccinationPage from "../pages/VaccinationPage";
import RecommendationPage from "../pages/RecommendationPage";

// Importing app context
import { AppContext } from "../context/AppState";

const Form = () => {
    const { currentPage } = useContext(AppContext);
    switch (currentPage) {
        case 1:
            return <UserPage />;
        case 2: 
            return <CovidPage />
        case 3:
            return <VaccinationPage />
        case 4:
            return <RecommendationPage />
        default:
    }
}
 
export default Form;