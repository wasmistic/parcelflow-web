import "../../../Assets/Styles/solution.scss"
import Button from "../../../Components/Button.js"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const SolutionHireSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return (
        <div className="Recruiting_fill_hire">
        <div data-aos="fade-up" className="Box">
        <h3>Hiring tools to help you navigate distributed work</h3>
            <p>As businesses worldwide move to a fully distributed working model, you may be facing some new challenges around hiring. Greenhouse can help you:</p>
            <ul>
                <li>Assess and engage candidates virtually</li>
                <li>Enable distributed interviews without skipping a beat</li>
                <li>Tap into video interviewing tools, including SparkHire and Zoom</li>
                <li>Onboard new hires seamlessly, from anywhere</li>
                <li>Manage distributed hiring teams</li>
            </ul>
            <Button name="More on distributed hiring" />
        </div>
        <div data-aos="fade-in" className="Box img"></div>
    </div>
    );
}
 
export default SolutionHireSection;