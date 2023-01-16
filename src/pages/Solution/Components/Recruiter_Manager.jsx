import "../../../Assets/Styles/solution.scss"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const SolutionRecruiterManager = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return (
        <div className="Talent_Service_Manager">
            <div data-aos="fade-in" className="Box img"></div>
            <div data-aos="fade-up" className="Box">
                <h3>Recruiter and hiring manager tools create a great experience</h3>
                <ul>
                    <li>Smart UI for fast navigation and screen updating</li>
                   <li>Custom dashboards provide vital information in one place</li>
                   <li>Calendly scheduling eliminates back and forth</li>
                   <li>A simple and speedy resume review process</li>
                   <li>Our mobile app keeps things moving when you’re on the move</li>
                </ul>
            </div>
        </div>
    );
}
 
export default SolutionRecruiterManager;