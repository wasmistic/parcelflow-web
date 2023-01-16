import React, { Fragment } from "react";
import ConferenceTopPage from "./Conponents/Conference_Top";
import ConferenceMediaSection from "./Conponents/Media";
import ConferenceExpectSection from "./Conponents/Expect_Section";
import ConferenceExperienceSection from "./Conponents/Experience_Section";
import ConferenceAdvocateSection from "./Conponents/Advocate";
import ConferenceRediscoverSection from "./Conponents/Rediscover";
import ConferencePartnerSection from "./Conponents/Partner";
import ConferenceGoldPage from "./Conponents/Gold";
import ConferenceSilverSection from "./Conponents/Silver";
import ConferenceOpenExperience from "./Conponents/Open_Exp";
import ConferenceHealthSection from "./Conponents/Health_Section";
import ConferenceFriendSection from "./Conponents/Friend_Section";


const ConferencePage = () => {
    return (
        <Fragment>
            <ConferenceTopPage/>
            <ConferenceExpectSection/>
            <ConferenceExperienceSection/>
            <ConferenceAdvocateSection/>
            <ConferenceRediscoverSection/>
            <ConferenceHealthSection/>
            <ConferenceFriendSection/>
        </Fragment>
    );
}
 
export default ConferencePage;