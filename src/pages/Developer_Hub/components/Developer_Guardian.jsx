import guardian from "../../../Assets/Image/guardian_logo.png"
import {Link} from "react-router-dom"
import circle_check from "../../../Assets/Svg/arrow_circle.svg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DeveloperGuardianSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return (
        <div className="Guardian_fill">
            <div data-aos="fade-up" className="container">
            <img src={guardian} alt="avatar" />
            <p>Paystack is one of Nigeria’s largest payments startups, processing nearly 20% of all online transactions in Africa’s largest economy</p>
            <Link> <img src={circle_check} alt="avatar" /> Read More on the Guardian</Link>
            </div>
        </div>
    );
}
 
export default DeveloperGuardianSection;