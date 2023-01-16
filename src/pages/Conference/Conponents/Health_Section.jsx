import "../../../Assets/Styles/conference.scss"
import Button from "../../../Components/Button.js"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const ConferenceHealthSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);


    return (
        <div className="Health_fill">
            <div data-aos="fade-right" className="Box"></div>
            <div data-aos="fade-up" className="Box">
                <h3>Health and safety protocols</h3>
                <p>Greenhouse is strictly following the rules and regulations set by the New York state, New York City and the Jacob Javits Center. We’ve outlined all the rules and regulations attendees must follow, as well as the extra precautions we’re taking to ensure your safety and comfort.</p>
                <Button name="Learn more" />
            </div>
        </div>
    );
}
 
export default ConferenceHealthSection;