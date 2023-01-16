import "../../../Assets/Styles/about_hero.scss"
import img1 from "../../../Assets/Image/trust_1.png"
import img2 from "../../../Assets/Image/trust_2.png"
import img3 from "../../../Assets/Image/trust_3.png"
import img4 from "../../../Assets/Image/trust_4.png"
import img5 from "../../../Assets/Image/trust_5.png"
import img6 from "../../../Assets/Image/trust_6.png"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";



const TrustedSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);


    return (
        <div className="Trusted">
            <div className="Top">
                <h1>TRUSTED BY</h1>
            </div>
            <div data-aos="fade-up" className="Container">
                <img src={img1} alt="avatar" />
                <img src={img2} alt="avatar" />
                <img src={img3} alt="avatar" />
                <img src={img4} alt="avatar" />
                <img src={img5} alt="avatar" />
                <img src={img6} alt="avatar" />
            </div>
        </div>
    );
}
 
export default TrustedSection;