import { Link } from "react-router-dom";
import arrow from "../../../Assets/Image/arrow.png"
import img1 from "../../../Assets/Image/four_card1.png"
import img2 from "../../../Assets/Image/four_card2.png"
import img3 from "../../../Assets/Image/four_card3.png"
import img4 from "../../../Assets/Image/four_card4.png"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Comment4CardsSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);
    return (
        <div className="Four_Card">
           <div data-aos="fade-up" className="Card">
                <img src={img1} alt="avatar" />
                <div className="Box">
                <Link><h3>Q&A</h3></Link>
                <p>Ask questions, get answers and share your knowledge.</p>
                <Link><h5>Learn more <img src={arrow} alt="avatar" /> </h5></Link>
                </div>
            </div>
           <div data-aos="fade-up" className="Card">
                <img src={img2} alt="avatar" />
                <div className="Box">
                <Link><h3>News & updates</h3></Link>
                <p>Check out the latest news & updates from the Intercom team.</p>
               <Link> <h5>Learn more <img src={arrow} alt="avatar" /> </h5></Link>
                </div>
            </div>
           <div data-aos="fade-up" className="Card">
                <img src={img3} alt="avatar" />
                <div className="Box">
                <Link><h3>Groups</h3></Link>
                <p>Join a discussion happening in one of our groups.</p>
               <Link> <h5>Learn more <img src={arrow} alt="avatar" /> </h5></Link>
                </div>
            </div>
          <div data-aos="fade-up" className="Card">
                <img src={img4} alt="avatar" />
                <div className="Box">
               <Link> <h3>Other resources</h3></Link>
                <p>Books, guides, and webinars full of industry insight.</p>
               <Link> <h5>Learn more <img src={arrow} alt="avatar" /> </h5></Link>
                </div>
            </div>
        </div>
    );
}
 
export default Comment4CardsSection;