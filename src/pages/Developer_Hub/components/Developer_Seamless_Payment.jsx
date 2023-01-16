import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import check from "../../../Assets/Svg/check.svg"

const DeveloperSeamlessSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return (
        <div className="Seamless_fill">
           <div className="container">
           <div data-aos="fade-left" className="Box"></div>
            <div data-aos="fade-up" className="Box">
                <h3>Process shipments easily with any of our reliable APIs</h3>
                <p>Give your customers the gift of modern, frictionless, painless payments. Integrate Paystack once and let your customers pay you however they want.</p>
                <div className="content">
                <ul>
                    <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> Card</li>
                    <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> Bank Account</li>
                    <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> Bank Transfer</li>
                    <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> USSD</li>
                </ul>
                <ul>
                    <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> Apple Pay</li>
                    <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> Visa QR</li>
                    <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> Mobile Money</li>
                    <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> POS</li>
                </ul>
                </div>
            </div>
           </div>
        </div>
    );
}
 
export default DeveloperSeamlessSection;