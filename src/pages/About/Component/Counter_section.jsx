import "../../../Assets/Styles/about_hero.scss"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


const CounterSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);


    return ( 
       <div className="Counter-fill">
         <div className="Builder">
            <div data-aos="fade-left" className="Box">
                <h2>We're building the operating system of global logistics</h2>
            </div>
            <div data-aos="fade-left" className="Box">
                <p>We collaboratively administrate empowered markets through existing channels and new opportunities on the horizon. We can quickly maximize the timely deliverables for real-time presentations to deliver outstanding ROI.</p>
            </div>
         </div>
         <div data-aos="fade-right" className="Counter_Section">
            <div className="Box">
                <h4>2010</h4>
                <p>Year we were founded</p>
            </div>
            <div className="Box">
                <h4>5m</h4>
                <p>Monthly active users</p>
            </div>
            <div className="Box">
                <h4>100+</h4>
                <p>Members in our remote team</p>
            </div>
            <div className="Box">
                <h4>67</h4>
                <p>Countries using our products</p>
            </div>
         </div>
       </div>
     );
}
 
export default CounterSection;