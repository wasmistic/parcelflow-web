import {Fragment, useEffect} from "react";
import SolutionHeroSection from "./Components/Solution_Hero_Page";
import AcceptShipmentsSection from "./Components/Talent_Section";
import PriceSettingSection from "./Components/Recruiting_Section";
import TransporterLocationSection from "./Components/Custom_Service";
import SolutionHireSection from "./Components/Hire_Tools_Section";
import SolutionRecruiterManager from "./Components/Recruiter_Manager";
import SolutionScalabilitySection from "./Components/Scalability";

const RestaurantBusiness = () => {
    useEffect(() => {
        document.title = 'Restaurant Business Solutions - Parcelflow';
    }, []);

    return (
        <Fragment>
            <SolutionHeroSection/>
            <AcceptShipmentsSection/>
            <PriceSettingSection/>
            <TransporterLocationSection/>
            <SolutionHireSection/>
            <SolutionRecruiterManager/>
            <SolutionScalabilitySection/>
        </Fragment>
    );
}
 
export default RestaurantBusiness;