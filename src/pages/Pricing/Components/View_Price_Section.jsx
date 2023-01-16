import Button from "../../../Components/Button.js"
import "../../../Assets/Styles/price_section.scss"
import  Checkbox  from "../../../Assets/Svg/checkbox.svg";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


const ViewPriceSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return ( 
        <div className="View_Price_Section">
            <div className="Container">
            <div data-aos="fade-up" className="Box">
                <h3>What you get</h3>
                <p>Simple, transparent and fair pricing no matter your plan or your <br/> business type no matter your plan or your business type</p>
                <Button name="VIEW PRICING"/>
            </div>
            <div className="Check_Box">
                <div data-aos="fade-up" className="Wrapper">
                    <img src={Checkbox} alt="avatar" />
                    <div className="Detail">
                        <h5>Multiple accounts</h5>
                        <p>Sed rhoncus sem et massa <br/>posuere faucibus.</p>
                    </div>
                </div>
                <div data-aos="fade-up" className="Wrapper">
                    <img src={Checkbox} alt="avatar" />
                    <div className="Detail">
                        <h5>Distinct user levels</h5>
                        <p>Aliquam erat volutpat duis<br/>suspen disse.</p>
                    </div>
                </div>
                <div data-aos="fade-up" className="Wrapper">
                    <img src={Checkbox} alt="avatar" />
                    <div className="Detail">
                        <h5>Full admin access</h5>
                        <p>Mauris euismod quam arcu<br/>vivamus porta.</p>
                    </div>
                </div>
                <div data-aos="fade-up" className="Wrapper">
                    <img src={Checkbox} alt="avatar" />
                    <div className="Detail">
                        <h5>Export anytime</h5>
                        <p>Semper nulla, tempor suscipit<br/>purus efficitur.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default ViewPriceSection;