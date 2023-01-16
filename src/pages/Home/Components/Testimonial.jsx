import "../../../Assets/Styles/testimonial.scss"
import img1 from "../../../Assets/Image/tes_img_1.jpg";
import img2 from "../../../Assets/Image/tes_img_2.jpg";
import img3 from "../../../Assets/Image/tes_img_3.jpg";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


const Testimonial = () => {

    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return ( 
       <div  className="Testimonial-fill">
        <h6 data-aos="fade-up">OUR CLIENTS</h6>
        <h2 data-aos="fade-up">Testimonials</h2>
        <div data-aos="fade-up" className="Card_box">
            <div  className="Card">
                <p>“We'd tried other platforms before, but it was clear that Stratus is different. For us it came down to all the details that make the platform a pleasure to use.”</p>
                <div className="profile_details">
                    <img src={img1} alt="avatar" />
                    <div className="details">
                        <h5>Joan Sanders</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="Card">
                <p>"Our team switched over to Stratus, and we saw an immediate improvement in our customer feedback scores. We couldn't be happier with the results."</p>
                <div className="profile_details">
                    <img src={img2} alt="avatar" />
                    <div className="details">
                        <h5>Benjamin Myer</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="Card">
                <p>"We were seeking out the best customer service CRM solution for our company, and we tried them all. Simply put, Stratus was the best."</p>
                <div className="profile_details">
                    <img src={img3} alt="avatar" />
                    <div className="details">
                        <h5>Sandra Tate</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
     );
}
 
export default Testimonial;