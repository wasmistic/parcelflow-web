import { Fragment } from "react";
import CommunityCenterTopSection from "./Component/Community_Center_Top";
import "../../Assets/Styles/community.scss"
import TrendingQuestion from "./Component/Trending_Question";
import Comment4CardsSection from "./Component/comment_4_card_section";
import Comment3CardSection from "./Component/comment_3_card_section";
const CommunityCenterPage = () => {
    return (
        <Fragment>
            <CommunityCenterTopSection/>
            <TrendingQuestion/>
            <Comment4CardsSection/>
            <Comment3CardSection/>
        </Fragment>
    );
}
 
export default CommunityCenterPage;