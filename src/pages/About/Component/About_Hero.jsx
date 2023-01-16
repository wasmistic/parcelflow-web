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
                <h1>About Parcelfow</h1>
            </div>
        </div>
     );
}
 
export default AboutHeroSection;