import "../../Assets/Styles/blog.scss"
import { Fragment } from "react";
import BlogTopSection from "./components/blog_top_section";
import BlogTab from "./components/blog_tab";
import Data from "./components/data"

const BlogPgae = () => {

    const tabs=Data;
    return (
        <Fragment>
            <BlogTopSection/>
            <BlogTab blogs={tabs} />
        </Fragment>
    );
}
 
export default BlogPgae;