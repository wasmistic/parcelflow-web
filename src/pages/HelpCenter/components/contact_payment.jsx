import Button from "../../../Components/Button.js";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPayment = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);
    return (
        <div className="Payment">
           <div data-aos="fade-up" className="Box">
            <h2>Start shipping in no-time. See how we can make your business worthwhile</h2>
           </div>
           <Button name="create account"/>
        </div>
    );
}
 
export default ContactPayment;