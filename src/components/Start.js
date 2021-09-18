// Importing vector image
import main_vector from "../imgs/main-vector.png";
import vector from "../imgs/vector.svg";
// Importing framer motion
import { motion } from "framer-motion";

// Framermotion variants
const startContentVariant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    }
}

const Start = ({setComponentToDisplay}) => {
    
    //Function for changing displayForm from false to true
    const switchToWrapper = () => {
        setComponentToDisplay("Wrapper");
    }
    return ( 
        <motion.div className="start-page" 
        initial={{backgroundImage: `url(${main_vector})`}}
        animate={{backgroundImage: "none"}}
        transition={{delay: 0.6}}
        >

            <motion.div className="start-page-content" 
                initial={startContentVariant.initial}
                animate={startContentVariant.animate}
                transition={{delay: 0.7}}
            >
                <div className="start-page-img">
                    <motion.img src={vector} alt="" 
                    initial={{scale: 13}}
                    animate={{scale: [12,10,7,5,2,1]}}
                    transition={{delay: 0.6,duration: 0.5}}
                    />
                </div>
                
                <motion.div className="start-button"
                initial={{y:-100, opacity: 0}}
                animate={{y:0, opacity: 1}}
                transition={{duration: 1.3,delay: 0.8}}
                >
                    <a href="#" onClick={switchToWrapper}>
                        კითხვარის
                        <br />
                        დაწყება
                        </a>
                </motion.div>

            </motion.div>

        </motion.div>
     );
}
 
export default Start;