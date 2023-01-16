import "../../../Assets/Styles/platformsection.scss"
import checkbox from "../../../Assets/Svg/checkbox.svg"
import left_img from "../../../Assets/Parcelflow images/WAIntegration2.jpg";
import top_img from "../../../Assets/Parcelflow images/WAIntegration1.jpg";
import bottom_img from "../../../Assets/Parcelflow images/WAIntegration3.jpg";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const PlatformSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);
    return ( 
        <div className="Platform-Container-fill">
            <div className="Container">
             <div data-aos="fade-left" className="box">
                <h6>Whatsapp Integration</h6>
                <h2>Connect with <br/>your customers via social media</h2>
                <p>Increase your accessibility and patronage with our whatsapp integration feature service.</p>
                <div className="checkbox_content">
                    <span  className="check">
                        <img src={checkbox} alt="checkbox" />
                        <p>Live chat</p>
                    </span>
                    <span className="check">
                        <img src={checkbox} alt="checkbox" />
                        <p>Video calls</p>
                    </span>
                    <span className="check">
                        <img src={checkbox} alt="checkbox" />
                        <p>Shared inboxes</p>
                    </span>
                    <span className="check">
                        <img src={checkbox} alt="checkbox" />
                        <p>Social media</p>
                    </span>
                </div>
             </div>
             <div className="image_gallery_box">
                <img src={top_img} alt="avater" />
                <img src={left_img} alt="avater" />
                <img src={bottom_img} alt="avater" />
             </div>
            </div>
        </div>
     );
}
 
export default PlatformSection;