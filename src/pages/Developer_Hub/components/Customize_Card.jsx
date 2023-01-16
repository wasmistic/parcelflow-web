import check from "../../../Assets/Svg/arrow_circle.svg"
import {Link} from "react-router-dom"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DeveloperCustomerCard = ({title,text}) => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);
    return (
        <div data-aos="fade-up" className="Card">
            <h3>{title}</h3>
            <p>{text}</p>
            <Link> <img src={check} alt="avatar" /> learn more</Link>
         </div>
    );
}
 
export default DeveloperCustomerCard;