import "../../../Assets/Styles/about_hero.scss"
import Button from "../../../Components/Button.js"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Btn from "../../../Components/Button.js";


const BandSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return (
        <div className="Band-fill">
            <h3>Let's help you stand out  with your Logistics!</h3>
            <p>Contact Us.</p>
            <Btn name="contact us"/>
        </div>
    );
}
 
export default BandSection;