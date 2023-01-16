import "../../../Assets/Styles/solution.scss"
import Button from "../../../Components/Button.js"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const TransporterLocationSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return (
        <div className="Talent_Service_fill">
            <div data-aos="fade-in" className="Box img"></div>
            <div data-aos="fade-up" className="Box">
                <h3>Know exactly where all your transporters are... and what shipment they are processing</h3>
                <p>Parcelflow allows you to monitor all your transporters easily either via the web or through the mobile. The Parcelflow service can allow you :</p>
                <ul>
                    <li>Know the exact location of each of your transporter easily</li>
                   <li>Determine what shipment they are currently processing at any given time</li>
                   <li>Get informed about their next line of pickups and deliveries</li>
                </ul>
                <Button name="Learn more about our services" />
            </div>
        </div>
    );
}
 
export default TransporterLocationSection;