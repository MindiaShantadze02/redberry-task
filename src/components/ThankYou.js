// Importing images
import star from "../imgs/star.svg";

// Importing framer motion
import { motion } from "framer-motion";


const ThankYou = () => {
    return ( 
        <div>
            <div className="hidden-div"></div>
            <div className="thank-you-page">
                <motion.div 
                initial={{y: -100}}
                animate={{y:0}}
                >
                    <motion.img 
                    initial={{x: 30, y: 30, opacity: 0}}
                    animate={{x: 0, y: 0, opacity: 1}}
                    transition={{duration: 0.5 ,type: "ease-out", delay:1}}
                    src={star} alt="start" className="star" />

                    <motion.h1 
                    initial={{y: -100}}
                    animate={{y: 0}}
                    transition={{duration: 0.5}}
                    >
                        მადლობა
                    </motion.h1>
                    
                    <motion.img  
                    initial={{x: -30, y:-30, opacity: 0}}
                    animate={{x: 0, y: 0, opacity: 1}}
                    transition={{duration: 0.5 , type: "ease-out", delay: 1}}
                    src={star} className="small-star" alt="" />
                </motion.div>
            </div>
        </div>
     );
}
 
export default ThankYou;