// import {Link} from "react-router-dom"
import check from "../../../Assets/Svg/check.svg"
// import circle_check from "../../../Assets/Svg/arrow_circle.svg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DeveloperBuildCustomSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return (
        <div className="Build_Section">
            <div data-aos="fade-left" className="Box">

            </div>
            <div data-aos="fade-up" className="Box">
                <h3>A flexible API that meets every need of your client</h3>
                <p>Developers love our thorough, well-documented APIs that let you to build everything from simple weekend projects, to complex financial products serving hundreds of thousands of customers. If you can imagine it, you can build it with Paystack.</p>
                <ul>
                    <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> Collect one-time and recurring payments from your app or website</li>
                    <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> Make instant transfers</li>
                    <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> Retrieve all your transaction and customer data</li>
                    <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> Verify the identity of customers</li>
                </ul>
            </div>
        </div>
    );
}
 
export default DeveloperBuildCustomSection;