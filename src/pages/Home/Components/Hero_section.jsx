import { Link } from "react-router-dom";
import "../../../Assets/Styles/hero.scss";
import Btn from "../../../Components/Button"
import img from "../../../Assets/Parcelflow images/img1.jpg";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({duration:2000});
    AOS.refresh();
  }, []);
    return ( 
     <div className='Container'>
       <div data-aos="fade-left" className="box">
        <h2>Easy Shipment to Local and International Destinations</h2>
        <p>With access to both local and international third-party logistics partners, Parcelflow enables you to effortlessly create, organize, and track every delivery from the comfort of your home.</p>
        <div className="btn_box">
        <Btn name="LEARN MORE"/>
        <Link>or request a demo</Link>
        </div>
       </div>
       <div data-aos="fade-right" className="box">
        <img src={img} alt="hero-img"/>
       </div>
     </div>
     );
}
 
export default HeroSection;