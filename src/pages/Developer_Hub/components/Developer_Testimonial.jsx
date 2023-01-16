import img1 from "../../../Assets/Image/bottom_card1.jpg"
import im1 from "../../../Assets/Image/bottom_img1.jpg"
import img2 from "../../../Assets/Image/bottom_card2.png"
import im2 from "../../../Assets/Image/bottm_img2.jpg"
import img3 from "../../../Assets/Image/bottom_card3.png"
import im3 from "../../../Assets/Image/bottom_img3.jpg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DeveloperTestimonialSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return (
        <div className="Testimonial_fill">
            <div className="container">
                <div data-aos="fade-up" className="Top">
                    <h3>Customer testimonials</h3>
                    <p>Over 27,000 businesses trust Paystack to power payments. Here's what some of them had to say.</p>
                </div>
                <div className="Card_Detail">
                    <div data-aos="fade-up" className="Card">
                        <img src={img1} alt="avatar" />
                        <p>Reliable payment logistics are key to our industry and Paystack has played a major role in our expansion across Nigeria.</p>
                        <div className="Bottom_Box">
                            <img src={im1} alt="avatar" />
                            <div className="Box">
                                <h4>Daniel Grüderich</h4>
                                <p>CEO, Sportsbookcloud</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="Card">
                        <img src={img2} alt="avatar" />
                        <p>Paystack has helped us expand our business to one of Africa’s fastest growing markets. Paystack should be top-of-mind for any business going global.</p>
                        <div className="Bottom_Box">
                            <img src={im2} alt="avatar" />
                            <div className="Box">
                                <h4>Merijn Campsteyn</h4>
                                <p>CEO, Accounteer</p>
                            </div>
                        </div>
                        <h5>Online accounting software</h5>
                    </div>
                    <div data-aos="fade-up" className="Card">
                        <img src={img3} alt="avatar" />
                        <p>At a 50% month on month growth rate in Q1 of 2018 alone, we wanted a payment platform that wouldn't break at scale, so we chose Paystack.</p>
                        <div className="Bottom_Box">
                            <img src={im3} alt="avatar" />
                            <div className="Box">
                                <h4>Maria Keshinro Rotilu</h4>
                                <p>Country Manager, Branch Nigeria, Branch</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default DeveloperTestimonialSection;