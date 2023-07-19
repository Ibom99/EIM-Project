import React from "react";
import Nav from "../components/Nav";
import "./About.css";
// import profile from "/src/assets/images/profile.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="navigation">
        <Nav />
      </div>

      <div className="about-content">
        <div className="aboutus">
                <img className="about-img" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689017007/Rudolf/IMG_6413-Edit_IG_eag368.jpg" />
        <p className="aboutus-text">
          <h1 className="about-title"> <em>Our deep rooted desire is to showcase the </em>REMARKABLE TALENT & INGENUITY that exists within NIGERIA & AFRICA </h1>
          <p className="sentence">
          At Ebony & Ivory Media, we are more than just a photography company.
          We are a passionate team of design enthusiasts driven by a powerful
          vision - to transform the state of design and architecture in Nigeria
          through captivating images.
          </p>
          <p className="sentence">
          Our mission is to uplift African design
          and make it mainstream, showcasing the strength, beauty, and
          creativity found within the built environment.
           We firmly believe that our rich cultural heritage,
          combined with contemporary design aesthetics, has the potential to
          make a significant impact on the global design stage.
          </p> 
          <p className="sentence">Through our
          lens, we capture the essence of structures, both big and small,
          weaving together the narrative of African design and architecture.  By collaborating with architects,
          developers, builders, and interior designers, we aim to promote and
          celebrate their remarkable work. Through our high-quality professional
          photography, we elevate their projects, giving them the visibility
          they deserve on both local and international platforms.
       
          </p> 
          <p className="sentence">We aspire to make
          African design a mainstream influence, inspiring future generations
          and creating opportunities for African designers to shine.
          </p>
        </p>
        
        </div>
        <div className="clients-container">
          
          <h1 className="client-title">SOME BRANDS  WE WORKED WITH </h1>
          
          
            <div className="logo-container">
            <img  className="client-logo" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689795220/interdesign_concept_kafebj.jpg"/>
            <img className="client-logo"  src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689795220/Crystal_White_logo_d6srmo.png" />
            <img className="client-logo"  src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689795220/spazio-ideale_logo_jzvegb.png" />
            
            </div>

        

        </div>

        <div className="profile-container">
        <div className="profile-text">
        <h1 className="profile-title">Lead Photographer & Creative Director</h1>
        <p className="abouttibby">
        <p className="sentence">
          Tibby Omoare is the talented lead photographer
          behind Ebony & Ivory Media, bringing a unique blend of expertise in
          architecture and design to the world of photography. With over 10
          years of experience capturing breathtaking images, Tibby's passion for
          both art forms shines through in every project undertaken.</p> 
          <p className="sentence">Born and
          raised around Africa, Tibby developed a deep appreciation for the rich
          architectural heritage and design diversity found within the
          continent. This early fascination led to a pursuit of knowledge in the
          field of architecture, from the Savannah College of Art and Design
          (SCAD).</p>
          <p className="sentence"> Her understanding of architectural principles, coupled with a
          keen eye for detail, allows for a distinctive approach to photography.
          Having honed her craft over the years, Tibby has built a reputation
          for delivering exceptional results and consistently exceeding client
          expectations.
          </p>
        </p>
        </div>
        
        <img className="profile" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689599744/IMG-5326_1_livdwx.jpg" />
        </div>
        
      </div>
    </div>
  );
};

export default About;
