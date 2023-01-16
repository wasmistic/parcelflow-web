import React from "react";
import "../../Assets/Styles/footer.scss"
import { Link } from "react-router-dom";
import Logo from "../../Assets/Image/parcelflow-transparent-logo.png"
import nigeria from "../../Assets/Image/Nigeria.webp"
// import us from "../../Assets/Image/US_flag.webp"
const FooterPage = () => {
    return (
        <div className="Footer">
          <div className="Container">
          <ul>
                <li className="title">Products</li>
                <li><Link>Logistics Businesses</Link></li>
                <li><Link>E-commerce & Corporates</Link></li>
                <li><Link>Restaurants & Kitchens</Link></li>
            </ul>
            <ul>
                <li className="title">Business Segments</li>
                <li><Link>Business Operators</Link></li>
                <li><Link>Service Operators</Link></li>
            </ul>
            <ul>
                <li className="title">ParcelFlow</li>
                <li><Link>About us</Link></li>
                <li><Link>Blog</Link></li>
                <li><Link>Help Center</Link></li>
            </ul>
            <ul>
                <li className="title">Follow us</li>
                <li><Link>Instagram</Link></li>
                <li><Link>Twitter</Link></li>
                <li><Link>Youtube</Link></li>
                <li><Link>Facebook</Link></li>
            </ul>
            <ul>
                <li className="title">Contact us</li>
                <li>018888866</li>
                <li>015200061</li>
                <li>info@parcelflow.io</li>
            </ul>
            {/* <ul>
                <li className="title">LINKS</li>
                <li>
                    <Link to="#">About Us</Link>
                </li>
                <li>
                    <Link to="#">Careers - We're Hiring!</Link>
                </li>
                <li>
                    <Link to="#">Pricing</Link>
                </li>
                <li>
                    <Link to="#">Contact Us</Link>
                </li>
            </ul> */}
          </div>
          <div className="logo_box">
          <img src={Logo} alt="logo" />
          <ul>
                <li>
                    <Link>Privacy Policy</Link>
                </li>
                <li>
                    <Link>Terms of Service</Link>
                </li>
            </ul>
          </div>
          <div className="social_box">
            <ul>
                <li>
                    <img src={nigeria} alt="nigeria" />
                    <p>19b Bosun Adekoya Street, Lekki Phase 1, Lagos, Nigeria</p>
                </li>
            </ul>
            <p>© 2023 Parcelflow, All Rights Reserved</p>
          </div>
        </div>
    );
}
 
export default FooterPage;