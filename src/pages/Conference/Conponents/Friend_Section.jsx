import "../../../Assets/Styles/conference.scss"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const ConferenceFriendSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);


    return (
        <div className="Friend_fill">
            <div data-aos="fade-up" className="Box">
                <h3>Bring a friend (or two)</h3>
                <p>Book 3 or more all-access passes as a group and automatically get a 30% discount on in-person ticket costs. No code necessary.</p>
            </div>
            <div data-aos="fade-up" className="Box"></div>
        </div>
    );
}
 
export default ConferenceFriendSection;