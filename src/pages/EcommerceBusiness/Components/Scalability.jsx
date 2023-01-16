import "../../../Assets/Styles/solution.scss"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const SolutionScalabilitySection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);


    return (
        <div className="Recruiting_fill_scalability">
        <div data-aos="fade-up" className="Box">
        <h3>Have an in-house delivery dispatchers and prefer to use yours instead?</h3>
            <p>Greenhouse enables organizations to easily scale their hiring process. You can set unique workflows, processes and permissions by department, location, region or country.</p>
            <ul>
                <li>Advanced workflows and permissions allow you to control what kinds of processes are used</li>
                <li>Configure unique permissions at your organizational level, through to the user level</li>
            </ul>
        </div>
        <div data-aos="fade-in" className="Box img"></div>
    </div>
    );
}
 
export default SolutionScalabilitySection;