import {Fragment, useEffect} from "react";
import SolutionHeroSection from "./Components/Solution_Hero_Page";
import SolutionTalentSection from "./Components/Talent_Section";
import SolutionRecruitingSection from "./Components/Recruiting_Section";
import SolutionCustomService from "./Components/Custom_Service";
import SolutionHireSection from "./Components/Hire_Tools_Section";
import SolutionRecruiterManager from "./Components/Recruiter_Manager";
import SolutionScalabilitySection from "./Components/Scalability";

const LogisticsBusiness = () => {
    useEffect(() => {
        document.title = 'Restaurant Business Solutions - Parcelflow';
    }, []);

    return (
        <Fragment>
            <SolutionHeroSection/>
            <SolutionTalentSection/>
            <SolutionRecruitingSection/>
            <SolutionCustomService/>
            <SolutionHireSection/>
            <SolutionRecruiterManager/>
            <SolutionScalabilitySection/>
        </Fragment>
    );
}
 
export default LogisticsBusiness;