import { Link } from "react-router-dom";
import chevron from "../../../Assets/Image/chevronleft.svg"
import asterisk from "../../../Assets/Image/asterisk.svg"
import Button from "../../../Components/Button"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DynamicFloatSection = ({BlogLink, img}) => {
  useEffect(() => {
    AOS.init({duration:2000});
    AOS.refresh();
  }, []);
    return (
        <div className="Float_Container">
          <div className="Box">
           <div data-aos="fade-up" className="Inner_Box">
           <Link to="/blogs"> <img src={chevron} alt="chevron-left" /> Back</Link>
           <h2>{BlogLink}</h2>
           </div>
           <img className="image" src={img} alt="avatar" />
          </div>
          <div data-aos="fade-up" className="Form_Box">
            <h4>Subscribe to our newsletter</h4>
            <p>Our bi-weekly newsletter full of inspiration, podcasts, trends and news.</p>
            <label htmlFor="mail"> <img src={asterisk} alt="asterisk" /> Email address</label>
            <input type="email" id="mail"/>
            <Button name="Subscribe"/>
          </div>
          </div> 
    );
}
 
export default DynamicFloatSection;