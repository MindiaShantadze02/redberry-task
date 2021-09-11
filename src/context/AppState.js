import { createContext , useReducer } from "react";
import AppReducer from "./AppReducer";
// Importing types
import {
    INCREASE_PAGE,
    DECREASE_PAGE
} from "./types";

// App context
export const AppContext = createContext();

// InitialState
export const initialState = {
    currentPage: 0,
    personalInfo: {
        firstname: "",
        lastname: "",
        email: "",
        hasCovid: null,
        isVaccinated: null,
        onlineMeetings: "",
        workFromOffice: "",
        physicalMeetings: "",
        opinionAboutEnvorinment: ""
    }
}

// Context provider
export const AppState = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Function for going to next page
    const increasePage = () => {
        dispatch({
            type: INCREASE_PAGE
        })
    }

    // Function for going to previous page
    const decreasePage = () => {
        dispatch({
            type: DECREASE_PAGE
        })
        console.log(state.currentPage);
    }

    return <AppContext.Provider value={{
        currentPage: state.currentPage,
        increasePage,
        decreasePage
    }}>
        {props.children}
    </AppContext.Provider>
}
