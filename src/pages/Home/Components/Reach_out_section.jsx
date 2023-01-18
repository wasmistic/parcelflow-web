import Btn from "../../../Components/Button";
import "../../../Assets/Styles/Reach_out.scss";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const ReachOutSection = () => {

    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return ( 
        <div className="Reach_Out_Section_Fill">
            <h3>Let's help you stand out  with your Logistics!</h3>
            <p>Contact Us. </p>
            <Link to="/contact-us"><Btn name="contact us"/></Link>
        </div>
     );
}
 
export default ReachOutSection;