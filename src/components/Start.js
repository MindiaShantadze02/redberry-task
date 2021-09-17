// Importing vector image
import vector from "../imgs/vector.png";
const Start = ({setComponentToDisplay}) => {
    
    //Function for changing displayForm from false to true
    const switchToWrapper = () => {
        setComponentToDisplay("Wrapper");
    }

    return ( 
        <div className="start-page">
            <div className="start-page-content">
                <div className="start-img-wrapper">
                    <div className="start-page-img"></div>
                </div>
                <div className="start-button">
                    <a href="#" onClick={switchToWrapper}>
                        კითხვარის
                        <br />
                        დაწყება
                        </a>
                </div>
            </div>
        </div>
     );
}
 
export default Start;