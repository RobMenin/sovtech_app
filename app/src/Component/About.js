import React from "react";
import { NavLink } from "react-router-dom";
import aboutimg from '../Images/whatido.jpg';
import '../Css/About.css';
const About=()=>{
return(
    <>
     <div className="mainSection">
      <div className="contentBox">
<h1>Some information about me...</h1>
<p>I bring fresh and innovative ideas to teams, and I am always excited about solving a difficult problem. I am persistent, curious, and obsessive to get a solution to a problem. I have a background in and am passionate about Information Systems and I enjoy software engineering, UI/UX design, information security and digitization of businesses and technology in general. I enjoy the beach, playing soccer, gaming, hiking, traveling and physical activity.</p>
     <div className="btnBox">
         <div className="btn">
         <NavLink to="/education" className="readMore">See How I Got Here</NavLink>

         </div>

     </div>
      </div>
     <div className="imgContainer">
    <img src={aboutimg} alt="about"/>
</div>
  </div>
      
    </>
)
}
export default About;