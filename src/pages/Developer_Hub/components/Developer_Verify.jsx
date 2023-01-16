import check from "../../../Assets/Svg/check.svg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DeveloperVerifyIdentity = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return(
        <div className="Verify_fill">
    <div className="container">
    <div data-aos="fade-left" className="Box"></div>
     <div data-aos="fade-up" className="Box">
         <h3>Verify the identity of your customers</h3>
         <p>Need to verify that your customer is who they say they are? Our verification APIs allow you to do this in various ways.</p>
         <ul>
             <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> Verify identity with a bank account number</li>
             <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> Verify identity with a phone number</li>
             <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> Verify identity with a Bank Verification Number (a unique identifier that everyone with a Nigerian bank account must have)</li>
         </ul>
     </div>
    </div>
 </div>
    )
}
 
export default DeveloperVerifyIdentity;