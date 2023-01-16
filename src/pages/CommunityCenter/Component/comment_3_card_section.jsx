import { Link } from "react-router-dom";
import img from "../../../Assets/Image/arrow.png"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Comment3CardSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);
    return (
        <div className="Three_Card">
            <div data-aos="fade-up" className="Card">
                <div className="Top">
                <h3>FAQs</h3>
                </div>
                <div className="Bottom">
                <div className="Box">
                <p>
                    <Link>How do I integrate Intercom with WhatsApp?</Link>
                </p>
                </div>
                <div className="Box">
                <p>
                    <Link>Can I add multiple email addresses to one contact and manually merge duplicates?</Link>
                </p>
                </div>
                <div className="Box">
                <p>
                    <Link>Can I merge conversations?</Link>
                </p>
                </div>
                <h4>See More <img src={img} alt="avatar" /></h4>
                </div>
            </div>
            <div data-aos="fade-up" className="Card">
                <div className="Top">
                <h3>Popular groups</h3>
                </div>
                <div className="Bottom">
                <div className="Box">
                    <h5><Link>Welcome party</Link></h5>
                <p>
                Welcome to our Community!
                </p>
                </div>
                <div className="Box">
                    <h5><Link>Product wishlist</Link></h5>
                <p>
                A community-led group for feature requests.
                </p>
                </div>
                <div className="Box">
                    <h5><Link>Tips, tricks and workarounds</Link></h5>
                <p>
                Share your best practices and creative solutions for Intercom!
                </p>
                </div>
                <h4>See More <img src={img} alt="avatar" /></h4>
                </div>
            </div>
            <div data-aos="fade-up" className="Card">
                <div className="Top">
                <h3>News & updates</h3>
                </div>
                <div className="Bottom">
                <div className="Box">
                <p>
                    <Link>Our February product updates</Link>
                </p>
                </div>
                <div className="Box">
                <p>
                    <Link>We've improved Outbound CSV exports!</Link>
                </p>
                </div>
                <div className="Box">
                <p>
                    <Link>Join us for our virtual event</Link>
                </p>
                </div>
                <h4>See More <img src={img} alt="avatar" /></h4>
                </div>
            </div>
        </div>
    );
}
 
export default Comment3CardSection;