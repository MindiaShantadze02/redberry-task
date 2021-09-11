// Importing react hooks
import { useContext } from "react";
// Importing vectors
import next_vector from "../imgs/next.svg";
import previous_vector from "../imgs/previous.svg";
// Importing app context
import { AppContext } from "../context/AppState";

const Arrows = () => {
    // Using context
    const { increasePage, decreasePage, currentPage } = useContext(AppContext);
    return ( 
        <div className="arrows">
            {currentPage > 0 && (
                
                <button onClick={decreasePage}>
                <img src={previous_vector} alt="previous_vector" />
                </button>

            )}
            {currentPage < 3 && (

                <button onClick={increasePage}>
                    <img src={next_vector} alt="next_vector" />
                </button>

            )}     
        </div>
     );
}
 
export default Arrows;