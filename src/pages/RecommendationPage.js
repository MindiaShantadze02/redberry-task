// Importing hooks
import { useContext } from "react";

// Importing images
import bike from "../imgs/bike.png";
import next_svg from "../imgs/next.svg"
import previous_svg from "../imgs/previous.svg"

// Importing context
import { AppContext } from "../context/AppState";

const WorkInfo = () => {
    
    const {
        nextPage,
        previousPage
    } = useContext(AppContext);

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
                    <form id="work-form">
                        <div className="input-group">
                                <h3 className="required">რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?</h3>
                            <div className="input-group-item">
                                <input type="radio" name="work-info-online-meetings" id="twice" className="info-label" />
                                <label htmlFor="twice">კვირაში ორჯერ</label>
                            </div>

                            <div className="input-group-item">
                                <input type="radio" name="work-info-online-meetings" id="once" className="info-label" />
                                <label htmlFor="once">კვირაში ერთხელ</label>
                            </div>

                            <div className="input-group-item">
                                <input type="radio" name="work-info-online-meetings" id="once-in-two-weeks" className="info-label" />
                                <label htmlFor="once-in-two-weeks">ორ კვირაში ერთხელ</label>
                            </div>
                            <div className="input-group-item">
                                <input type="radio" name="work-info-online-meetings" id="once-in-month" className="info-label" />
                                <label htmlFor="once-in-month">თვეში ერთხელ</label>
                            </div>
                        </div>
                        <div className="input-group">
                            <h3 className="required">კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?</h3>
                            <div className="input-group-item">
                                <input type="radio" id="zero" />
                                <label htmlFor="zero">0</label>
                            </div>
                            <div className="input-group-item">
                                <input type="radio" id="one" />
                                <label htmlFor="one">1</label>
                            </div>
                            <div className="input-group-item">
                                <input type="radio" id="two" />
                                <label htmlFor="two">2</label>
                            </div>
                            <div className="input-group-item">
                                <input type="radio" id="three" />
                                <label htmlFor="three">3</label>
                            </div>
                            <div className="input-group-item">
                                <input type="radio" id="four" />
                                <label htmlFor="four">4</label>
                            </div>
                            <div className="input-group-item">
                                <input type="radio" id="five" />
                                <label htmlFor="five">5</label>
                            </div>
                        </div>
                        <div className="input-group">
                            <h3>რას ფიქრობ ფიზიკურ შეკრებებზე?</h3>
                            <textarea id="phyisical-meetings" className="textarea"></textarea>
                        </div>
                        <div className="input-group">
                            <h3>რას ფიქრობ არსებულ გარემოზე:<br /> რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?</h3>
                            <textarea id="current-envorinment" className="textarea"></textarea>
                        </div>
                        <div className="button-wrapper">
                            <button type="submit" className="submit-button">დასრულება</button>
                        </div>
                    </form>
                </section>
                <aside className="img-wrapper work-page-img-wrapper">
                    <img src={bike} alt="" />
                </aside>
            </div>
            <div className="arrows">
                <button>
                    <img src={previous_svg} alt="previous" />
                </button>
                <button>
                        <img src={next_svg} alt="next" />
                </button>
            </div>
        </div>
     );
}
 
export default WorkInfo;