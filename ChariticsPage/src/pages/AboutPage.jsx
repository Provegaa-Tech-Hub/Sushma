import { useState } from "react";
import Navbar from "../Navbar";

function About() {


  const [darkmode , setDarkmode]=useState(false);

  function toggleTheme(){
    setDarkmode(!darkmode);

  }
  return (
  <section className={darkmode? "dark-mode":"light-mode"}>
   
     <div className="about-bg-img">
        <div className="about-container">
            <h1>About Us</h1>
        </div>
    </div>
    <Navbar/>
     <div >
        <button className="toggle-btn"
        onClick={toggleTheme}>
         {darkmode ? "Light Mode":"Dark Mode"}
        </button>
    </div>
  </section>
    
   
  );
}

export default About;