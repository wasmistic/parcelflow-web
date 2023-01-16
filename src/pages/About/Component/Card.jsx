import Button from "../../../Components/Button"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


const CardResult = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);


    return ( 
        <div className="Card">
            <div data-aos="fade-up" className="Box">
                <h4>OUR APPROACH</h4>
                <h2>Results oriented</h2>
                <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac enim ante. Aliquam eu congue justo, in varius diam fusce tellus.</p>
                <Button name="FIND OUT MORE"/>
            </div>
            <div className="Box_img"></div>
        </div>
     );
}
 
export default CardResult;