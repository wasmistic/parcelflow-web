import Btn from "../../../Components/Button";
import "../../../Assets/Styles/Reach_out.scss";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const ReachOutSection = () => {

    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return ( 
        <div className="Reach_Out_Section_Fill">
            <h3>Let's help you stand out  with your Logistics!</h3>
            <p>Contact Us. </p>
            <Btn name="contact us"/>
        </div>
     );
}
 
export default ReachOutSection;