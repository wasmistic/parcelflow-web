import React, { Fragment } from "react"
import BandSection from "../About/Component/Band_section";
import PriceHeroSection from "./Components/Price_Hero_Section";
// import ViewPriceSection from "./Components/View_Price_Section";
import PricePlanSection from "./Components/Price_Plan_Section";
import PriceOrientedSection from "./Components/Price_oriented_Section";
import CardList from "./Components/Card_list";
import CommentCardSection from "./Components/Comment_Card_Section";
import { useState } from "react";
import PriceTab from "./Components/price_tab";
import PriceMoreBusinesses from "./Components/price_more_business";
import PriceSmallBusinesses from "./Components/price_small_business";
// import SliderSection from "./Components/Slider_Section";

const PricePage = () => {
    const [Tab, setTab]=useState(1);
    const firsthandle=()=>{
        setTab(pre=>pre=1)
    }
    const secondhandle=()=>{
        setTab(pre=>pre=2)
    }
    const thirdhandle=()=>{
        setTab(pre=>pre=3)
    }
    const selectHandle=(e)=>{
        setTab(pre=>pre=parseInt(e.target.value))
        console.log(e.target.value)
    }
    return <Fragment>
            <PriceHeroSection/>
            <PriceTab handle={selectHandle} firstclick={firsthandle} secondclick={secondhandle} thirdclick={thirdhandle} tab={Tab} setTab={setTab}/>
            {Tab===1 && <PricePlanSection/>}
            {Tab===2 && <PriceMoreBusinesses/>}
            {Tab===3 && <PriceSmallBusinesses/>}
            <PriceOrientedSection/>
            <CardList/>
            <CommentCardSection/>
            <BandSection/>
            </Fragment>;
}
 
export default PricePage;