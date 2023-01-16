import "../../../Assets/Styles/conference.scss"
import Button from "../../../Components/Button.js"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Button_Ouline from "../../../Components/Outline_btn";
import Button_Transparent_Outline from "../../../Components/Outline_Transparent_Button";


const ConferenceTopPage = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);


    return (
        <div className="Conference_fill">
            <div className="Box">
               <div  className="Details_Top">
               <h4>February 4th - 5th 2023</h4>
                <h3>Building a Profitable <br/> Logistics Business</h3>
                <p>Thank you to everyone who joined us May 24–25, in person or virtually, at the Javits Center in NYC. We enjoyed spending two days with you for hands-on training, live workshops and renowned speakers. For registered attendees, track 1 and 2 session recordings will be added to the attendee hub over the next few days.</p>
                <Button_Transparent_Outline name="Buy Your E-Ticket" />
               </div>
               <div className="Group">
                <div className="Img"></div>
               </div>
            </div>
            <div data-aos="fade-in"  className="Image_Group">
                <div className="Bg_Back"></div>
                <div data-aos="fade-up" className="inner_img1"></div>
                <div data-aos="fade-up" className="inner_img2"></div>
                <div data-aos="fade-up" className="inner_img3"></div>
            </div>
            {/* <div className="Bg_Imag"></div> */}
            <div data-aos="fade-up" className="Img2"></div>
            <div className="Market_Section">
                <h3>How can you become efficient while being profitable and scalable?</h3>
                <p>We'll show you how to stand out in today's logistics market and place your business in the prime spot.
                    Our team of speakers will not only show you the robes but answer any of your nail-biting questions. </p>
                <p>So show how you how you can achieve that with Parcelflow.</p>
            </div>
            <div data-aos="fade-up" className="Img3"></div>
        </div>
    );
}
 
export default ConferenceTopPage;