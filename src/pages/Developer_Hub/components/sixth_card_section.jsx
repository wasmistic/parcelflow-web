import DeveloperCustomerCard from "./Customize_Card";
import tab  from "./Developer_data"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Developer6CardSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    const data=tab.tab6;
    return (
        <div className="First_Card_Section">
         {
            data.map((tab,index)=><DeveloperCustomerCard key={index} title={tab.title} text={tab.text} />)
         }
        </div>
    );
}
 
export default Developer6CardSection;