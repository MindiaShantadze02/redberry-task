// Importing components
import Navbar from "./Navbar";
import Form from "./Form";
import { useState , useContext } from "react";

// Importing vectors
import next_vector from "../imgs/next.svg";
import previous_vector from "../imgs/previous.svg";

import { AppContext } from "../context/AppState";

const Wrapper = () => {
    // Using context
    const { 
        firstName ,
        lastName ,
        email ,
        currentPage } = useContext(AppContext);

    return ( 
        <div className="app-wrapper">
            <Navbar currentPage={currentPage} />
            <Form currentPage={currentPage} />
        </div>
     );
}
 
export default Wrapper;