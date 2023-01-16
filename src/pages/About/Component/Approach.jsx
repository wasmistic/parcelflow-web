import "../../../Assets/Styles/about_hero.scss"
import CardResult from "./Card";
import HumanElementSection from "./Human_Element_Section";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";



const ApproachSection = () => {
  useEffect(() => {
    AOS.init({duration:2000});
    AOS.refresh();
  }, []);

    return ( 
       <div className="Approach-fill">
         <CardResult/>
        <div className="Banner"></div>
        <HumanElementSection/>
       </div>
     );
}
 
export default ApproachSection;