import { Fragment } from "react";
import "../../Assets/Styles/Policy.scss"
import PrivacyPolicyBody from "./Components/PolicyBody";
import PrivacyPolicyTopSection from "./Components/PrivacyTop";

const PrivacyPolicyPage = () => {
    return (
        <Fragment>
        <PrivacyPolicyTopSection/>
        <PrivacyPolicyBody/>
        </Fragment>
    );
}
 
export default PrivacyPolicyPage;