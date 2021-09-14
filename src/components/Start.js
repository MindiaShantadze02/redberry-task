// Importing vector image
import vector from "../imgs/vector.png";
const Start = ({setDisplayWrapper}) => {
    
    //Function for changing displayForm from false to true
    const switchToWrapper = () => {
        setDisplayWrapper(true);
    }

    return ( 
        <div className="start-page">
            <img src={vector} alt="vector" />
            <a href="#" onClick={switchToWrapper}>კითხვარის <br /> დაწყება</a>
        </div>
     );
}
 
export default Start;