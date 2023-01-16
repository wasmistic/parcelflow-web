import "../../../Assets/Styles/conference.scss"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const ConferenceSilverSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);


    return (
        <div className="Silver_fill">
            <div className="Container">
            <div className="Grid">
                <h4 data-aos="fade-left">Silver</h4>
                <div data-aos="fade-up" className="img_gallery">
                <div className="img"></div>
                <div className="img"></div>
                <div className="img"></div>
                <div className="img"></div>
                </div>
            </div>
            </div>
        </div>
    );
}
 
export default ConferenceSilverSection;