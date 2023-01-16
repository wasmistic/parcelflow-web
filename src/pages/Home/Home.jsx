import React, { Fragment } from "react";
import HeroSection from "./Components/Hero_section";
import SectionB from "./Components/Section_B";
import PlatformSection from "./Components/Platform";
import AccessibleSection from "./Components/accessible_section";
import OfferSection from "./Components/Offer_section";
import Parallax from "./Components/Parallax_section";
import Testimonial from "./Components/Testimonial";
import ReachOutSection from "./Components/Reach_out_section";
const HomePage = () => {
    return (  
        <Fragment>
             <HeroSection/>
            <SectionB/>
            <PlatformSection/>
            <AccessibleSection/>
            <OfferSection/>
            <Parallax/>
            <Testimonial/>
            <ReachOutSection/>
        </Fragment>
    );
}
 
export default HomePage;