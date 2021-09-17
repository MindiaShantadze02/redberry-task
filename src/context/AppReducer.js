// Improrting types
import {
    INCREASE_PAGE,
    DECREASE_PAGE,

    // Personal info
    SET_FIRSTNAME,
    SET_LASTNAME,
    SET_EMAIL,

    // Covid info
    SET_HADCOVID,
    SET_ANTIBODY_TEST,
    SET_ANTIBODY_NUMBER,
    SET_ANTIBODY_DATE,
    SET_HADCOVID_DATE,

    // Vaccination info
    SET_VACCINATIONDOSE,
    SET_WAITING_FOR,

    // Setting value
    SET_VALUE
} from "./types";

const AppReducer = (state, action) => {
    switch (action.type) {
        case INCREASE_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1
            }
        case DECREASE_PAGE:
            return {
                ...state,
                currentPage: state.currentPage - 1
            }
        // Setting Covid 19 form state
        case SET_ANTIBODY_TEST:
            return {
                ...state,
                doneAntibodyTest: action.payload
            }
        case SET_ANTIBODY_NUMBER:
            return {
                ...state,
                antibodyNumber: action.payload
            }
        case SET_ANTIBODY_DATE:
            return {
                ...state,
                antibodyDate: action.payload
            }
        case SET_HADCOVID_DATE:
            return {
                ...state,
                hadCovidDate: action.payload
            }
        // Setting Vaccination form state
        case SET_VACCINATIONDOSE:
            return {
                ...state,
                vaccinationDose: action.payload
            }
        case SET_WAITING_FOR:
            return {
                ...state,
                waitingFor: action.payload
            }

        // Setting values if other state elements are not depended on it
        case SET_VALUE:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }

        // return state if default
        default:
            return state;
    }
}
export default AppReducer;