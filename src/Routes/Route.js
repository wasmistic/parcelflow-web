import React from "react";
import {
    Routes,
    Route,
    // Navigate
} from 'react-router-dom';
import HomePage from "../pages/Home/Home";
import AboutPage from "../pages/About/About";
import PricePage from "../pages/Pricing/Price";
import CommunityPage from "../pages/Community/Community";
import ResourcePage from "../pages/Resources/Resources";
import SolutionPage from "../pages/Solution/Solution_Page";
import EventsWebinars from "../pages/Conference/Conference";
import RouterErrorPage from "../pages/404Page/Error";
import LogisticsBusiness from "../pages/LogisticsBusiness/LogisticsBusiness";
import RestaurantBusiness from "../pages/LogisticsBusiness/LogisticsBusiness";
import EcommerceBusiness from "../pages/EcommerceBusiness/EcommerceBusiness";
import BlogsPage from "../pages/Blogs/index"
import DynamicBlogPage from "../pages/dynamicBlog/dynamic_page.jsx"
import HelpCenterPage from "../pages/HelpCenter/index"
import CommunityCenterPage from "../pages/CommunityCenter"
import DeveloperHubPage from "../pages/Developer_Hub/index"
import ContactUsPage from "../pages/Contact_Us/index"


const Routers = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/about" element={<AboutPage/>}/>
            <Route exact path="/pricing" element={<PricePage/>}/>
            <Route exact path="/blogs" element={<BlogsPage/>}/>
            <Route exact path="/blog/:id" element={<DynamicBlogPage/>}/>
            <Route exact path="/community" element={<CommunityPage/>}/>
            <Route exact path="/help-center" element={<HelpCenterPage/>}/>
            <Route exact path="/community-center" element={<CommunityCenterPage/>}/>
            <Route exact path="/contact-us" element={<ContactUsPage/>}/>
            <Route exact path="/developer-hub" element={<DeveloperHubPage/>}/>
            <Route exact path="/events-webinars" element={<EventsWebinars/>}/>
            <Route exact path="/resources" element={<ResourcePage/>}/>
            <Route exact path="/solution" element={<SolutionPage/>}/>
            <Route exact path="/logistics-business-solutions" element={<LogisticsBusiness/>}/>
            <Route exact path="/restaurant-business-solutions" element={<RestaurantBusiness/>}/>
            <Route exact path="/ecommerce-business-solutions" element={<EcommerceBusiness/>}/>
            <Route exact path="**" element={<RouterErrorPage/>}/>
        </Routes>
    );
}

export default Routers;