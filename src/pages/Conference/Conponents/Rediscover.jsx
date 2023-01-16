import "../../../Assets/Styles/conference.scss"
import Button from "../../../Components/Outline_btn"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


const ConferenceRediscoverSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);


    return (
        <div className="Rediscover_fill">
            <div className="Container">
            <div data-aos="fade-up" className="Top">
                <h2>Rediscover the power of being together</h2>
                <p>We’re going above and beyond to put together a safe, inspiring and – of course – fun event for all our Greenhouse customers, advocates and partners.</p>
            </div>
             <div data-aos="fade-up" className="Grid_Card">
                <div className="Card">
                    <div className="img"></div>
                    <h2>Career and skill development</h2>
                    <p>Attend our live, in-person only workshops to earn official Greenhouse badges that support your work and bolster professional credentials.</p>
                </div>
                <div className="Card">
                    <div className="img"></div>
                    <h2>Networking opportunities</h2>
                    <p>Meet and mingle with fellow Greenhouse customers and talent experts, and schedule in-person one-on-ones with Greenhouse team leads and integration partners.</p>
                </div>
             </div>
             <div data-aos="fade-up" className="Grid_Card Second">
                <div className="Card">
                    <div className="img"></div>
                    <h2>State-of-the-art venue</h2>
                    <ul>
                        <li><span>Javits Center North</span></li>
                        <li>445 11th Ave, New York, NY</li>
                    </ul>
                    <p>Take in all that New York City has to offer, and enjoy two days at the new Javits Center – including the Open party with a spectacular view of the skyline.</p>
                </div>
                <div className="Card">
                    <div className="img"></div>
                    <h2>See more reasons to attend Open</h2>
                    <Button name="Why attend Open" />
                </div>
             </div>
            </div>
        </div>
    );
}
 
export default ConferenceRediscoverSection;