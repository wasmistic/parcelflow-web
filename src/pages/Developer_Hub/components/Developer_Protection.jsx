import check from "../../../Assets/Svg/check.svg"
import media from "../../../Assets/Video/Advanced-Fraud-Protection.mp4"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DeveloperProtectionSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return (
        <div className="Protection_fill">
            <div className="container">
                <div data-aos="fade-up" className="Box">
                    <h3>Protect yourself and your customers with advanced fraud detection</h3>
                    <p>Paystack’s combination of automated and manual fraud systems protect you from fraudulent transactions and associated chargeback claims.</p>
                    <ul>
                    <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> PCI-DSS-certified systems</li>
                    <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> Automated fraud monitoring</li>
                    <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> When a fraud attempt is discovered with any Paystack merchant, ALL Paystack merchants become protected from further attempts</li>
                </ul>
                </div>
               <video data-aos="fade-left" loop autoPlay muted>
               <source src={media} type="video/mp4"/>
               </video>
            </div>
        </div>
    );
}
 
export default DeveloperProtectionSection;