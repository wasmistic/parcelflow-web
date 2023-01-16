import { Fragment } from "react";
import { Link } from "react-router-dom";
import search from "../../../Assets/Svg/search.svg"
import arrow from "../../../Assets/Svg/arrow_circle.svg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact_Hero_Section = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);
    return ( 
        <Fragment>
            <div className="Hero_fill">
                <h1>We’re happy to help!</h1>
                <p>Need a quick answer? Enter your question below for instant responses.</p>
                <div data-aos="fade-up" className="Input_inner_box">
                    <h5>What would you like to ask?</h5>
                   <div className="input_box">
                    <img src={search} alt="search-icon" />
                   <input type="text" placeholder="e.g What is a Ghouse Starter Business?" />
                   </div>
                </div>
                <div data-aos="fade-up" className="Card_box">
                    <h5>Here are some of our most common entries</h5>
                    <div className="Card_content">
                        <div className="card">
                            <h4 >
                            How to turn on international payments on Paystack?
                            </h4>
                            <div className="arrow_box">
                            <img src={arrow} alt="arrow" />
                            <Link>get quick help</Link>
                            </div>
                        </div>
                        <div className="card">
                            <h4>
                            Can Paystack process payments in USD/international currencies?
                            </h4>
                            <div className="arrow_box">
                            <img src={arrow} alt="arrow" />
                            <Link>get quick help</Link>
                            </div>
                        </div>
                        <div className="card">
                            <h4 >Can I accept payments in USD?</h4>
                            <div className="arrow_box">
                            <img src={arrow} alt="arrow" />
                            <Link>get quick help</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Contact_Hero_Section;