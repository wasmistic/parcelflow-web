import {Fragment, useEffect} from "react";
import DeveloperHeroSection from "./components/Developer_Hero";
import "../../Assets/Styles/developer_hub.scss"
import DeveloperBuildCustomSection from "./components/Developer_Build_Section";
import DeveloperBuildProduct from "./components/Developer_Build_Product";
import DeveloperSeamlessSection from "./components/Developer_Seamless_Payment";
import DeveloperShoppingSection from "./components/Developer_Shopping_Section";
import DeveloperProtectionSection from "./components/Developer_Protection";
import DeveloperVerifyIdentity from "./components/Developer_Verify";
import DeveloperModelSection from "./components/Developer_model";
import DeveloperPermissionSection from "./components/Developer_Permission";
import DeveloperPurchaseSection from "./components/Developer_Purchase";
import DeveloperPhoneSection from "./components/Developer_Phone";
import DeveloperPowerGrowthSection from "./components/Developer_power_growth";
// import DeveloperCareerSection from "./components/Developer_Careeer";
import DeveloperTestimonialSection from "./components/Developer_Testimonial";
// import DeveloperPaymentSection from "./components/Developer_Payment";
// import DeveloperGuardianSection from "./components/Developer_Guardian";
import DeveloperAcceptSection from "./components/Developer_Accept";

const DeveloperPage = () => {
        useEffect(() => {
                document.title = 'Developer Hub - Parcelflow';
        }, []);

    return (  
        <Fragment>
            <DeveloperHeroSection/>
            <DeveloperBuildCustomSection/>
            <DeveloperBuildProduct/>
            <DeveloperSeamlessSection/>
            <DeveloperShoppingSection/>
            <DeveloperProtectionSection/>
            <DeveloperVerifyIdentity/>
            <DeveloperModelSection/>
            <DeveloperPermissionSection/>
            <DeveloperPurchaseSection/>
            <DeveloperPhoneSection/>
            <DeveloperPowerGrowthSection/>
            <DeveloperTestimonialSection/>
            <DeveloperAcceptSection/>
        </Fragment>
    );
}
 
export default DeveloperPage;