import "../../../Assets/Styles/accessible_section.scss";
import img from "../../../Assets/Parcelflow images/access.png";
// import { Link } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const AccessibleSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);
    return ( 
        <div className="accessible_fill">
            <div className="Container">
                <div data-aos="fade-left" className="box">
                    <img src={img} alt="avatar" />
                </div>
                <div data-aos="fade-right" className="box">
                    <h6>ALWAYS ACCESSIBLE</h6>
                    <h2>Get the best<br/>logistics management solutions</h2>
                    <p>Download the parcel flow up or request our service on web to start enjoying the best logistics management solutions.</p>
                    {/* <Link to="#">Learn More</Link> */}
                </div>
            </div>
        </div>
     );
}
 
export default AccessibleSection;
