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
        <p className="aboutus">At Ebony & Ivory Media, we are more than just a photography company. We are a passionate team of design enthusiasts driven by a powerful vision - to transform the state of design and architecture in Nigeria through captivating images. Our mission is to uplift African design and make it mainstream, showcasing the strength, beauty, and creativity found within the built environment.

<br></br>What sets us apart is our deep-rooted desire to showcase the remarkable talent and ingenuity that exists within Nigeria and Africa as a whole. We firmly believe that our rich cultural heritage, combined with contemporary design aesthetics, has the potential to make a significant impact on the global design stage.

Through our lens, we capture the essence of structures, both big and small, weaving together the narrative of African design and architecture. We strive to bring attention to the intricate details, the unique characteristics, and the awe-inspiring aesthetics that define each project we undertake.

Our name, Ebony & Ivory Media, pays homage to the powerful materials found in Africa, symbolising strength and beauty. This symbolism transcends into our work as we aim to showcase our strength as Africans in design and highlight the beauty that lies within every intricate detail.

By collaborating with architects, developers, builders, and interior designers, we aim to promote and celebrate their remarkable work. Through our high-quality professional photography, we elevate their projects, giving them the visibility they deserve on both local and international platforms.

But our vision extends beyond individual projects. We are passionate about driving a broader cultural shift, where African design is recognized, appreciated, and celebrated on a global scale. We aspire to make African design a mainstream influence, inspiring future generations and creating opportunities for African designers to shine.
</p>
        <img className="profile" src={profile} />
        <h2 className="about-title">Lead Photographer & Creative Director</h2>
        <p className="abouttibby">About Tibby Omoare


Tibby Omoare is the talented lead photographer behind Ebony & Ivory Media, bringing a unique blend of expertise in architecture and design to the world of photography. With over 10 years of experience capturing breathtaking images, Tibby's passion for both art forms shines through in every project undertaken.

Born and raised around Africa, Tibby developed a deep appreciation for the rich architectural heritage and design diversity found within the continent. This early fascination led to a pursuit of knowledge in the field of architecture, from the Savannah College of Art and Design (SCAD).

Her understanding of architectural principles, coupled with a keen eye for detail, allows for a distinctive approach to photography. Having honed her craft over the years, Tibby has built a reputation for delivering exceptional results and consistently exceeding client expectations.
</p>
        </div>
</div>
    )
    
}

export default About 