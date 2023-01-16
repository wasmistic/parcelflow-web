import "../../../Assets/Styles/solution.scss"
import Button from "../../../Components/Button.js"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


const SolutionRecruitingSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);


    return (
        <div className="Recruiting_fill">
            <div data-aos="fade-up" className="Box">
            <h3>Easily set your prices however you want them... By distance, destination or region</h3>
                <p>Greenhouse has a robust, flexible array of tools that make it easy to get answers from your data, giving everyone the insights they need to make better, more informed hiring decisions.</p>
                <Button name="See reporting solutions" />
            </div>
            <div data-aos="fade-in" className="Box img"></div>
        </div>
    );
}
 
export default SolutionRecruitingSection;