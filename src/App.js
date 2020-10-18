import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Skills from "./components/pages/Skills";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import "./App.css";
import AboutMe from "./components/pages/AboutMe";
function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/Skills" component={Skills} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
