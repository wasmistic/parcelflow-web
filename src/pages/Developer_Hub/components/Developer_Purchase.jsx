import check from "../../../Assets/Svg/check.svg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DeveloperPurchaseSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return (
        <div className="Purchase_fill">
        <div className="container">
            <div data-aos="fade-up" className="Box">
                <h3>Understand customer purchase patterns</h3>
                <p>Your Paystack Dashboard surfaces useful customer insights from your payments data</p>
                <ul>
                <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> See who your top customers are, both in terms of number of purchases and total amount spent</li>
                <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> See your new and returning customers over any date range</li>
                <li> <div className="img_box"> <img src={check} alt="avatar" /> </div> See your busiest average time of day, and day of the week</li>
            </ul>
            </div>
           <div data-aos="fade-right" className="Box"></div>
        </div>
    </div>
    );
}
 
export default DeveloperPurchaseSection;