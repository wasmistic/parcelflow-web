import "../../../Assets/Styles/price_section.scss"
import Button from "../../../Components/Button"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


const PriceOrientedSection = () => {
  useEffect(() => {
    AOS.init({duration:2000});
    AOS.refresh();
  }, []);


    return (
        <div className="Oriented">
         <div className="Img_Box"></div>
         <div className="Box">
           <div data-aos="fade-up" className="Box_Detail">
           <h4>OUR APPROACH</h4>
            <h3>Results oriented</h3>
            <p>Orci varius natoque penatibus et magnis dis<br/>parturient montes, nascetur ridiculus mus. Donec ac<br/> enim ante. Aliquam eu congue justo, in varius diam<br/> fusce tellus.</p>
            <Button name="FIND OUT MORE"/>
           </div>
         </div>
        </div>
    );
}
 
export default PriceOrientedSection;