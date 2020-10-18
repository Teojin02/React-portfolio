import React from "react";
import Header from "./Header";
import Project from "./Project";
import Footer from "./Footer";
function Portfolio() {
  return (
    <div style={{color:"white"}}>
      <Header/>
      <h1>Portfolio</h1>
      <div>
        <Project/>
        <Footer/>
      </div>
        

    </div>
  );
}

export default Portfolio;
