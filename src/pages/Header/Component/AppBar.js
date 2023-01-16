import React, {Fragment, useEffect, useState} from 'react';
import Logo1 from "../../../Assets/Image/parcelflow-transparent-logo.png"
import {NavLink} from 'react-router-dom';
import "../../../Assets/Styles/nav_bar.scss";
import Btn from "../../../Components/Button.js";
import ButtonOutline from "../../../Components/Outline_btn.js"
import hamburger from "../../../Assets/Svg/hamburger.svg"
import img1 from "../../../Assets/Image/Talent.webp"
import img2 from "../../../Assets/Image/tshirt.webp"
import img3 from "../../../Assets/Image/working.webp"
import close from "../../../Assets/Svg/close.svg"
import chevron_left from "../../../Assets/Svg/chevron_left.svg"
import chevron_right from "../../../Assets/Svg/chevron_right.svg"


export default function ButtonAppBar() {
    const [product, setproduct] = useState(false);
    const [resources, setresources] = useState(false);
    const [about_us, setabout_us] = useState(false);
    const [community, setcommunity] = useState(false);
    const [product_mobile, setproduct_mobile] = useState(false);
    const [resources_mobile, setresources_mobile] = useState(false);
    const [about_us_mobile, setabout_us_mobile] = useState(false);
    const [community_mobile, setcommunity_mobile] = useState(false);
    const [SideBarToggle, setSideBarToggle] = useState(false);
    const [chevronToggle, setchevronToggle] = useState(false);


    const handle = () => {
        setSideBarToggle(pre => !pre)
        setproduct_mobile(false)
        setresources_mobile(false)
        setabout_us_mobile(false)
        setcommunity_mobile(false)
        setchevronToggle(false)
    };
    const product_mobile_handle = () => {
        setproduct_mobile(pre => !pre)
        setchevronToggle(true)
    };
    const general_mobile_handle = () => {
        setproduct_mobile(false)
        setresources_mobile(false)
        setabout_us_mobile(false)
        setcommunity_mobile(false)
        setchevronToggle(false)
    };
    const resources_mobile_handle = () => {
        setresources_mobile(pre => !pre)
        setchevronToggle(true)
    };
    const community_mobile_handle = () => {
        setcommunity_mobile(pre => !pre)
        setchevronToggle(true)
    };
    const pricing_mobile_handle = () => {
        setabout_us_mobile(pre => !pre)
        setchevronToggle(true);
        window.location = "/pricing";
    };

    const closeMenu = () => {
        setproduct(false);
        setresources(false)
        setabout_us(false)
        setcommunity(false)
    }

    const productToggle = () => {
        setproduct(pre => !pre);
        setresources(false)
        setabout_us(false)
        setcommunity(false)
    };
    // const resourcesToggle = () => {
    //     setresources(pre => !pre)
    //     setproduct(false);
    //     setabout_us(false)
    //     setcommunity(false)
    // };
    // const about_usToggle = () => {
    //     setabout_us(pre => !pre)
    //     setresources(false)
    //     setproduct(false)
    //     setcommunity(false)
    // };
    const learnMoreToggle = () => {
        setcommunity(pre => !pre)
        setabout_us(false)
        setresources(false)
        setproduct(false)
    };

    useEffect(() => {
        if ( window.innerWidth > 768) {
            setSideBarToggle(false)
        }
    }, []);

    return (
        <Fragment>
            <div className="navbar_fill">
                <div className='Appbar'>
                    <div className='toolbar-left-content'>
                        <a href="/">
                            <img style={{height: "35px"}} src={Logo1} alt='Logo'/>
                        </a>
                        <ul className="App-header">
                            <li onClick={productToggle} className={`${(product ? 'active_li' : '')}`}>
                                Products & Solutions
                            </li>
                            <li className={`${(about_us ? 'active_li' : '')}`}><a href="/about">About Us</a></li>
                            <li className={`${(resources ? 'active_li' : '')}`}><a href="/pricing">Pricing</a></li>
                            <li onClick={learnMoreToggle} className={`${(community ? 'active_li' : '')}`}>Learn More
                            </li>
                        </ul>
                    </div>
                    <div className='toolbar-right-content'>
                        <Btn name="GET STARTED"/>
                        <img onClick={handle} className='img img_hamburger' alt='search' src={hamburger}/>
                    </div>
                </div>
            </div>
            <div className={`product_dropdown ${(product ? 'on-active' : 'non-active')}`}>
                <div className='Container'>
                    <div className='left_content'>
                        <ul>
                            <li className='top_title'>Products</li>
                            <li>
                                <NavLink onClick={closeMenu} to="/logistics-business-solutions">For Logistics
                                    Businesses</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={closeMenu} to="/restaurant-business-solutions">For Restaurant &
                                    Kitchens</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={closeMenu} to="/ecommerce-business-solutions">For E-commerce &
                                    Corporates</NavLink>
                            </li>
                        </ul>
                    </div>
                    <ul>
                        <li className='top_title'>Segments</li>
                        <li>
                            <NavLink onClick={closeMenu} to="/contact-us">Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={closeMenu} to="/conference">Business Operators</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={closeMenu} to="/resources">Service Operators</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`resources_dropdown ${(resources ? 'on-active' : 'non-active')}`}>
                <div className='Container'>
                    <div className='left_content'>
                        <ul>
                            <li><NavLink to="/blogs">Blog</NavLink></li>
                            <li><NavLink to="/conference">Guidance</NavLink></li>
                            <li><NavLink to="/resources">Customer stories</NavLink></li>
                            <li><NavLink to="/solution">Hiring glossary</NavLink></li>
                            <li><NavLink to="/">Talent Makers book</NavLink></li>
                        </ul>
                    </div>
                    <div className='right_content'>
                        <img src={img1} alt='avatar'/>
                        <div className='inner_right_content'>
                            <h6>Now available</h6>
                            <h4>Talent Makers – The definitive book on great hiring</h4>
                            <p>We’ve packed all our insights, strategies and tips into a book that will help you make
                                hiring your superpower.</p>
                            <ButtonOutline name="See the reviews"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`about_us_dropdown ${(about_us ? 'on-active' : 'non-active')}`}>
                <div className='Container'>
                    <div className='left_content'>
                        <ul>
                            <li><NavLink to="/about">Mission</NavLink></li>
                            <li><NavLink to="/price">Belonging</NavLink></li>
                            <li><NavLink to="/community">Company</NavLink></li>
                            <li><NavLink to="/conference">Careers</NavLink></li>
                            <li><NavLink to="/resources">Press & awards</NavLink></li>
                            <li><NavLink to="/contact-us">Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className='right_content'>
                        <img src={img2} alt='avatar'/>
                        <div className='inner_right_content'>
                            <h6>Greenhouse celebrates Pride</h6>
                            <h4>Buy a shirt, help an LGBTQ+ teen</h4>
                            <p>We’re shining a spotlight on the LGBTQ+ community with our new Pride t-shirt. 100% of the
                                proceeds are going to support The Trevor Project and the Ali Forney Center.</p>
                            <ButtonOutline name="Get your Pride shirt"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`community_dropdown ${(community ? 'on-active' : 'non-active')}`}>
                <div className='Container'>
                    <div className='left_content'>
                        <ul>
                            <li><NavLink onClick={closeMenu} to="/events-webinars">Events & Webinars</NavLink></li>
                            <li><NavLink onClick={closeMenu} to="/blogs">Blogs & Podcasts</NavLink></li>
                            <li><NavLink onClick={closeMenu} to="/help-center">Help Center</NavLink></li>
                            <li><NavLink onClick={closeMenu} to="/developer-hub">Developer Hub</NavLink></li>
                            {/*<li><NavLink onClick={closeMenu} to="/community-center">Community Center</NavLink></li>*/}
                        </ul>
                    </div>
                    <div className='right_content'>
                        <img src={img3} alt='avatar'/>
                        <div className='inner_right_content'>
                            <h6>Webinar series</h6>
                            <h4>Reporting made simple 4: The value of clean data</h4>
                            <p>In this webinar, you’ll gain the knowledge to ensure your data stays clean and
                                consistent, so you can measure, iterate and improve every part of your team’s hiring
                                process.</p>
                            <ButtonOutline name="Watch on demand"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`mobile ${(SideBarToggle ? 'on-active' : 'not-active')}`}>
                <div className='Container'>
                    <div className='Top_Section'>
                        {chevronToggle && <img onClick={general_mobile_handle} src={chevron_left} alt="avatar"/>}
                        <img className='close' onClick={handle} src={close} alt="avatar"/>
                    </div>
                    <div className='List_of_Link'>
                        <ul>
                            <li onClick={product_mobile_handle}>Products & solutions <img src={chevron_right}
                                                                                          alt="avatar"/></li>
                            <li onClick={resources_mobile_handle}>About Us <img src={chevron_right} alt="avatar"/></li>
                            <li onClick={pricing_mobile_handle}>Pricing</li>
                            <li onClick={community_mobile_handle}>Learn More <img src={chevron_right} alt="avatar"/>
                            </li>
                        </ul>
                        <div className='btn_box'>
                            <Btn name="Request a demo"/>
                            <ButtonOutline name="sign in"/>
                        </div>
                    </div>
                    <div
                        className={`product_mobile ${(product_mobile ? 'product_mobile_isActive' : 'product_mobile_notActive')}`}>
                        <div className='Container'>
                            <div className='left_content'>
                                <ul>
                                    <li className='top_title'>Products</li>
                                    <li>
                                        <NavLink to="/logistics-business-solutions">For Logistics Businesses</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/restaurant-business-solutions">For Restaurants & Kitchens</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/ecommerce-business-solutions">For E-commerce & Corporates</NavLink>
                                    </li>
                                </ul>
                                <ul>
                                    <li className='top_title'>Operator Types</li>
                                    <li>
                                        <NavLink to="/conference">Business Operators</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/resources">Service Operators</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <ul>
                                <li className='top_title'>Solutions</li>
                                <li>
                                    <NavLink to="/conference">Integrations</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/resources">Structured hiring</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/solution">Talent sourcing</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Candidate experience</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">Diversity, equity & inclusion</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/prices">More solutions</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className={`resources_mobile ${(resources_mobile ? 'resources_mobile_isActive' : 'resources_mobile_notActive')}`}>
                        <div className='Container'>
                            <div className='left_content'>
                                <ul>
                                    <li><NavLink to="/blogs">Blog</NavLink></li>
                                    <li><NavLink to="/conference">Guidance</NavLink></li>
                                    <li><NavLink to="/resources">Customer stories</NavLink></li>
                                    <li><NavLink to="/solution">Hiring glossary</NavLink></li>
                                    <li><NavLink to="/">Talent Makers book</NavLink></li>
                                </ul>
                            </div>
                            <div className='right_content'>
                                <h6>Now available</h6>
                                <img src={img1} alt='avatar'/>
                                <div className='inner_right_content'>
                                    <h4>Talent Makers – The definitive book on great hiring</h4>
                                    <p>We’ve packed all our insights, strategies and tips into a book that will help you
                                        make hiring your superpower.</p>
                                    <ButtonOutline name="See the reviews"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`about_mobile ${(about_us_mobile ? 'about_mobile_isActive' : 'about_mobile_notActive')}`}>
                        <div className='Container'>
                            <div className='left_content'>
                                <ul>
                                    <li><NavLink to="/about">Mission</NavLink></li>
                                    <li><NavLink to="/pricing">Belonging</NavLink></li>
                                    <li><NavLink to="/community">Company</NavLink></li>
                                    <li><NavLink to="/conference">Careers</NavLink></li>
                                    <li><NavLink to="/resources">Press & awards</NavLink></li>
                                    <li><NavLink to="/contact-us">Contact</NavLink></li>
                                </ul>
                            </div>
                            <div className='right_content'>
                                <h6>Greenhouse celebrates Pride</h6>
                                <img src={img2} alt='avatar'/>
                                <div className='inner_right_content'>
                                    <h4>Buy a shirt, help an LGBTQ+ teen</h4>
                                    <p>We’re shining a spotlight on the LGBTQ+ community with our new Pride t-shirt.
                                        100% of the proceeds are going to support The Trevor Project and the Ali Forney
                                        Center.</p>
                                    <ButtonOutline name="Get your Pride shirt"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`community_mobile ${(community_mobile ? 'community_mobile_isActive' : 'community_mobile_notActive')}`}>
                        <div className='Container'>
                            <div className='left_content'>
                                <ul>
                                    <li><NavLink to="/events-webinars">Events & Webinars</NavLink></li>
                                    <li><NavLink to="/blogs">Blogs & Podcast</NavLink></li>
                                    <li><NavLink to="/help-center">Help Center</NavLink></li>
                                    <li><NavLink to="/developer-hub">Developer Hub</NavLink></li>
                                    <li><NavLink to="/community-center">Community Center</NavLink></li>
                                </ul>
                            </div>
                            <div className='right_content'>
                                <h6>Webinar series</h6>
                                <img src={img3} alt='avatar'/>
                                <div className='inner_right_content'>
                                    <h4>Reporting made simple 4: The value of clean data</h4>
                                    <p>In this webinar, you’ll gain the knowledge to ensure your data stays clean and
                                        consistent, so you can measure, iterate and improve every part of your team’s
                                        hiring process.</p>
                                    <ButtonOutline name="Watch on demand"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    );
}