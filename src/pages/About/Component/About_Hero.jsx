import "../../../Assets/Styles/about_hero.scss"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";



const AboutHeroSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return ( 
        <div className="Hero">
            <div data-aos="fade-up" className="Container">
                <h2>About Parcelfow</h2>
                <p>Whether you own a retail business or operate a courier business, <br/> Parcelflow has a plan to help you save time and make delivery easy.</p>
            </div>
        </div>
     );
}
 
export default AboutHeroSection;