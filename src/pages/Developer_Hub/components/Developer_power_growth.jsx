import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DeveloperPowerGrowthSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return (  
        <div className="Power_Growth">
            <div className="container">
                <div data-aos="fade-up" className="Top">
                    <h3>Paystack powers growth for amazing businesses</h3>
                    <p>Paystack is a growth engine for a new generation of innovative, forward-looking organizations operating in Africa.</p>
                </div>
                <div className="Card_Detail">
                      <div data-aos="fade-up" className="Card"></div>
                      <div data-aos="fade-up" className="Card"></div>
                      <div data-aos="fade-up" className="Card"></div>
                      <div data-aos="fade-up" className="Card"></div>
                      <div data-aos="fade-up" className="Card"></div>
                      <div data-aos="fade-up" className="Card"></div>
                    </div>
            </div>
        </div>
    );
}
 
export default DeveloperPowerGrowthSection;