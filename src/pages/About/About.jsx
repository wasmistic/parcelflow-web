import React from "react";
import AboutHeroSection from "./Component/About_Hero";
import CounterSection from "./Component/Counter_section";
import ApproachSection from "./Component/Approach";
import ValueSection from "./Component/Value_Section";
import TrustedSection from "./Component/Trusted_Section";
import LeadershipSection from "./Component/Leader_Section";
import BandSection from "./Component/Band_section";


const AboutPage = () => {
    return ( 
        <div>
            <AboutHeroSection/>
            <CounterSection/>
            <ApproachSection/>
            <ValueSection/>
            <BandSection/>
        </div>
     );
}
 
export default AboutPage;