import "../../../Assets/Styles/conference.scss"
import Button from "../../../Components/Button.js"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const ConferenceExperienceSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);


    return (
        <div className="Experience_fill">
            <div className="Container">
                <h2 data-aos="fade-up">Experience Open your way</h2>
                <div data-aos="fade-up" className="Box_Details">
                <div className="Card">
                    <h3>Virtual experience – $50</h3>
                    <h6>What’s included:</h6>
                    <ul>
                        <li>Two days of inspirational, thought leadership content</li>
                        <li>Keynote speaker and all mainstage sessions</li>
                        <li>Online networking opportunities</li>
                        <li>Mainstage session recordings for on-demand viewing</li>
                    </ul>
                </div>
                <div className="Card">
                    <h3>All-access pass – $900</h3>
                    <h6>What’s included:</h6>
                    <ul>
                        <li>All <span>virtual ticket</span> features</li>
                        <li>Hands-on trainings and live workshops</li>
                        <li>Opportunities to earn first Greenhouse training badges</li>
                        <li>One-on-ones with Greenhouse Customer Support, Professional Services and Customer Success teams, plus integration partners</li>
                        <li>Party with open bar, food and entertainment</li>
                        <li>Entry into New York City’s brand-new Jacob Javits Center</li>
                    </ul>
                </div>
                <div className="Card">
                    <h3>All-access pass – $900</h3>
                    <h6>What’s included:</h6>
                    <ul>
                        <li><span>Group discount</span></li>
                        <li>Enjoy a 30% discount when your</li>
                        <li>group buys 3+ all-access passes.</li>
                       <p>The virtual experience includes access to the keynote speeches and mainstay presentations through our online event portal, with live staff available to help you make the most of your experience.The all-access pass gives attendees the opportunity to earn official Greenhouse badges once completing hands-on, expert-led training sessions over two days. Food, drinks and entertainment will also be provided with the utmost care and attention to the latest</p>
                    </ul>
                </div>
                </div>
                <Button name="Buy your ticket" />
            </div>
        </div>
    );
}
 
export default ConferenceExperienceSection;