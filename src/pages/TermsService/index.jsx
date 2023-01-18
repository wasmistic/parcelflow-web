import { Fragment } from "react";
import "../../Assets/Styles/Terms.scss"
import TermsServiceBodySection from "./Components/Terms.Body";
import TermsServiceTopPage from "./Components/TermsTop";

const TermsServicePage = () => {
    return (
        <Fragment>
        <TermsServiceTopPage/>
        <TermsServiceBodySection/>
        </Fragment>
    );
}
 
export default TermsServicePage;