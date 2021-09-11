// Improrting types
import {
    INCREASE_PAGE,
    DECREASE_PAGE
} from "./types";

const AppReducer = (state, action) => {
    switch (action.type) {
        case INCREASE_PAGE:
            return {
                ...state,
                 currentPage: state.currentPage + 1
                };
        case DECREASE_PAGE:
            return {...state,
                currentPage: state.currentPage - 1
            };
    }
}
export default AppReducer;