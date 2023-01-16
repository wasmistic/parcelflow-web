import "../../../Assets/Styles/conference.scss"
import media from "../../../Assets/Video/video.mp4"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


const ConferenceMediaSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);


    return (
        <div className="Media_fill">
            <video width="320" height="240" muted autoPlay  controls>
            <source src={media} type="video/mp4"/>
            </video>
        </div>
    );
}
 
export default ConferenceMediaSection;