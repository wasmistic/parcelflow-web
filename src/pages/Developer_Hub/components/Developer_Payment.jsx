import {Link} from "react-router-dom"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DeveloperPaymentSection = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);

    return (
        <div className="Payment_Section_fill">
            <div className="container">
                <div data-aos="fade-up" className="Top">
                    <h3>Payments in Nigeria 101</h3>
                    <p>Here're simple guides that break down how payments work in Nigeria</p>
                </div>
                <div className="Card_Detail">
                    <div data-aos="fade-up" className="Card">
                    <div className="img"></div>
                    <div className="Box">
                    <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1216 18H0.878378C0.386486 18 0 17.5787 0 17.0426C0 16.5064 0.386486 16.0851 0.878378 16.0851H12.1216C12.6135 16.0851 13 16.5064 13 17.0426C13 17.5787 12.6135 18 12.1216 18ZM11.8405 7.77447C11.4892 7.39149 10.927 7.39149 10.6108 7.77447L7.37838 11.2979V0.880851C7.37838 0.382978 6.99189 0 6.5 0C6.00811 0 5.62162 0.382978 5.62162 0.880851V11.2979L2.38919 7.77447C2.03784 7.39149 1.47568 7.39149 1.15946 7.77447C0.808108 8.15745 0.808108 8.77021 1.15946 9.11489L5.86757 14.2468C6.04324 14.4383 6.25405 14.5149 6.5 14.5149C6.74595 14.5149 6.95676 14.4383 7.13243 14.2468L11.8405 9.11489C12.1919 8.77021 12.1919 8.15745 11.8405 7.77447Z" fill="#3BB75E"></path>
                    </svg>
                    <Link>Get the Guide</Link>
                    </div>
                    </div>
                    <div data-aos="fade-up" className="Card">
                    <div className="img"></div>
                    <div className="Box">
                    <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1216 18H0.878378C0.386486 18 0 17.5787 0 17.0426C0 16.5064 0.386486 16.0851 0.878378 16.0851H12.1216C12.6135 16.0851 13 16.5064 13 17.0426C13 17.5787 12.6135 18 12.1216 18ZM11.8405 7.77447C11.4892 7.39149 10.927 7.39149 10.6108 7.77447L7.37838 11.2979V0.880851C7.37838 0.382978 6.99189 0 6.5 0C6.00811 0 5.62162 0.382978 5.62162 0.880851V11.2979L2.38919 7.77447C2.03784 7.39149 1.47568 7.39149 1.15946 7.77447C0.808108 8.15745 0.808108 8.77021 1.15946 9.11489L5.86757 14.2468C6.04324 14.4383 6.25405 14.5149 6.5 14.5149C6.74595 14.5149 6.95676 14.4383 7.13243 14.2468L11.8405 9.11489C12.1919 8.77021 12.1919 8.15745 11.8405 7.77447Z" fill="#3BB75E"></path>
                    </svg>
                    <Link>Get the Guide</Link>
                    </div>
                    </div>
                    <div data-aos="fade-up" className="Card">
                    <div className="img"></div>
                    <div className="Box">
                    <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1216 18H0.878378C0.386486 18 0 17.5787 0 17.0426C0 16.5064 0.386486 16.0851 0.878378 16.0851H12.1216C12.6135 16.0851 13 16.5064 13 17.0426C13 17.5787 12.6135 18 12.1216 18ZM11.8405 7.77447C11.4892 7.39149 10.927 7.39149 10.6108 7.77447L7.37838 11.2979V0.880851C7.37838 0.382978 6.99189 0 6.5 0C6.00811 0 5.62162 0.382978 5.62162 0.880851V11.2979L2.38919 7.77447C2.03784 7.39149 1.47568 7.39149 1.15946 7.77447C0.808108 8.15745 0.808108 8.77021 1.15946 9.11489L5.86757 14.2468C6.04324 14.4383 6.25405 14.5149 6.5 14.5149C6.74595 14.5149 6.95676 14.4383 7.13243 14.2468L11.8405 9.11489C12.1919 8.77021 12.1919 8.15745 11.8405 7.77447Z" fill="#3BB75E"></path>
                    </svg>
                    <Link>Coming Soon</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default DeveloperPaymentSection;