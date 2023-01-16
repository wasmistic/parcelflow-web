import "../../../Assets/Styles/home_section_b.scss";
import clickwise from "../../../Assets/Image/clockwise.svg";
import mixer from "../../../Assets/Image/mixer.svg";
import money from "../../../Assets/Image/money_icon.svg";
import {Link} from "react-router-dom"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Section_B = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);
    return ( 
       <div className="Container-fill">
        <div className="Container">
         <div  data-aos="fade-up" className="box">
            <h2>What we offer at Parcel Flow</h2>
            <p>We offer a worldclass cloud-based logistics system for bsinesses, making boh local and international deliveries easy and seamless.</p>
         </div>
         <div data-aos="fade-up" className="card_box">
            <span className="card">
                <img src={clickwise} alt="img" />
                <h4>Timely Delivery</h4>
                <p>Process delivery requests with system automated features that makes the process fast and easy!</p>
                <Link to="#">Learn more</Link>
            </span>
            <span className="card">
                <img src={mixer} alt="img" />
                <h4>Smart Automation</h4>
                <p>Almost everything is automated. thereby saving you time and stress.</p>
                <Link to="#">Learn more</Link>
            </span>
            <span className="card">
                <img src={money} alt="img" />
                <h4>Local & International Shipment</h4>
                <p>Parcel flow makes it easy to handle both local and international daily deliveries.</p>
                <Link to="#">Learn more</Link>
            </span>
         </div>
        </div>
       </div>
     );
}
 
export default Section_B;