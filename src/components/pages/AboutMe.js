import React from "react";
import teo from  "../pages/Images/teo.jpg";
import Header from "./Header";
import Footer from "./Footer"

function AboutMe() {
  return (
    <div style={{textAlign:"center"}}>
      <Header/>
      <img src={teo} alt="Picture of teo" style={{height:"250px", margin:"10px"}}/>
      <p style={{color:"white", fontSize:"35px", display:"inline-flex" }}>I am a full stack developer. <br/>I like learning about the frontend development 
      and <br/> also like to to learn new skills in programming.
      </p>
    <Footer/>
    </div>
  );
}

export default AboutMe;
