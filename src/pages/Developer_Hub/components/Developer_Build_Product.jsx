// import { useState } from "react";
// import DeveloperTabSection from "./Developer_Tab";
// import Developer5CardSection from "./fifth_card_section";
// import DeveloperFirstCardSection from "./first_card_section";
// import Developer4CardSection from "./forth_card_section";
// import DeveloperSecondCardSection from "./second_card_section";
// import Developer7CardSection from "./seventh_card_section";
// import Developer6CardSection from "./sixth_card_section";
// import Developer3CardSection from "./third_card_section";
import {Link} from "react-router-dom"
import check from "../../../Assets/Svg/arrow_circle.svg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DeveloperBuildProduct = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return (
        <div className="Build_Product">
            <div className="container">
            <div data-aos="fade-up" className="Top">
                <h3>Powerful Shipping API</h3>
                <p>What can you build with Parcelflow? Short answer: Anything and Everything.</p>
            </div>
            <div data-aos="fade-up" className="Bottom_link_tag">
                <Link> <img src={check} alt="avatar" /> see the entire developer documentation</Link>
            </div>
            </div>
        </div>
    );
}
 
export default DeveloperBuildProduct;