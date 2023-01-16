import "../../../Assets/Styles/price_section.scss"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


const CommentCardSection = () => {
  useEffect(() => {
    AOS.init({duration:2000});
    AOS.refresh();
  }, []);


    return (
        <div className="Comment_Card">
            <div className="Container">
                <div className="Detail_Box">
                 <div data-aos="fade-up" className="Box">
                   <h1>“</h1>
                   <p>From the first meeting through to<br/>the launch of our campaign, we<br/>appreciated their hands-on<br/> approach and attitude.</p>
                   <div className="Content">
                    <h4>Jane Warren</h4>
                    <h5>Client</h5>
                   </div>
                 </div>
                 <div className="Img_Box"></div>
                </div>
                <div className="Detail_Box">
                 <div className="Img_Box_male"></div>
                 <div data-aos="fade-up" className="Box">
                   <h1>“</h1>
                   <p>We have been working with the <br/>team for more than five years now, <br/>and we keep coming back because <br/>they always deliver!</p>
                   <div className="Content">
                    <h4>Jarrod Nash</h4>
                    <h5>Client</h5>
                   </div>
                 </div>
                </div>
            </div>
        </div>
    );
}
 
export default CommentCardSection;