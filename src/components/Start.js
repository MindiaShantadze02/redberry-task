// Importing vector image
import vector from "../imgs/vector.png";
const Start = ({setDisplayForm}) => {
    
    //Function for changing displayForm from false to true
    const switchToForm = () => {
        setDisplayForm(true);
    }

    return ( 
        <div className="start-page">
            <img src={vector} alt="vector" />
            <a href="#" onClick={switchToForm}>კითხვარის დაწყება</a>
        </div>
     );
}
 
export default Start;