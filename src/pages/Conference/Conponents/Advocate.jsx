import "../../../Assets/Styles/conference.scss"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const ConferenceAdvocateSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);


    return (
        <div className="Advocate_fill">
            <div className="Container">
            <div data-aos="fade-up" className="Top">
                    <h2>What to expect</h2>
                    <p>With two training tracks, three keynote speakers and 40 sessions, this two-day event is an unprecedented opportunity for you to get better at hiring – and at using Greenhouse.</p>
            </div>
            <div data-aos="fade-up" className="Grid_Section">
                <div className="Card">
                   <div className="img"></div>
                    <h4>Laverne Cox</h4>
                    <p>Award-winning producer, actress, equal rights activitist</p>
                </div>
                <div className="Card">
                   <div className="img"></div>
                    <h4>Rachel Chavkin</h4>
                    <p>Tony Award-winning director, writer</p>
                </div>
                <div className="Card">
                   <div className="img"></div>
                    <h4>Daniel Goleman</h4>
                    <p>Author, emotional intelligence expert, psychologist</p>
                </div>
                <div className="Card">
                   <div className="img"></div>
                    <h4>Jackye Clayton</h4>
                    <p>VP of Talent Acquisition and DEI at Textio</p>
                </div>
                <div className="Card">
                   <div className="img"></div>
                    <h4>Daniel Chait</h4>
                    <p>CEO and Co-founder of Greenhouse</p>
                </div>
                <div className="Card">
                   <div className="img"></div>
                    <h4>Jon Stross</h4>
                    <p>President and Co-founder of Greenhouse</p>
                </div>
                <div className="Card">
                   <div className="img"></div>
                </div>
            </div>
            </div>
        </div>
    );
}
 
export default ConferenceAdvocateSection;