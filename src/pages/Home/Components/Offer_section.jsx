import "../../../Assets/Styles/offer_section.scss"
import message from "../../../Assets/Svg/message.svg";
import mail from "../../../Assets/Svg/mail.svg";
import penlist from "../../../Assets/Svg/penlist.svg";
import share from "../../../Assets/Svg/share.svg";
import { Link } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const OfferSection = () => {

    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return (  
     <div className="Offer_fill">
        <div className="Container">
            <div data-aos="fade-up" className="top">
                <h6>WHAT WE OFFER</h6>
                <h2>What features can you get on the parcelflow app?</h2>
                <p></p>
            </div>
            <div data-aos="fade-up" className="card_box">
                <span className="card">
                    <img src={message} alt="avatar" />
                <h4>Free choice of courier</h4>
                <p>Access, compare and choose rates from various logistics partners of your choice!</p>
                <Link to="#">Learn more</Link>
                </span>
                <span className="card">
                    <img src={mail} alt="avatar" />
                <h4>Local & International shipment</h4>
                <p>Handle both local, interstate and international deliveries at ease using the parcelflow app.</p>
                <Link to="#">Learn more</Link>
                </span>
                <span className="card">
                    <img src={penlist} alt="avatar" />
                <h4>Calculate Shipping Cost</h4>
                <p>Calculate shipping cost and choose the best option that suits your delivery.</p>
                <Link to="#">Learn more</Link>
                </span>
                <span className="card">
                    <img src={share} alt="avatar" />
                <h4>Create Discounts & Coupons</h4>
                <p>Create and offer personalized discount codes to customers based on their patronage or usage.</p>
                <Link to="#">Learn more</Link>
                </span>
            </div>
        </div>
     </div>
    );
}
 
export default OfferSection;