import "../../../Assets/Styles/about_hero.scss"
import diamond from "../../../Assets/Svg/diamond.svg"
import user from "../../../Assets/Svg/users.svg"
import cup from "../../../Assets/Svg/cup.svg"
import graph from "../../../Assets/Svg/graph.svg"
import ship from "../../../Assets/Svg/ship.svg"
import phone from "../../../Assets/Svg/phone.svg"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";



const ValueSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);


    return ( 
       <div className="Value-fill">
        <div className="Top">
            <h1>Our values</h1>
            <div className="Card-Box">
                <div data-aos="fade-up" className="Card">
                    <img src={diamond} alt="avatar" />
                    <h4>Authenticity</h4>
                    <p>Aliquam mollis quam sed mattis sodales. Morbi accumsan posuere iaculis. Donec a scelerisque magna.</p>
                </div>
                <div data-aos="fade-up" className="Card">
                    <img src={user} alt="avatar" />
                    <h4>Togetherness</h4>
                    <p>Suspendisse sagittis vel lacinia. Integer sit amet ante elit. Praesent pulvinar congue risus, in tristique.</p>
                </div>
                <div data-aos="fade-up" className="Card">
                    <img src={cup} alt="avatar" />
                    <h4>Gratitude</h4>
                    <p>Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu.</p>
                </div>
                <div data-aos="fade-up" className="Card">
                    <img src={graph} alt="avatar" />
                    <h4>Transparency</h4>
                    <p>Suspendisse sagittis vel lacinia. Integer sit amet ante elit. Praesent pulvinar congue risus, in tristique.</p>
                </div>
                <div data-aos="fade-up" className="Card">
                    <img src={ship} alt="avatar" />
                    <h4>Inspiration</h4>
                    <p>Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu.</p>
                </div>
                <div data-aos="fade-up" className="Card">
                    <img src={phone} alt="avatar" />
                    <h4>Service</h4>
                    <p>Aliquam mollis quam sed mattis sodales. Morbi accumsan posuere iaculis. Donec a scelerisque magna.</p>
                </div>
            </div>
        </div>
       </div>
    );
}
 
export default ValueSection;