import Button from "../../../Components/Button"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DeveloperHeroSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return (
        <div className="Developer_Top">
            <div data-aos="fade-up" className="container">
            <h3>Build better logistics infrastructure with our amazing suite of APIs </h3>
            <p>Setup your business easily to send and receive packages from any part of the world without leaving your comfort zone.</p>
            <Button name="Create a free account" />
            </div>
        </div>
    );
}
 
export default DeveloperHeroSection;