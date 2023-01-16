import "../../../Assets/Styles/about_hero.scss"
import Button from "../../../Components/Button"
import img1 from "../../../Assets/Image/secret_1.jpg";
import img2 from "../../../Assets/Image/secret_bottom.jpg";
import img3 from "../../../Assets/Image/secret_top.jpg";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


const HumanElementSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);


    return ( 
        <div className="HumanElement-fill">
            <div data-aos="fade-right" className="Imgs_box">
            <img src={img3} alt="avatar" />
            <img src={img1} alt="avatar" />
            <img src={img2} alt="avatar" />
            </div>
            <div data-aos="fade-up" className="Box">
                <h4>THE HUMAN ELEMENT</h4>
                <h2>What's our secret? Great people.</h2>
                <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac enim ante. Aliquam eu congue justo, in varius diam fusce tellus.</p>
                <Button name="MEET THE TEAM"/>
            </div>
        </div>
     );
}
 
export default HumanElementSection;