import React from "react";
import Header from "./Header";
import Footer from "./Footer.js";

function skills() {
  return (
    <div>
      <Header/>
      <h1 style={{color:"white"}}>Skills</h1>
      <p>
      <ul style={{color:"white", fontSize:"25px"}}>
        <li>html</li>
        <li>css</li>
        <li>React</li>
        <li>javascript</li>
        <li>Bootstrap</li>
      </ul>
      </p>
      <Footer/>
    </div>
  );
}

export default skills;
