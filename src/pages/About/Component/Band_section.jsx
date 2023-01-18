import "../../../Assets/Styles/about_hero.scss"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Btn from "../../../Components/Button.js";
import { Link } from "react-router-dom";

const BandSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return (
        <div className="Band-fill">
            <h3>Let's help you stand out  with your Logistics!</h3>
            <p>Contact Us.</p>
           <Link to="/contact-us"><Btn name="contact us"/></Link>
        </div>
    );
}
 
export default BandSection;