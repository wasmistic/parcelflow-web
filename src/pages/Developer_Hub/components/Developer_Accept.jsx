import Button from "../../../Components/Button.js";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DeveloperAcceptSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);
    return (
        <div className="Accept_fill">
             <div data-aos="fade-up" className="Box">
           <p>Try Paystack Now</p>
            <h2>Start accepting payments in just 30 minutes</h2>
           </div>
           <Button name="create free account"/>
        </div>
    );
}
 
export default DeveloperAcceptSection;