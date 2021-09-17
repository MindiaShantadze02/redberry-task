import { createContext , useReducer } from "react";
import AppReducer from "./AppReducer";
// Importing types
import {
    INCREASE_PAGE,
    DECREASE_PAGE,

    // Covid info
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
    waitingFor: "",

    // Reccomendations info
    onlineMeetings: "",
    officeWorkDays: "",
    physicalMeetings: "",
    opinionAboutEnv: ""
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
        // functions for setting covid info
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
    //      function for setting value
    const setValue = (name, value) => {
        dispatch({
            type: SET_VALUE,
            payload: { name , value }
        })
    }

    return <AppContext.Provider value={{
        currentPage: state.currentPage,
        nextPage,
        previousPage,

        // Personal info state
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        
        // Covid info state
        hadCovid: state.hadCovid,
        doneAntibodyTest: state.doneAntibodyTest,
        antibodyNumber: state.antibodyNumber,
        antibodyDate: state.antibodyDate,
        hadCovidDate: state.hadCovidDate,

        setDoneAntibodyTest,
        setAntibodyDate,
        setAntibodyNumber,
        setHadCovidDate,

        // Vaccination info state
        isVaccinated: state.isVaccinated,
        vaccinationDose: state.vaccinationDose,
        waitingFor: state.waitingFor,

        setVaccinationDose,
        setWaitingFor,

        // Recommendation info state
        onlineMeetingsDays: state.onlineMeetingsDays,
        officeWorkDays: state.officeWorkDays,
        physicalMeetings: state.physicalMeetings,
        opinionAboutEnv: state.opinionAboutEnv,

        // setValue
        setValue
    }}>
        {props.children}
    </AppContext.Provider>
}
