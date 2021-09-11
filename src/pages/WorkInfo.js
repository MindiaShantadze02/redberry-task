// Importing images
import bike from "../imgs/bike.png";

const WorkInfo = () => {
    return ( 
        <div className="info work-info">
            <div className="info-form">
                <p>რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო, რომელსაც ჩვენი
                თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის
                 მიზეზი, ბევრისთვის კი — ჩვენთან გადმოსვლის. პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც გაიშვიათდა.</p>
                <form id="work-form">
                    <div className="info-input-groups">
                        <label className="info-title required work-info-title">რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?</label>
                        <div className="info-input-group">
                            <input type="radio" name="work-info-online-meetings" id="twice" className="info-label" />
                            <label htmlFor="twice">კვირაში ორჯერ</label>
                        </div>
                        <div className="info-input-group">
                            <input type="radio" name="work-info-online-meetings" id="once" className="info-label" />
                            <label htmlFor="once">კვირაში ერთხელ</label>
                        </div>
                        <div className="info-input-group">
                            <input type="radio" name="work-info-online-meetings" id="once-in-two-weeks" className="info-label" />
                            <label htmlFor="once-in-two-weeks">ორ კვირაში ერთხელ</label>
                        </div>
                        <div className="info-input-group">
                            <input type="radio" name="work-info-online-meetings" id="once-in-month" className="info-label" />
                            <label htmlFor="once-in-month">თვეში ერთხელ</label>
                        </div>
                    </div>
                    <div className="info-input-groups">
                        <label className="info-title required work-info-title">კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?</label>
                        <div className="info-input-group">
                            <input type="radio" name="work-info-office-work" id="zero" className="info-label" />
                            <label htmlFor="zero">0</label>
                        </div>
                        <div className="info-input-group">
                            <input type="radio" name="work-info-office-work" id="one" className="info-label" />
                            <label htmlFor="one">1</label>
                        </div>
                        <div className="info-input-group">
                            <input type="radio" name="work-info-office-work" id="two" className="info-label" />
                            <label htmlFor="two">2</label>
                        </div>
                        <div className="info-input-group">
                            <input type="radio" name="work-info-office-work" id="three" className="info-label" />
                            <label htmlFor="three">3</label>
                        </div>
                        <div className="info-input-group">
                            <input type="radio" name="work-info-office-work" id="four" className="info-label" />
                            <label htmlFor="four">4</label>
                        </div>
                        <div className="info-input-group">
                            <input type="radio" name="work-info-office-work" id="five" className="info-label" />
                            <label htmlFor="five">5</label>
                        </div>
                    </div>
                    <div className="info-input-groups">
                        <label className="info-title required work-info-title">რას ფიქრობ ფიზიკურ შეკრებებზე?</label>
                        <textarea id="phyisical-meetings" cols="60" rows="5"></textarea>
                    </div>
                    <div className="info-input-groups">
                        <label className="info-title required work-info-title">რას ფიქრობ არსებულ გარემოზე:<br /> რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?</label>
                        <textarea id="current-envorinment" cols="60" rows="5"></textarea>
                    </div>
                    <div className="button-wrapper">
                        <button type="submit" className="submit-button">დასრულება</button>
                    </div>
                </form>
            </div>
            <img src={bike} alt="" />
        </div>
     );
}
 
export default WorkInfo;