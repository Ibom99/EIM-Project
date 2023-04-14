import React from "react";
import Nav from "../components/Nav";
import "./About.css"
import profile from "/src/assets/images/profile.jpg"

const About = () => {
    return(
<div className="about-container">

<div className="navigation">
        <Nav />
        </div>

        <div className="about-content">
        
        <img className="profile" src={profile} />
        <h2>Lead Photographer & Creative Director</h2>
        </div>
</div>
    )
    
}

export default About 