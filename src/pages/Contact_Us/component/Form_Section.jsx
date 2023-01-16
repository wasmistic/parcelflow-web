import Button from "../../../Components/Button"
import { Link } from "react-router-dom";
import { useState } from "react";
import mark from "../../../Assets/Svg/mark.svg"

const ContactUsFormSection = () => {
    const [CheckValue, setCheckValue] = useState(false);
    const handleChange=(e)=>{
        setCheckValue(pre=>pre=e.target.checked)
    }
    
    return (
        <div className="Form_Fill">
            <div className="container">
                <div className="Box">
                    <form>
                        <div className="Form_Top">
                            <div className="Box">
                                <label htmlFor="First-Name">First Name</label>
                                <input placeholder="eg Jane" type="text" id="First-Name"/>
                            </div>
                            <div className="Box">
                                <label htmlFor="Last-Name">Last Name</label>
                                <input placeholder="eg Olusegun" type="text" id="Last-Name"/>
                            </div>
                        </div>
                        <div className="Box">
                            <label htmlFor="WorkEmail">Work Email</label>
                            <input placeholder="work@mail.com" type="email" id="WorkEmail"/>
                        </div>
                        <div className="Box">
                            <label htmlFor="PhoneNumber">Phone Number (Optional)</label>
                            <input placeholder="09121215900" type="tel" id="PhoneNumber"/>
                        </div>
                        <div className="Box">
                            <label htmlFor="CompanyName">Company Name</label>
                            <input placeholder="company-site.com" type="text" id="CompanyName"/>
                        </div>
                        <div className="Box">
                            <label htmlFor="CompanySize">Company Size</label>
                           <select name="" id="CompanySize">
                            <option value="1">1-9 employees</option>
                            <option value="2">10-99 employees</option>
                            <option value="3">100-999 employees</option>
                            <option value="4">1000+ employees</option>
                           </select>
                        </div>
                        <div className="Box">
                            <label htmlFor="pickOption">Which of these best describes your company's primary product?</label>
                            <small>Please select the closest option</small>
                            <select name="" id="pickOption">
                            <option value="1">Software (e.g tech upset)</option>
                            <option value="2">Culture (e.g music, photography, novels)</option>
                            <option value="3">Physical goods (eg food, clothing)</option>
                            <option value="4">Services (eg education, healthcare, entertaiment)</option>
                           </select>
                        </div>
                        <div className="Box">
                            <label htmlFor="Country">Country</label>
                           <select name="" id="Country">
                            <option value="1">TG Togo</option>
                            <option value="2">US United State</option>
                            <option value="3">SD Sudan</option>
                            <option value="4">NG Nigeria</option>
                           </select>
                        </div>
                        <div className="Box">
                            <label htmlFor="pickOption">Monthly Payment Volume</label>
                            <small>How much money your business processes online each month</small>
                            <select name="" id="pickOption">
                            <option value="1">None-just getting started</option>
                            <option value="2">Less than USD 100K</option>
                            <option value="3">USD 100K TO 500K</option>
                            <option value="4">USD 500K to 1m</option>
                            <option value="4">USD 1m to 10m</option>
                            <option value="4">more than USD 10m</option>
                           </select>
                        </div>
                        <div className="Box">
                            <label htmlFor="Tell">Tell us more</label>
                           <textarea placeholder="Please tell us about your project (needs, timeline etc)" name="" id="Tell" cols="30" rows="10"></textarea>
                        </div>
                        <div className="Buttom_Box">
                            <input checked={CheckValue} onChange={handleChange} id="checklabel" type="checkbox" />
                            <div className="Inner_Buttom_Box">
                                <label htmlFor="checklabel">Send me occasional Parcelflow update and annoucements.
                                <div className="link_box">
                                <span>You can unsubscribe at anytime. Learn more about our</span><Link>Privacy and Policy</Link>
                                </div>
                                </label>
                                
                            </div>
                        </div>
                       {CheckValue &&  <div className="HiddenBox">
                        <div className="Top">
                            <h3>Do you write code?</h3>
                            <Link>Why do we ask?
                            <div className="Hidden_Link">
                            We occasionally share technical stuff. If you write code, it might be relevant to you.
                            </div>
                            </Link>
                        </div>
                        <div className="Radio_Group">
                               <div className="Box">
                               <input name="radio" id="radio" type="radio" />
                                <label htmlFor="radio">Yup 🔥</label>
                               </div>
                               <div className="Box">
                               <input name="radio" id="radio1" type="radio" />
                                <label htmlFor="radio1">Nope 🚀</label>
                               </div>
                            </div>
                            </div>}
                        <div className="btn_box">
                        <Button name="Send Message" />
                        </div>
                    </form>
                </div>
                <div className="Box_two">
                    <h2>Trusted by over 80,000 businesses</h2>
                    <p>Paystack is the partner of choice for many of Nigeria's market leaders, including MTN, Air Peace, and AXA Mansard</p>
                    <ul>
                        <li>
                            <img src={mark} alt="check" />
                            Multiple payment channels
                        </li>
                        <li>
                            <img src={mark} alt="check" />
                            Detailed reporting and easy reconciliation
                        </li>
                        <li>
                            <img src={mark} alt="check" />
                            Automated chargeback resolution
                        </li>
                        <li>
                            <img src={mark} alt="check" />
                            Granular user permissions
                        </li>
                        <li>
                            <img src={mark} alt="check" />
                            Lots more!
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default ContactUsFormSection;