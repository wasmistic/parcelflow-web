import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useState } from 'react';
import funnel from "../../../Assets/Svg/funnel_filter.svg"
import dropdown from "../../../Assets/Svg/dropdown.svg"
import { Link } from 'react-router-dom'; 
import chart from "../../../Assets/Image/chart.png"
import eye from "../../../Assets/Image/eye.png"
import stamp from "../../../Assets/Image/stamp.png"
import comment from "./comment"
import ButtonOutline from "../../../Components/Button"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TrendingQuestion = () => {
  useEffect(() => {
    AOS.init({duration:2000});
    AOS.refresh();
  }, []);
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const data = comment;
    return ( 
        <div className="Trending_fill">
            <h3 data-aos="fade-up">Trending questions</h3>
            <div data-aos="fade-up" className="Box">
                <div className="inner_box">
                <label>Sort by:</label>
                <select name="" id="">
                    <option value="1">Top questions</option>
                    <option value="2">Latest Post</option>
                    <option value="3">most recent activity</option>
                </select>
                </div>
                <Button
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    className="btn_img"
                >
                   <img src={funnel} alt="funnel" />
                   <img src={dropdown} alt="dropdown" />
                </Button>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                    'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={handleClose}>All Questions</MenuItem>
                    <MenuItem onClick={handleClose}>Unanswered Questions</MenuItem>
                    <MenuItem onClick={handleClose}>Questions With No Best Answer</MenuItem>
                    <MenuItem onClick={handleClose}>Questions With Best Answer</MenuItem>
                </Menu>
                </div>
               {
                 data.map((data,index)=>
                 <div className="Question_Box">
             <div className="Left">
               <Link>{data.link}</Link>
               <ul>
                 <li>{data.message}</li>
                 <li>{data.comment}</li>
                 <li>{data.date}</li>
               </ul>
             </div>
             <div className="Right_Detail">
                 {data.answered && <div className="Box">
                     <img src={stamp} alt="avatar" />
                     <p className='answer'>{data.answered}</p>
                 </div>}
                 <div className="Box">
                     <img src={eye} alt="avatar" />
                     <p>{data.eye}</p>
                 </div>
                 <div className="Box">
                     <img src={chart} alt="avatar" />
                     <p>{data.chart}</p>
                 </div>
             </div>
         </div>
             )
               }
            <div className="Btn_Outline">
            <ButtonOutline name="view more" />
            </div>
        </div>
     );
}
 
export default TrendingQuestion;