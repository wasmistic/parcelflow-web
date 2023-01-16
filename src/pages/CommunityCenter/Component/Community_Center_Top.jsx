import Button from "../../../Components/Button"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CommunityCenterTopSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);
    return ( 
        <div className="Community_Top">
            <div data-aos="fade-up" className="Box">
            <h2>Interconnected</h2>
            <p>Ask questions, get answers, share expertise</p>
            <div className="Input_Box">
                <input type="text" placeholder="Search for answers..."/>
                <Button  name="search" />
            </div>
            <Button name="Ask a question" />
            </div>
        </div>
     );
}
 
export default CommunityCenterTopSection;