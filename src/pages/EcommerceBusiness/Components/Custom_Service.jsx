import "../../../Assets/Styles/solution.scss"
import Button from "../../../Components/Button.js"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const SolutionCustomService = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return (
        <div className="Talent_Service_fill">
            <div data-aos="fade-in" className="Box img"></div>
            <div data-aos="fade-up" className="Box">
                <h3>Avoid delivery mistakes with our sophisticated proof of delivery service</h3>
                <p>Greenhouse Services help you become expert users faster, so you can more efficiently and effectively hire, onboard and retain talent. Our Services team of experts can help you:</p>
                <ul>
                    <li>Build, connect, integrate and optimize your hiring process to get better results faster</li>
                   <li>Simplify complex, technical decisions so you can focus on what matters most – hiring</li>
                   <li>Minimize the friction of getting started with a new system</li>
                </ul>
                <Button name="Learn more about our services" />
            </div>
        </div>
    );
}
 
export default SolutionCustomService;