// Importing hooks
import { useContext , useState, useEffect } from "react";

// Importing images
import bike from "../imgs/bike.png";
import next_svg from "../imgs/next.svg"
import previous_svg from "../imgs/previous.svg"

// Importing context
import { AppContext } from "../context/AppState";

const WorkInfo = ({setComponentToDisplay}) => {
    // Using context
    const {
        previousPage,
        nextPage,

        onlineMeetingsDays,
        officeWorkDays,
        physicalMeetings,
        opinionAboutEnv,

        setOnlineMeetingsDays,
        setOfficeWorkDays,
        setPhysicalMeetings,
        setOpinionAboutEnv
    } = useContext(AppContext);

    // Functions for handling input change
    const handleOnlineMeetingDays = ev => setOnlineMeetingsDays(ev.target.value);
    const handleOfficeWorkDays = ev => setOfficeWorkDays(ev.target.value);
    const handlePhysicalMeetings = ev => setPhysicalMeetings(ev.target.value);
    const handleOpinionAboutEnv = ev => setOpinionAboutEnv(ev.target.value);

    // Showing thank you page if everything is ok
    const [showThankYouPage, setShowThankYouPage] = useState(false);
    
    useEffect(()=> {
        if (!onlineMeetingsDays || !officeWorkDays) 
            setShowThankYouPage(false);
        else setShowThankYouPage(true);
    },[
        onlineMeetingsDays,
        officeWorkDays
    ]);

    const submitForm = (ev) => {
        ev.preventDefault();
        if (showThankYouPage) setComponentToDisplay("ThankYou");
    }
    return ( 
        <div className="recommendation-info">
            
            <div className="content-wrapper">
                <section className="form-wrapper work-page-wrapper">
                    <p style={{marginTop:"41px"}}>რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო, რომელსაც ჩვენი
                    თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის
                    მიზეზი, ბევრისთვის კი — ჩვენთან გადმოსვლის.
                    <br />
                    <br />
                    პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც გაიშვიათდა.</p>
                    <form id="recommendation-form" onSubmit={submitForm}>
                        <div className="input-group">
                                <h3 className="required">რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?</h3>
                            <label className="input-group-item radio" htmlFor="twice">
                                <input
                                 type="radio" 
                                 name="work-info-online-meetings" 
                                 id="twice" 
                                 value="კვირაში ორჯერ"
                                 className="info-label"
                                 onChange={handleOnlineMeetingDays} 
                                 checked={onlineMeetingsDays === "კვირაში ორჯერ"}
                                />
                                <div className="radio-dot"></div>
                                კვირაში ორჯერ
                            </label>

                            <label className="input-group-item radio" htmlFor="once">
                                <input
                                 type="radio" 
                                 name="work-info-online-meetings" 
                                 id="once" 
                                 value="კვირაში ერთხელ"
                                 className="info-label" 
                                 onChange={handleOnlineMeetingDays} 
                                 checked={onlineMeetingsDays === "კვირაში ერთხელ"}
                                />
                                <div className="radio-dot"></div>
                                კვირაში ერთხელ
                            </label>

                            <label className="input-group-item radio"htmlFor="once-in-two-weeks">
                                <input 
                                 type="radio" 
                                 name="work-info-online-meetings" 
                                 id="once-in-two-weeks" 
                                 value="ორ კვირაში ერთხელ"
                                 className="info-label"
                                 onChange={handleOnlineMeetingDays}
                                 checked={onlineMeetingsDays === "ორ კვირაში ერთხელ"}
                                />
                                <div className="radio-dot"></div>
                                ორ კვირაში ერთხელ
                            </label>
                            <label className="input-group-item radio" htmlFor="once-in-month">
                                <input 
                                 type="radio"
                                 name="work-info-online-meetings"
                                 id="once-in-month"
                                 value="თვეში ერთხელ"
                                 className="info-label"
                                 onChange={handleOnlineMeetingDays} 
                                 checked={onlineMeetingsDays === "თვეში ერთხელ"}
                                />
                                <div className="radio-dot"></div>
                                თვეში ერთხელ
                            </label>
                        </div>
                        <div className="input-group">
                            <h3 className="required">კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?</h3>
                            <label className="input-group-item radio" htmlFor="zero">
                                <input 
                                 type="radio" 
                                 id="zero"
                                 value="0"
                                 onChange={handleOfficeWorkDays}
                                 checked={officeWorkDays === "0"}
                                 name="officeWorkDays"
                                />
                                <div className="radio-dot"></div>
                                0
                            </label>
                            <label className="input-group-item radio" htmlFor="one">
                                <input
                                 type="radio" 
                                 id="one"
                                 value="1"
                                 onChange={handleOfficeWorkDays} 
                                 checked={officeWorkDays === "1"}
                                 name="officeWorkDays"
                                />
                                <div className="radio-dot"></div>
                                1
                            </label>
                            <label className="input-group-item radio" htmlFor="two">
                                <input
                                 type="radio" 
                                 id="two" 
                                 value="2"
                                 onChange={handleOfficeWorkDays}
                                 checked={officeWorkDays === "2"}
                                 name="officeWorkDays"
                                />
                                <div className="radio-dot"></div>
                                2
                            </label>
                            <label className="input-group-item radio" htmlFor="three">
                                <input
                                 type="radio" 
                                 id="three" 
                                 value="3"
                                 onChange={handleOfficeWorkDays}
                                 checked={officeWorkDays === "3"}
                                 name="officeWorkDays"
                                />
                                <div className="radio-dot"></div>
                                3
                            </label>
                            <label className="input-group-item radio" htmlFor="four">
                                <input
                                 type="radio" 
                                 id="four" 
                                 value="4"
                                 onChange={handleOfficeWorkDays}
                                 checked={officeWorkDays === "4"}
                                 name="officeWorkDays"
                                />
                                <div className="radio-dot"></div>
                                4
                            </label>
                            <label className="input-group-item radio" htmlFor="five">
                                <input
                                 type="radio" 
                                 id="five" 
                                 value="5"
                                 onChange={handleOfficeWorkDays}
                                 checked={officeWorkDays === "5"}
                                 name="officeWorkDays"
                                />
                                <div className="radio-dot"></div>
                                5
                            </label>
                        </div>
                        <div className="input-group">
                            <h3>რას ფიქრობ ფიზიკურ შეკრებებზე?</h3>
                            <textarea 
                            id="phyisical-meetings"
                            className="textarea"
                            onChange={handlePhysicalMeetings}
                            value={physicalMeetings}></textarea>
                        </div>
                        <div className="input-group">
                            <h3>რას ფიქრობ არსებულ გარემოზე:<br /> რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?</h3>
                            <textarea 
                            id="current-envorinment" 
                            className="textarea"
                            onChange={handleOpinionAboutEnv}
                            value={opinionAboutEnv}></textarea>
                        </div>
                        <div className="end-button-wrapper">
                            <button type="submit" className="submit-button">დასრულება</button>
                        </div>
                    </form>
                </section>
                <aside className="img-wrapper work-page-img-wrapper">
                    <img src={bike} alt="" />
                </aside>
            </div>
            <div className="arrows">
                <button onClick={previousPage}>
                    <img src={previous_svg} alt="previous" />
                </button>
            </div>
        </div>
     );
}
 
export default WorkInfo;