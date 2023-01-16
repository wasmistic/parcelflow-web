import {Link} from "react-router-dom"
import circle_check from "../../../Assets/Svg/arrow_circle.svg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DeveloperCareerSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return (
        <div className="Career_fill">
            <div className="container">
                <div data-aos="fade-up" className="Top">
                    <h3>Career Spotlight: Engineering at Paystack</h3>
                    <p>Solving Africa's biggest payments challenges, one commit at a time. We're building simple, powerful tools to connect African businesses with customers all over the world — and we'd love your help!</p>
                    <Link> <img src={circle_check} alt="avatar" />  Paystack API Quickstart</Link>
                </div>
                <div data-aos="fade-right" className="Box"></div>
            </div>
        </div>
    );
}
 
export default DeveloperCareerSection;