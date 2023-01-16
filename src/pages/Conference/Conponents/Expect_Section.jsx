import "../../../Assets/Styles/conference.scss"
import Button from "../../../Components/Outline_btn"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const ConferenceExpectSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);


    return (
        <div className="Expect_fill">
            <div className="Container">
            <div data-aos="fade-up" className="Top">
                    <h2>What to expect</h2>
                    <p>With two training tracks, three keynote speakers and 40 sessions, this two-day event is an unprecedented opportunity for you to get better at hiring – and at using Greenhouse.</p>
                </div>
                <div data-aos="fade-up" className="Card">
                    <div className="Card_Detail">
                    <div className="img"></div>
                    <h3>Day 1 – Sat, Feb 4</h3>
                        <p>Primarily for service operators</p>
                    <ul>
                        <li>Opening keynotes by Greenhouse co-founders Daniel Chait and Jon Stross</li>
                        <li>Customer-led panels and platinum sponsor sessions</li>
                        <li>Collaborative and Inclusive training tracks with 4 workshops each</li>
                        <li>Keynote address by Dr. Daniel Goleman</li>
                        <li>Open party on the rooftop</li>
                    </ul>
                    <Button name="See the full agenda" />
                    </div>
                    <div className="Card_Detail">
                    <div className="img"></div>
                    <h3>Day 2 – Wednesday, May 25</h3>
                    <ul>
                        <li>Customer-led panels and platinum sponsor sessions</li>
                        <li>Collaborative and Inclusive training tracks with 4 workshops each</li>
                        <li>Keynote addresses by Laverne Cox and Rachel Chavkin</li>
                        <li>And a few surprises</li>
                    </ul>
                    <Button name="See the full agenda" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ConferenceExpectSection;