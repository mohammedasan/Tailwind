import NavBar from "./Components/NavBar"
import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import Social from "./Pages/Social";
import './App.css'

function App() {
 
  return (
    <>
      <NavBar/>
      <div id="home">
        <Home />
      </div>
      <div id="projects">
      <Projects/>
      </div>
      <div id="skill">
        <Skills />
      </div>
      <div>
          <Resume />
        </div>
      <div id="con">
        <Contact/>
      </div>
      <div id="soc">
        <Social/>
      </div>
      </>
  )
}

export default App
