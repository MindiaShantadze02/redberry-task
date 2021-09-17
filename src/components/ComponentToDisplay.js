// Importing hooks
import { useState } from "react";

// Importing components
import Start from "./Start";
import Wrapper from "./Wrapper";
import ThankYou from "./ThankYou";

const ComponentToDisplay = () => {
    const [componentDoDisplay, setComponentToDisplay] = useState("Start");

    switch (componentDoDisplay) {
        case "Start":
            return <Start setComponentToDisplay={setComponentToDisplay} />
        case "Wrapper":
            return <Wrapper setComponentToDisplay={setComponentToDisplay} />
        case "ThankYou":
            return <ThankYou />
        default:
            return
    }
}
 

export default ComponentToDisplay;