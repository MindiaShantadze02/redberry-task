// Importing vector image
import vector from "../imgs/vector.png";
const Start = ({setComponentToDisplay}) => {
    
    //Function for changing displayForm from false to true
    const switchToWrapper = () => {
        setComponentToDisplay("Wrapper");
    }

    return ( 
        <div className="start-page">
            <img src={vector} alt="vector" />
            <a href="#" onClick={switchToWrapper}>კითხვარის <br /> დაწყება</a>
        </div>
     );
}
 
export default Start;