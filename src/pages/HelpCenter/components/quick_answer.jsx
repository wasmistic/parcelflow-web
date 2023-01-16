import mark from "../../../Assets/Svg/mark.svg"
import arrow from "../../../Assets/Svg/arrow_circle.svg"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const NeedQuickAnswer = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);
    return ( 
        <div className="Quick_Answer">
            <div data-aos="fade-left" className="Box"></div>
                <div data-aos="fade-up" className="Box">
                    <h3>Need a quick answer?</h3>
                    <p>The Paystack Help Desk has</p>
                    <ul>
                        <li>
                            <img src={mark} alt="check" />
                        Detailed guides and instructions
                        </li>
                        <li>
                            <img src={mark} alt="check" />
                            How-to videos
                        </li>
                        <li>
                            <img src={mark} alt="check" />
                            Answers to the most common questions
                        </li>
                    </ul>
                    <div className="link_box">
                        <img src={arrow} alt="arrow" />
                        <Link>Search the Help Desk</Link>
                    </div>
                </div>
        </div>
     );
}
 
export default NeedQuickAnswer;