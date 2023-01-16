import img1 from "../../../Assets/Image/price_support.svg"
import img2 from "../../../Assets/Image/price_engage.svg"
import img3 from "../../../Assets/Image/price_convert.svg"
// import clog from "../../../Assets/Image/price_clog.svg"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import arrow from "../../../Assets/Image/arrow.png"
import Button from "../../../Components/Button"
import { Link } from "react-router-dom"


const PriceMoreBusinesses = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);
    return (
        <div className="More_Business">
            <h4>Choose a solution to get started:</h4>
            <div className="Card_Content">
                <div data-aos="fade-up" className="Card">
                    <img src={img1} alt="avatar" />
                    <h3>Support</h3>
                    <p>High-quality, personalized help at scale</p>
                    <Button name="get a demo"/>
                    <Link>How we calculate price</Link>
                    <hr />
                    <h4>Human support</h4>
                    <ul>
                        <li>Live chat for support</li>
                        <li>Team inboxes</li>
                        <li>Tickets</li>
                        <li>Service Level Agreement rules</li>
                        <li>Workload management</li>
                        <li>Role-based permissions</li>
                        <li>Outcome reporting</li>
                    </ul>
                    <h4>Self-serve support</h4>
                    <ul>
                        <li>Help articles</li>
                        <li>Conversational bots</li>
                        <li>Resolution bot</li>
                    </ul>
                    <h4>Proactive support</h4>
                    <ul>
                        <li>Targeted messaging</li>
                        <li>Product Tours</li>
                    </ul>
                    <div className="Btn_Box">
                        <Link>Show all features <img src={arrow} alt="avatar" /> </Link>
                    </div>
                </div>
                <div data-aos="fade-up" className="Card">
                    <img src={img2} alt="avatar" />
                    <h3>Engage</h3>
                    <p>Onboard, activate and re-engage customers</p>
                    <Button name="get a demo"/>
                    <Link>How we calculate price</Link>
                    <hr />
                    <h4>Engagement and adoption</h4>
                    <ul>
                        <li>Outbound email and in-product messaging</li>
                        <li>Push messages & notifications</li>
                        <li>Custom bots</li>
                        <li>Mobile Carousels</li>
                        <li>Banner messages</li>
                        <li>News</li>
                        <li>Multi-channel campaigns</li>
                    </ul>
                    <h4>Optimize performance</h4>
                    <ul>
                        <li>A/B testing & control groups</li>
                        <li>Message versioning</li>
                    </ul>
                    <h4>Personalize targeting</h4>
                    <ul>
                        <li>Custom events and customer segments</li>
                        <li>Salesforce & Marketo integrations</li>
                    </ul>
                    <div className="Btn_Box">
                        <Link>Show all features <img src={arrow} alt="avatar" /> </Link>
                    </div>
                </div>
                <div data-aos="fade-up" className="Card">
                    <img src={img3} alt="avatar" />
                    <h3>Convert</h3>
                    <p>Turn website visitors into paying customers</p>
                    <Button name="get a demo"/>
                    <Link>How we calculate price</Link>
                    <hr />
                    <h4>Website conversion</h4>
                    <ul>
                        <li>Conversational chatbots</li>
                        <li>Live chat for sales</li>
                        <li>Smart lead qualification</li>
                    </ul>
                    <h4>Manage leads</h4>
                    <ul>
                        <li>Multiple team inboxes</li>
                        <li>Automatic meeting booking</li>
                        <li>Conversation routing rules</li>
                        <li>Account-based assignments</li>
                        <li>Revenue and performance reporting</li>
                    </ul>
                    <h4>Prospect data</h4>
                    <ul>
                        <li>Salesforce & Marketo integrations</li>
                        <li>Reverse IP lookup and data enrichment</li>
                    </ul>
                    <div className="Btn_Box">
                        <Link>Show all features <img src={arrow} alt="avatar" /> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PriceMoreBusinesses;