import { Link } from "react-router-dom";
import arrow from "../../../Assets/Svg/arrow_circle.svg"
import media from "../../../Assets/Svg/media.svg"
import sale from "../../../Assets/Svg/sale.svg"
import support from "../../../Assets/Svg/support.svg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const NeedAnswerSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);
    return (
        <div className="Need_Answer">
            <h2>Still need answers?</h2>
            <p>Get in touch! We look forward to hearing from you.</p>
            <div className="Card_Flex">
                <div data-aos="fade-up" className="Card">
                    <img src={support} alt="support" />
                    <h4>General Support</h4>
                    <p>Do you have general enquiries or need support? Please send us a quick email.</p>
                    <div className="link_box">
                        <img src={arrow} alt="arrow-right" />
                        <Link>Contact Support</Link>
                    </div>
                </div>
                <div data-aos="fade-up" className="Card">
                    <img src={sale} alt="sale" />
                    <h4>Contact Sales</h4>
                    <p>We look forward to working with you to build the next big thing.</p>
                    <div className="link_box">
                        <img src={arrow} alt="arrow-right" />
                        <Link>Contact Sales</Link>
                    </div>
                </div>
                <div data-aos="fade-up" className="Card">
                    <img src={media} alt="media" />
                    <h4>Press & Media Kit</h4>
                    <p>Get company info, bios, photos, brand assets, and other media resources.</p>
                    <div className="link_box">
                        <img src={arrow} alt="arrow-right" />
                        <Link>Visit Press Page</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NeedAnswerSection;