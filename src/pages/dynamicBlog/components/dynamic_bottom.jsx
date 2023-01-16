import { Link } from "react-router-dom";
import Button from "../../../Components/Button"
import asterisk from "../../../Assets/Image/asterisk.svg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DynamicBottomSection = ({img,text}) => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);
    return ( 
        <div className="Bottom_Fill">
         <div className="Container">
         <div data-aos="fade-up" className="Left_Box">
                <div className="border_line"></div>
                <h5>4 mins, 30 secs read time</h5>
                <p>{text}</p>
                <p>Jay initially learned about Rippling as a prospective customer through a sales demo. His enthusiasm for both the product and the company culture led him to stay in touch with Sales Team Manager Ramon Garcia, get hired as a technical account manager and eventually transition to his current role as PEO Technical Account Manager.</p>
                <p>We caught up with Jay to hear more about his story and learn how the Talent Makers at Rippling made these somewhat unlikely career moves possible.</p>
                <h4>Greenhouse: What is your current role at Rippling?</h4>
                <p>Jay: I’m a Technical Account Manager, with a specialty on our PEO clients. My focus is on making sure that Rippling reduces admin work for our clients by enabling them to run their HR processes more efficiently. When I joined in March 2021, we had around 600 employees and now we’re just over 1,500.</p>
                <h4>Greenhouse: The story of how you ended up at Rippling is pretty unconventional. Can you walk us through it?</h4>
                <p>Jay: I was previously an HR manager at a hazmat shipping compliance and consulting company in Chicago. One of my big focus areas was leveraging HR technology to improve processes. I didn’t want to have to spend ten hours on a spreadsheet when I could use an HR system to do the intake of all my data and just have it spit out all of the reports and data for me. I really wanted to have a more strategic impact and I leaned a lot on technology for that.</p>
                <p>When Ramon Garcia reached out about doing a demo of Rippling, I took the call – even though I’d just implemented an HR system the previous year. And while we weren’t in a position to switch to Rippling, I was really impressed by the product and the company.</p>
                <h4>Greenhouse: What was it about Rippling that stood out to you?</h4>
                <p>Jay: I felt like there was this parallel between the Rippling mission – to free smart people to work on hard problems – and what I had been doing in my HR career, which was figuring out how to leverage technology to work on exciting problems.</p>
                <div className="Qoute_Box">
                    <q>This company is the embodiment of what I wanted to be doing as an HR professional.</q>
                </div>
                <p>As I went through the demo, I was convinced that they must have some really smart people at Rippling to have such a strong pulse on this aspect of HR work and how to make it better. They’re in tune with the folks that they’re offering it to. I got the feeling that it must be a really cool place to work because Ramon genuinely seemed like he enjoyed what he was putting in front of me and what the company was working on.</p>
                <p>There were a few roles I was interested in but the timing didn’t quite work out. Over the course of about a year and a half, I’d reach out to Ramon every time I came across a role that looked interesting. And he’d give me a really thoughtful and insightful answer and connect me to the hiring manager.</p>
                <h4>Greenhouse: And once you found a role that you wanted to apply for?</h4>
                <p>Jay: It was really efficient. The application process itself took like 30 seconds because we use <Link>Greenhouse</Link>, so it actually does not require you to re-input all of the things that are on your resume, which I’m a big fan of. I’d like to never have to key in resume details ever again.</p>
                <h4>Greenhouse: Your first role at Rippling was as a technical account manager, which was a big transition from your previous HR roles. How did Rippling approach this?</h4>
                <p>Jay: One thing I really appreciated throughout the recruitment process was that it was evident to me that hiring manager Kim Glatzer and the rest of the team were honing in on transferable skills. And because they took that approach, I was able to make a case for how I felt I could make it work. Then Kim was able to take what I brought to the table and marry it with her process for getting me acclimated to the role. It ended up working really well.</p>
                <h4>Greenhouse: Are there any lessons from your experience you could share with other Talent Makers?</h4>
                <p>Jay: Everybody is a recruiter. It really isn’t just the sourcers or recruiters that are doing that function – as important as they are to getting talent in the door. Recognize that everyone can create a positive impression of your company, and this can build over time. It wasn’t just my initial conversation with Ramon, but the fact that he was always receptive when I’d check in with him about a different role I was interested in.</p>
                <p>And if you’re going to open up your recruiting and truly consider transferability of skills, you have to be a great manager and leader to actually make that work. You have to make the effort to find the commonality in all the different experiences, backgrounds and companies that people are coming from.</p>
                <small>Feel inspired by Jay’s story? Learn how you can be a great Talent Maker, here.</small>
                <Button name="Learn now" />
                <div className="Mobile_Banner">
                <div className="Form_Box">
                <h4>Subscribe to our newsletter</h4>
                <p>Our bi-weekly newsletter full of inspiration, podcasts, trends and news.</p>
                <label htmlFor="mail"> <img src={asterisk} alt="asterisk" /> Email address</label>
                <input type="email" id="mail"/>
                <Button name="Subscribe"/>
                </div>
                <div className="list_box">
                    <h6>Filed under:</h6>
                    <ul>
                        <li>
                            <Link>Company culture</Link>
                        </li>
                        <li>
                            <Link>Talent strategy</Link>
                        </li>
                    </ul>
                    <small>December 13, 2022</small>
                </div>
                </div>
                <div className="bottom_box">
                    <img src={img} alt="avatar" />
                    <p> <span>Melissa Suzuno</span> is a freelance writer and former Content Marketing Manager at Greenhouse. Melissa previously built out the content marketing programs at Parklet (an onboarding and employee experience solution) and AfterCollege (a job search resource for recent grads), so she's made it a bit of a habit to help people get excited about and invested in their work. Find Melissa on <Link className="underline_link">Twitter</Link> and <Link className="underline_link">LinkedIn</Link>.</p>
                </div>
            </div>
            <div className="Right_Box">
                <div data-aos="fade-up" className="list_box">
                    <h6>Filed under:</h6>
                    <ul>
                        <li>
                            <Link>Company culture</Link>
                        </li>
                        <li>
                            <Link>Talent strategy</Link>
                        </li>
                    </ul>
                    <small>December 13, 2022</small>
                </div>
            </div>
         </div>
        </div>
     );
}
 
export default DynamicBottomSection;