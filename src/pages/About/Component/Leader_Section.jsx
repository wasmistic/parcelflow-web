import "../../../Assets/Styles/about_hero.scss"
import img1 from "../../../Assets/Image/lead_1.jpg"
import img2 from "../../../Assets/Image/lead_2.jpg"
import img3 from "../../../Assets/Image/lead_3.jpg"
import twitter from "../../../Assets/Svg/twitter.svg"
import linkdn from "../../../Assets/Svg/linkdn.svg"
import slack from "../../../Assets/Svg/slack.svg"
import istagram from "../../../Assets/Svg/istagram.svg"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";



const LeadershipSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);


    return ( 
        <div className="Leadership-fill">
            <div className="Top">
                <h1>Leadership</h1>
            </div>
            <div className="Container">
                <div data-aos="fade-up" className="Card">
                    <img src={img1} alt="avatar" />
                    <div className="Details">
                    <h4>Sheryl Graham</h4>
                    <h5>Chief Operating Officer</h5>
                    <p>Sheryl oversees the firm’s business operations including sales, marketing, business development, and communications.</p>
                    <div className="Icon-Box">
                    <img src={twitter} alt="avatar" />
                    <img src={linkdn} alt="avatar" />
                    </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="Card">
                    <img src={img2} alt="avatar" />
                    <div className="Details">
                    <h4>Chris Anderson</h4>
                    <h5>Chief Product Officer</h5>
                    <p>Chris leads Product Management, Design, and Marketing functions globally. He is responsible for the core products and features.</p>
                    <div className="Icon-Box">
                    <img src={twitter} alt="avatar" />
                    <img src={linkdn} alt="avatar" />
                    <img src={istagram} alt="avatar" />
                    </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="Card">
                    <img src={img3} alt="avatar" />
                    <div className="Details">
                    <h4>Susan Cox</h4>
                    <h5>Chief Financial Officer</h5>
                    <p>Susan is CFO at Stratus, where she leads the finance, facilities, and information technology teams across all locations nationwide.</p>
                    <div className="Icon-Box">
                    <img src={twitter} alt="avatar" />
                    <img src={linkdn} alt="avatar" />
                    <img src={istagram} alt="avatar" />
                    <img src={slack} alt="avatar" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default LeadershipSection;