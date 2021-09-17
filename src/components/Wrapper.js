// importing hooks
import { useState , useContext , useEffect } from "react";

// Importing components
import Navbar from "./Navbar";
import Form from "./Form";

// Importing vectors
import next_vector from "../imgs/next.svg";
import previous_vector from "../imgs/previous.svg";

// Importing context
import { AppContext } from "../context/AppState";

const Wrapper = ({setComponentToDisplay}) => {
    // Using context
    const { 
        firstName ,
        lastName ,
        email ,
        currentPage } = useContext(AppContext);
    
    // Changing Shape depending on current page

    const [shapeClass, setShapeClass] = useState("shape");

    useEffect(() => {
        if (currentPage === 1) setShapeClass("rectangle");
        else if (currentPage === 2) setShapeClass("circle");
        else if (currentPage === 3) setShapeClass("star-shape");
        else if (currentPage === 4) setShapeClass("heart");
    }, [currentPage])


    return ( 
        <div className="app-wrapper">
            <Navbar currentPage={currentPage} />
            <Form currentPage={currentPage} setComponentToDisplay={setComponentToDisplay} />
            <div className={shapeClass}></div>
        </div>
     );
}
 
export default Wrapper;