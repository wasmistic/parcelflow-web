import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DeveloperPermissionSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return (
        <div className="Permission_fill">
        <div className="container">
        <div data-aos="fade-left" className="Box"></div>
         <div data-aos="fade-up" className="Box">
             <h3>Control access to data with User Permissions</h3>
             <p>Give specific members of your team exactly the permissions they need to do their jobs, and control exactly what they can see and do on your Paystack Dashboard.</p>
         </div>
        </div>
     </div>
    );
}
 
export default DeveloperPermissionSection;