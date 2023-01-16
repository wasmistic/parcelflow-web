import check from "../../../Assets/Svg/check.svg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DeveloperModelSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return (
        <div className="Model_fill">
        <div className="container">
            <div data-aos="fade-up" className="Box">
                <h3>A modern, beautiful payments experience</h3>
                <p>Give customers confidence in your business with a modern, gorgeous checkout form that elevates your brand.</p>
                <ul>
                <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> No redirects - yup, keep your customers on your own page</li>
                <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> Automatic error resolution - in the rare occasion where a transaction fails, the Paystack Checkout Form smartly suggests other payment options</li>
            </ul>
            </div>
           <div data-aos="fade-left" className="Box"></div>
        </div>
    </div>
    );
}
 
export default DeveloperModelSection;