import { createContext , useReducer } from "react";
import AppReducer from "./AppReducer";
// Importing types
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
    SET_ISVACCINATED,
    SET_VACCINATIONDOSE,
    SET_WAITING_FOR
} from "./types";

// App context
export const AppContext = createContext();

// InitialState
export const initialState = {
    currentPage: 1,

    // Personal info
    firstName: "",
    lastName: "",
    email: "",

    // Covid info
    hadCovid: "",
    doneAntibodyTest: "",
    antibodyNumber: "",
    antibodyDate: "",
    hadCovidDate: "",

    // Vaccination info
    isVaccinated: "",
    vaccinationDose: "",
    waitingFor: ""
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
        // functions for setting personal info
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
        // functions for setting covid info
    const setHadCovid = input => {
        dispatch({
            type: SET_HADCOVID,
            payload: input
        })
    }
    const setDoneAntibodyTest = input => {
        dispatch({
            type: SET_ANTIBODY_TEST,
            payload: input
        });
    }
    const setAntibodyDate = input => {
        dispatch({
            type: SET_ANTIBODY_DATE,
            payload: input
        });
    }
    const setAntibodyNumber = input => {
        dispatch({
            type: SET_ANTIBODY_NUMBER,
            payload: input
        });
    }
    const setHadCovidDate = input => {
        dispatch({
            type: SET_HADCOVID_DATE,
            payload: input
        });
    }
        // functions for setting vaccination info
    const setIsVaccinated = input => {
        dispatch({
            type: SET_ISVACCINATED,
            payload: input
        });
    }
    const setVaccinationDose = input => {
        dispatch({
            type: SET_VACCINATIONDOSE,
            payload: input
        });
    }
    const setWaitingFor = input => {
        dispatch({
            type: SET_WAITING_FOR,
            payload: input
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
        
        // Covid info state
        hadCovid: state.hadCovid,
        doneAntibodyTest: state.doneAntibodyTest,
        antibodyNumber: state.antibodyNumber,
        antibodyDate: state.antibodyDate,
        hadCovidDate: state.hadCovidDate,

        setHadCovid,
        setDoneAntibodyTest,
        setAntibodyDate,
        setAntibodyNumber,
        setHadCovidDate,

        // Vaccination info state
        isVaccinated: state.isVaccinated,
        vaccinationDose: state.vaccinationDose,
        waitingFor: state.waitingFor,

        setIsVaccinated,
        setVaccinationDose,
        setWaitingFor
    }}>
        {props.children}
    </AppContext.Provider>
}
