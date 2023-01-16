import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const DynamicTop = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);
    return (
        <div className="Dynamic_fill">
        </div>
    );
}
 
export default DynamicTop;