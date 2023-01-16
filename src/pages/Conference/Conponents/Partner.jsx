import "../../../Assets/Styles/conference.scss"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


const ConferencePartnerSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);


    return (
        <div className="Partner_fill">
            <div className="Container">
            <div data-aos="fade-left" className="Top">
                <h2>We’re proud to partner with these sponsors</h2>
            </div>
            <div data-aos="fade-up" className="Grid">
                <h4>Platinum</h4>
                <div className="img_gallery">
                <div className="img"></div>
                <div className="img"></div>
                <div className="img"></div>
                </div>
            </div>
            </div>
        </div>
    );
}
 
export default ConferencePartnerSection;
