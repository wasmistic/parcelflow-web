import "../../../Assets/Styles/price_section.scss"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


const PriceHeroSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

      
    return (
        <div className="Price_Hero">
            <div data-aos="fade-up" className="Container">
                <h2>Pricing</h2>
                <p>Whether you own a retail business or operate a courier business, <br/> Parcelflow has a plan to help you save time and make delivery easy.</p>
            </div>
        </div>
     );
}
 
export default PriceHeroSection;