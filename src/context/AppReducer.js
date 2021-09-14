// Improrting types
import {
    INCREASE_PAGE,
    DECREASE_PAGE,

    SET_FIRSTNAME,
    SET_LASTNAME,
    SET_EMAIL,
    SET_FIRSTNAME_ERR,
    SET_LASTNAME_ERR,
    SET_EMAIL_ERR
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

        // Setting personal form state
        case SET_FIRSTNAME:
            return {
                ...state,
                firstName: action.payload
            }
        case SET_LASTNAME:
            return {
                ...state,
                lastName: action.payload
            }
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case SET_FIRSTNAME_ERR:
            return {
                ...state,
                firstName: action.payload
            }
        case SET_LASTNAME_ERR:
            return {
                ...state,
                lastName: action.payload
            }
        case SET_EMAIL_ERR:
            return {
                ...state,
                emailErr: action.payload
            }
        // Setting Covid 19 form state

        // Setting Vaccination form state


        // Setting recommendation form state
    }
}
export default AppReducer;