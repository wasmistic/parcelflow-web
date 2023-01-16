import {Link} from "react-router-dom"
import check from "../../../Assets/Svg/check.svg"
import circle_check from "../../../Assets/Svg/arrow_circle.svg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DeveloperPhoneSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return (
        <div className="Phone_fill">
           <div className="container">
           <div data-aos="fade-left" className="Box"></div>
            <div data-aos="fade-up" className="Box">
                <h3>Monitor your business performance while on the move</h3>
                <p>Sign up for Paystack and track your most important business metrics on your mobile device. Monitor info such as sales, customer information, success rates, and more!</p>
                <div className="content">
                <ul>
                    <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> Signup for Paystack in minutes</li>
                    <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> Send invoices from your phone</li>
                    <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> Look up transactions</li>
                </ul>
                <ul>
                    <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> Get alerts for important updates</li>
                    <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> Get instant support</li>
                </ul>
                </div>
                <Link> <img src={circle_check} alt="avatar" />  Learn More About The Paystack Mobile App</Link>
            </div>
           </div>
        </div>
    );
}
 
export default DeveloperPhoneSection;