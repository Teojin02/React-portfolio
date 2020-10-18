import React from "react";
import Header from "./Header";
import Footer from "./Footer";
function Contact(props) {
  return (
    <div style={{color:"white"}}>
      <Header/>
      <h1>Contact Page</h1>
       <div style={{fontSize:"25px", textAlign:"center"}}>Teojin Celestino</div>
      <br/>

       <div style={{fontSize:"25px", textAlign:"center"}}><b>Email:</b>
          <div>
         <a href="mailto:Teojincelestino@gmail.com">Teojincelestino@gmail.com</a>
          </div>
       </div>
        <br/>

        <div style={{fontSize:"25px", textAlign:"center"}}><b>Github:</b>
            <div>
         <a href="https://github.com/Teojin02">Github</a>
            </div>
       </div>
        <br/>

        <div style={{fontSize:"25px", textAlign:"center"}}><b>Linkedln:</b>
              <div>
         <a href="www.linkedin.com/in/teojin-celestino-4632571b3">Linkedin</a>
              </div>
       </div>
        <br/>

        <div style={{fontSize:"25px", textAlign:"center"}}><b>Resume</b>
            <div>
         <a href="https://docs.google.com/document/d/1XNh0PbqmdsOUg2f9uJB-7LHWHept0o_pTafawoA6sOA/edit?usp=sharing">Resume</a>
            </div>
       </div>
       
      
      <Footer/>
    </div>
  );
}

export default Contact;
