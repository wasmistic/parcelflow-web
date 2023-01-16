import "../../../Assets/Styles/solution.scss"
import Button from "../../../Components/Button.js"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


const SolutionTalentSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);


    return (
        <div className="Talent_fill">
            <div data-aos="fade-in" className="Box img"></div>
            <div data-aos="fade-up" className="Box">
                <h3>Receiver customer orders easily using your preferred social channel</h3>
                <p>Greenhouse helps connect you to the most qualified candidates across a global network of job boards so you can build a strong, deep and diverse talent pipeline. Greenhouse talent sourcing solutions will help you:</p>
                <ul>
                    <li>Find, reach and engage top talent quickly and effectively with Sourcing Automation</li>
                    <li>Empower recruiters to build better relationships with candidates</li>
                    <li>Build a structured referral program and incentivize your employees</li>
                    <li>Optimize your sourcing strategy with data-driven reports</li>
                </ul>
                <Button name="More on talent sourcing" />
            </div>
        </div>
    );
}
 
export default SolutionTalentSection;