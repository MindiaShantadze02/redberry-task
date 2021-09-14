import { createContext , useReducer } from "react";
import AppReducer from "./AppReducer";
// Importing types
import {
    SET_FIRSTNAME,
    SET_LASTNAME,
    SET_EMAIL,
    SET_FIRSTNAME_ERR,
    SET_LASTNAME_ERR,
    SET_EMAIL_ERR,
    INCREASE_PAGE,
    DECREASE_PAGE
} from "./types";

// App context
export const AppContext = createContext();

// InitialState
export const initialState = {
    currentPage: 1,

    // Personal info
    firstName: "",
    lastName: "",
    email: ""
}

// Context provider
export const AppState = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const nextPage = () => {
        dispatch({
            type: INCREASE_PAGE
        })
    }
    const previousPage = () => {
        dispatch({
            type: DECREASE_PAGE
        });
    }

    /* Functions for getting value from form */
        // functions for getting and validating personal info
    const setFirstName = text => {
        dispatch({
            type: SET_FIRSTNAME,
            payload: text
        });
    }
    const setLastName = text => {
        dispatch({
            type: SET_LASTNAME,
            payload: text
        });
    }
    const setEmail = text => {
        dispatch({
            type: SET_EMAIL,
            payload: text
        });
    }
    return <AppContext.Provider value={{
        currentPage: state.currentPage,
        nextPage,
        previousPage,

        // Personal info state
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        
        setFirstName,
        setLastName,
        setEmail,
    }}>
        {props.children}
    </AppContext.Provider>
}
