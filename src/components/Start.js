// Importing vector image
import vector from "../imgs/vector.png";

// Importing framer motion
import { motion } from "framer-motion";


const Start = ({setComponentToDisplay}) => {
    
    //Function for changing displayForm from false to true
    const switchToWrapper = () => {
        setComponentToDisplay("Wrapper");
    }

    return ( 
        <div className="start-page">
            <div className="start-page-content">
                <div className="start-page-img">
                    <img src={vector} alt="" />
                </div>
                <motion.div className="start-button"
                initial={{y:0, opacity: 0}}
                animate={{y:300, opacity: 1}}
                transition={{duration: 1.3}}
                >
                    <a href="#" onClick={switchToWrapper}>
                        კითხვარის
                        <br />
                        დაწყება
                        </a>
                </motion.div>
            </div>
        </div>
     );
}
 
export default Start;