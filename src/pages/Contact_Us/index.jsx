import "../../Assets/Styles/contact_us.scss"
import { Fragment } from "react";
import ContactUsTopPage from "./component/Top_Section";
import ContactUsFormSection from "./component/Form_Section";
import BandSection from "../About/Component/Band_section";

const ContactUsPage = () => {
    return (
        <Fragment>
        <ContactUsTopPage/>
        <ContactUsFormSection/>
        <BandSection/>
        </Fragment>
    );
}
 
export default ContactUsPage;