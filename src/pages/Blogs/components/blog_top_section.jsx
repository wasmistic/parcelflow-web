import Button from "../../../Components/Button"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogTopSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);
    return ( 
        <div className="Top_Section">
            <h1 data-aos="fade-up">All articles</h1>
           <div className="inner-box">
            <div className="box">
                <h5>Filter by topic</h5>
                <select name="" id="">
                    <option value="all-topic">all topics</option>
                    <option value="candidate">candidate experience</option>
                    <option value="source">candidate source</option>
                    <option value="company">company culture</option>
                    <option value="de&i">DE&I</option>
                    <option value="work">distributed hiring & work</option>
                </select>
            </div>
            <div className="box">
            <Button name="apply filters"/>
            <Link>Clear</Link>
            </div>
           </div>
        </div>
     );
}
 
export default BlogTopSection;