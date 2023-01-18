import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const PriceTab = ({tab,handle,setTab,firstclick,secondclick,thirdclick}) => {
  useEffect(() => {
    AOS.init({duration:2000});
    AOS.refresh();
  }, []);

    return (
      <>
        <div  className="Tab_fill">
            <div data-aos="fade-left" onClick={firstclick} className={`Box ${tab=== 1 ? 'active' : ''}`}>logistic businesses</div>
            <div data-aos="fade-left" onClick={secondclick} className={`Box ${tab=== 2 ? 'active' : ''}`}>Ecommerce</div>
            <div data-aos="fade-left" onClick={thirdclick} className={`Box ${tab=== 3 ? 'active' : ''}`}>ecommerce businesses</div>
        </div>
        <select data-aos="fade-left" value={tab}  onChange={handle} className="Price_Select_field" name="" id="">
            <option value="1">businesses</option>
            <option value="2">for more businesses</option>
            <option value="3">for very small businesses</option>
        </select>
      </>
    );
}
 
export default PriceTab;