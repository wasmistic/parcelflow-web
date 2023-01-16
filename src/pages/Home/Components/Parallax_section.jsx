import "../../../Assets/Styles/parallax.scss";
import { Link } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Parallax = () => {

  useEffect(() => {
    AOS.init({duration:2000});
    AOS.refresh();
  }, []);

    return ( 
       <div className="Parallax-fill">
        <div className="Parallax">
          <span className="blend_mode">
          </span>
          <div className="Parallax_box">
            <h2>We help you knock the socks <br/>off your customers</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod sed tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercíciotion ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Link to="#">Read more</Link>
          </div>
        </div>
       </div>
     );
}
 
export default Parallax;