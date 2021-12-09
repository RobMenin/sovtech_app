import React from "react";
import { NavLink } from "react-router-dom";
import homeimg from '../Images/spex.png';
import '../Css/Home.css';
const Home=()=>{
return(
    <>
  <div className="mainSection">
      <div className="contentBox">
<h1>Why I would like to join Sovtech</h1>
<p>I am thrilled to see an opportunity to further my skills and knowledge. My background in front-end, back-end development and user interfaces would make me a great fit for the graduate programme at SovTech. I directly relate to a number of SovTech's spex. I have circled my top 5 most relatable Spex as seen to the right.</p>
     <div className="btnBox">
         <div className="btn">
         <NavLink to="/about" className="readMore">Read More About Me</NavLink>

         </div>

     </div>
      </div>
<div className="imgContainer">
    <img src={homeimg} alt="home"/>
</div>
  </div>
    </>
)
}
export default Home;
