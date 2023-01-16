import "../../../Assets/Styles/price_section.scss"
// import brush from "../../../Assets/Svg/penlist.svg"
// import phone from "../../../Assets/Svg/phone.svg"
// import diamond from "../../../Assets/Svg/diamond.svg"
// import basket from "../../../Assets/Svg/basket.svg"
// import play from "../../../Assets/Svg/play.svg"
// import tv from "../../../Assets/Svg/tv.svg"
import * as BoxIcons from "react-icons/bi";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";




const CardList = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);


    return (
        <div className="Card_List">
         <div className="Container">
            <h2>All plans include</h2>
            <div className="Card_Box">
                <div data-aos="fade-up" className="Card">
                    <BoxIcons.BiSupport className="icon"/>
                    <h4>24/7 Support</h4>
                    <p>Having issues with creating a shipment or have an enquiry about costing, our dedicated team is ready to help.</p>
                </div>
                <div data-aos="fade-up" className="Card">
                    <BoxIcons.BiBriefcaseAlt className="icon"/>
                    <h4>All  Shipments</h4>
                    <p>No limitations in the type of shipments that can be created including local, interstate, and international.</p>
                </div>
                <div data-aos="fade-up" className="Card">
                    <BoxIcons.BiAlarm className="icon"/>
                    <h4>Shipment Updates</h4>
                    <p>Get real-time notifications updates about your packages from the point of pickup right to point of delivery.</p>
                </div>
                <div data-aos="fade-up" className="Card">
                    <BoxIcons.BiMobileAlt className="icon"/>
                    <h4>Mobile App Access</h4>
                    <p>Monitor your operations and never lose sight of your business activities with the Parcelflow app .</p>
                </div>
                <div data-aos="fade-up" className="Card">
                    <BoxIcons.BiPieChart className="icon"/>
                    <h4>Monthly Reports</h4>
                    <p>Stay focus on the financial and operational health of your business with the Parcelflow monthly reports.</p>
                </div>
                <div data-aos="fade-up" className="Card">
                    <BoxIcons.BiReceipt className="icon"/>
                    <h4>Unlimited Tickets</h4>
                    <p>Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu.</p>
                </div>
            </div>
         </div>
        </div>
    );
}
 
export default CardList;