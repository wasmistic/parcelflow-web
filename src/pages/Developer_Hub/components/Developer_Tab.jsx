import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DeveloperTabSection = ({first,second,third,forth,fifth,sixth,seventh,tab}) => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return (
        <div className="Tab_Section">
           <div data-aos="fade-left" onClick={first} className={`Box ${tab===1? 'active' : ''}`}>SAVINGS APP</div>
           <div data-aos="fade-left" onClick={second} className={`Box ${tab===2? 'active' : ''}`}>ONLINE MARKETPLACE</div>
           <div data-aos="fade-left" onClick={third} className={`Box ${tab===3? 'active' : ''}`}>LENDING APP</div>
           <div data-aos="fade-left" onClick={forth} className={`Box ${tab===4? 'active' : ''}`}>ONLINE BETTING</div>
           <div data-aos="fade-left" onClick={fifth} className={`Box ${tab===5? 'active' : ''}`}>MOBILE WALLET</div>
           <div data-aos="fade-left" onClick={sixth} className={`Box ${tab===6? 'active' : ''}`}>VIDEO SUBSCRIPTION APP</div>
           <div data-aos="fade-left" onClick={seventh} className={`Box ${tab===7? 'active' : ''}`}>RIDE SHARING APP</div> 
        </div>
    );
}
 
export default DeveloperTabSection;