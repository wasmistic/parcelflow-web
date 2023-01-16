import "../../../Assets/Styles/solution.scss"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


const SolutionHeroSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);


    return ( 
        <div className="Solution_Hero_Fill">
            <div className="Container">
                <div data-aos="fade-up" className="Box">
                    {/*<h6>More solutions</h6>*/}
                    <h2>All the tools you need for a better ecommerce delivery</h2>
                </div>
                <div data-aos="fade-in" className="Box img"></div>
            </div>
        </div>
     );
}
 
export default SolutionHeroSection;