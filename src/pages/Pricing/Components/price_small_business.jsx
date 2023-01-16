import arrow from "../../../Assets/Image/arrow.png"
import start from "../../../Assets/Image/price_love.svg"
import {Link} from "react-router-dom"
// import img1 from "../../../Assets/Image/tour.svg"
// import img2 from "../../../Assets/Image/survey.svg"
// import img3 from "../../../Assets/Image/four_card1.png"
// import Button from "../../../Components/Button"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


const PriceSmallBusinesses = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return (
        <div className="Small_Business">
            <div className="Price_Container">
                <div data-aos="fade-up" className="Top">
                    <div className="Box">
                        <img src={start} alt="avatar" />
                        <h3>Starter</h3>
                        <p>Build great relationships across the customer journey. Support, onboard, and engage customers with Starter.</p>
                        <small>from <span>$74</span>/mo <span className="span_block">when billed annually</span></small>
                        <Link>How we calculate price</Link>
                    </div>
                    <div className="btn">
                        Try for free
                        <img src={arrow} alt="avatar" />
                    </div>
                </div>
                <div data-aos="fade-up" className="Bottom">
                  <div className="Box">
                  <h4>Support and engage your customers at every step of their journey</h4>
                    <ul>
                        <li>Chat & email support</li>
                        <li>Targeted outbound email</li>
                        <li>In-product messages</li>
                    </ul>
                    <h4>Scale without scaling your team</h4>
                    <ul>
                        <li>Shared Inbox</li>
                        <li>Help center</li>
                        <li>Conversation routing bot</li>
                        <li>Saved Replies/Macros</li>
                    </ul>
                  </div>
                  <div className="Box">
                  <h4>Gain insights & Improve customer experience</h4>
                    <ul>
                        <li>Company & behavioral data</li>
                        <li>Reporting dashboards</li>
                        <li>Conversation ratings & tags</li>
                    </ul>
                    <h4>Connect the tools you already use</h4>
                    <ul>
                        <li>Slack, HubSpot, Pipedrive</li>
                        <li>And 250+ more in the app store</li>
                    </ul>
                  </div>
                  <div className="btn_box">
                    <Link>Show all features <img src={arrow} alt="avater" /> </Link>
                  </div>
                </div>
            </div>
        </div>
    );
}
 
export default PriceSmallBusinesses;