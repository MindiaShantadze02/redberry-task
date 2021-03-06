// Importing React Hooks
import { useState , useContext , useEffect } from "react";

// Importing img sources
import user_info_img from "../imgs/people.png";
import next_svg from "../imgs/next.svg"
import next_uncompleted_svg from "../imgs/next-uncompleted.svg";
import next_uncompleted_clicked_svg from "../imgs/next-uncompleted-clicked.svg";

// Importing app context
import { AppContext } from "../context/AppState";

const UserInfo = () => {
    
    // Using context
    const { 
        firstName,
        lastName,
        email,
        
        setValue,
        
        nextPage
        } = useContext(AppContext);

    // Error state
    const [firstNameErr, setFirstNameErr] = useState("");
    const [lastNameErr, setLastNameErr] = useState("");
    const [emailErr, setEmailErr] = useState("");

    // Input and error handler functions

    //      getting and validating first name
    const handleFirstNameChange = ev => {

        const {name ,value} = ev.target;

        setValue(name, value);

        const regex = /^[a-zA-Zა-ჰ]{3,255}$/;

        let error;
        if (!value) {
            error = "სახელის ველი სავალდებულოა";
        } else if (value.length > 0 && value.length < 3 ) {
            error = "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოგან";
        } else if (value.length > 255) {
            error = "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან";
        } else if (!regex.test(value)) {
            error = "სახელის ველი უნდა შეიცავდეს მხოლოდ ალფაბეტის სიმბოლოებს(ა-ჰ, a-z, A-Z)";
        } else {
            error = null;
        }

        setFirstNameErr(error);
    }
    //      getting and validating last name
    const handleLastNameChange = ev=> {
        const { name , value } = ev.target;

        setValue(name, value);

        const regex = /^[a-zA-Zა-ჰ]{3,255}?$/;

        let error;
        if (!value) {
            error = "გვარის ველი სავალდებულოა";
        } else if (value.length > 0 && value.length < 3 ) {
            error = "გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოგან";
        } else if (value.length > 255) {
            error = "გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან";
        } else if (!regex.test(value)) {
            error = "გვარის ველი უნდა შეიცავდეს მხოლოდ ალფაბეტის სიმბოლოებს(ა-ჰ, a-z, A-Z)";
        } else {
            error = null;
        }

        setLastNameErr(error);
    }

    //      getting and validating email
    const handleEmailChange = ev => {

        const { name , value } = ev.target;

        setValue(name, value);

        const emailRegex = /^[\w]{3,255}?[a-zA-Z0-9]{0,255}@[a-z]{2,50}\.[a-z]{2,4}$/;
        const redberryRegex = /^[\w]{3,255}?[a-zA-Z0-9]{0,255}@redberry\.ge$/;

        let error;
        
        if (!value) {
            error = "მეილის ველი სავალდებულოა";
        } else if (!emailRegex.test(value)) {
            error = "თქვენს მიერ შეყვანილი მეილი არასწორია";
        } else if (emailRegex.test(value) && !redberryRegex.test(value)) {
            error = "გთხოვთ დარეგისტრირდეთ რედბერის მეილით(youremail@redberry.ge)";
        }

        setEmailErr(error);
    }

    // Checking if user can go to next page or not
    const isValid = !firstNameErr && !lastNameErr && !emailErr;
    const isNotEmpty = firstName !== "" && lastName !== "" && email !== "";

    // Displaying errors if fields are empty
    const displayErrors = () => {
        if (!isNotEmpty) {
            if (!firstName) {
                setFirstNameErr("სახელის ველი სავალდებულოა");
            }
            if (!lastName) {
                setLastNameErr("გვარის ველი სავალდებულოა");
            }
            if (!email) {
                setEmailErr("მეილის ველი სავალდებულოა");
            }
        }
    }
    // Displaying next page if there are no problems
    const goToNextPage = () => {
        nextPage();
    }

    return ( 
        <div className="user-info">
            <div className="content-wrapper">
                <section className="form-wrapper">
                    <form id="user-form">
                        <div className="input-group">
                            <h3 htmlFor="name" className="required">სახელი</h3>
                            <input 
                            type="text"
                            name="firstName" 
                            id="first-name" 
                            className="text-input"
                            onChange={handleFirstNameChange}
                            value={firstName} 
                            autoComplete="off" />
                        </div>
                        {firstNameErr && (
                            <p className="text-danger">{firstNameErr}</p>
                        )}
                        <div className="input-group">
                            <h3 htmlFor="last-name" className="required">გვარი</h3>
                            <input 
                            type="text"
                            name="lastName" 
                            id="last-name" 
                            className="text-input"
                            onChange={handleLastNameChange}
                            value={lastName} 
                            autoComplete="off" />
                        </div>
                        {lastNameErr && (
                            <p className="text-danger">{lastNameErr}</p>
                        )}
                        <div className="input-group">
                            <h3 htmlFor="email" className="required">მეილი</h3>
                            <input 
                            type="text" 
                            name="email"
                            id="email" 
                            className="text-input"
                            onChange={handleEmailChange}
                            value={email} 
                            autoComplete="off" />
                        </div>
                        {emailErr && (
                            <p className="text-danger">{emailErr}</p>
                        )}
                    </form>
                    <span className="required-fields-info">
                    <hr />
                        *-ით მონიშნული ველების შევსება სავალდებულოა
                    </span>
                </section>
                <aside className="img-wrapper">
                    <img src={user_info_img} alt="user-info-img" />
                </aside>
            </div>
            <div className="arrows">
            {isValid && isNotEmpty ? 
                (<button onClick={goToNextPage}>
                    <img src={next_svg} alt="next" />
                </button>) : 
                (<button onClick={displayErrors}>
                    <img src={next_uncompleted_svg} alt="next-uncompleted" />
                </button>)
            }
            
                
            </div>
        </div>
     );
}
 
export default UserInfo;