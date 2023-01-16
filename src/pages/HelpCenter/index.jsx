import React from "react";
import "../../Assets/Styles/contact.scss"
import ContactHeroSection from "./components/contact_hero_section";
import ContactPayment from "./components/contact_payment";
import NeedAnswerSection from "./components/need_answer";
import NeedQuickAnswer from "./components/quick_answer";

const ContactPage = () => {
    return ( 
            <div>
            <ContactHeroSection/>
            <NeedAnswerSection/>
            <NeedQuickAnswer/>
            <ContactPayment/>
            </div>
     );
}
 
export default ContactPage;