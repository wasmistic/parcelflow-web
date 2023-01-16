import Button from "../../../Components/Button.js"
import "../../../Assets/Styles/price_section.scss"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


const PricePlanSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);


    return (
        <div className="Plan_Section">
            <div className="Container">
                <h3 className="header_plan_text">Plans</h3>
                <div className="Card_Box">
                    <div data-aos="fade-right" className="Card">
                        <div className="Top">
                            <h4>Basic Plan</h4>
                            <h2>₦50,000</h2>
                            <h5>per month</h5>
                        </div>
                        <h3>
                            1 Administrator <br/>
                            Unlimited Transporters<br/>
                            Up to 200 shipments<br/>
                            Additional shipment cost 100naira
                        </h3>
                        <Button name="GET BASIC PLAN"/>
                    </div>
                    <div data-aos="fade-right" className="Card">
                        <div className="Top">
                            <h4>Standard Plan</h4>
                            <h2>₦100,000</h2>
                            <h5>per month</h5>
                        </div>
                        <h3>
                            3 Administrator <br/>
                            Unlimited Transporters<br/>
                            Up to 500 shipments<br/>
                            Additional shipment cost NGN90<br/>
                            1000 Whatsapp Conversations<br/>
                            SMS and Emails<br/>
                            Customize SMS Sender
                        </h3>
                        <Button name="GET STANDARD PLAN"/>
                    </div>
                    <div data-aos="fade-right" className="Card">
                        <div className="Top">
                            <h4>Premium Plan</h4>
                            <h2>₦200,000</h2>
                            <h5>per month</h5>
                        </div>
                        <h3>
                            10 Administrator <br/>
                            Unlimited Transporters<br/>
                            Up to 500 shipments<br/>
                            Additional shipment cost NGN60<br/>
                            3000 Whatsapp Conversations<br/>
                            SMS and Emails<br/>
                            Customize SMS Sender
                        </h3>
                        <Button name="GET PREMIUM PLAN"/>
                    </div>

                    <div data-aos="fade-right" className="Card">
                        <div className="Top">
                            <h4>Enterprise Plan</h4>
                            <h2>Custom</h2>
                            <h5>per month</h5>
                        </div>
                        <h3>
                            Unlimited Administrator <br/>
                            Unlimited Transporters<br/>
                            Unlimited shipments<br/>
                            Shipment cost NGN50<br/>
                            3000 Whatsapp Conversations<br/>
                            SMS and Emails<br/>
                            Customize SMS Sender
                        </h3>
                        <Button name="CONTACT US"/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PricePlanSection;