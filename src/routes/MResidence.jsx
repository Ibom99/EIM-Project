import React from "react";
import Nav from "../components/Nav";
import "./MResidence.css"


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2.8,
      slidesToSlide: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1.8,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

const MResidence = () =>{
return(
    <div className="m-container">
            <div className="m-navigation">
            <Nav />
            </div>

            <div className="m-content">

            <div className="mobile-container">

               <div className="mobile-content">

               <img className="mobile-image" alt="" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979359/M%20Residence/7948798A-D617-4626-98FD-7EA4042AD689_rfwxw8.jpg"/>
               <img className="mobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979366/M%20Residence/51FC7FBC-A9CB-48A3-8392-E7ECD1D33AC1_fc4wrn.jpg" />
               <img className="mobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979356/M%20Residence/F14EEB0C-2789-4FB7-8E02-0AA32F10AF22_bqowpv.jpg" />
               <img className="mobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979351/M%20Residence/34899653-8150-4442-9F04-8076482F3A55_gnkuuu.jpg" />
               <img className="mobile-image" alt="" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979312/M%20Residence/288BE02A-A062-4773-88EA-DE4D4E9AFBC3_hccihg.jpg"/>
               <img className="mobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979372/M%20Residence/A6624A93-A32F-4200-B166-58E5544F59E7_n0xbhz.jpg" />
               <img className="mobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979314/M%20Residence/4C8CCDAA-1D96-4D22-B899-164E86374AF8_gutyjq.jpg" />
               <img className="mobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979416/M%20Residence/CFBFF0D6-0FB4-4264-ABB4-00FD28C8626A_dbyuni.jpg" />
               <img className="mobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979366/M%20Residence/A90718DB-7208-4550-B9B4-D11C8ED9EC5F_e0natc.jpg"
                     />
               <img className="mobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682949982/Home%20Gallery%20Images/IMG-2930_xazgfx.jpg"
                     />
                    <img className="mobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979373/M%20Residence/E04A5AC2-B437-468A-9371-CAC5A21248A3_ywceui.jpg" />
               
               
               <img className="mobile-image" alt="" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979310/M%20Residence/AD6987D1-EDB7-4A5C-B1A4-99237C71E35A_m9e5cr.jpg"/>
               <img className="mobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979311/M%20Residence/2CE7263B-27E6-429F-9AF9-4D17683B22A6_ypg9yd.jpg"/>



               </div>
               </div>
            
<div className="imageSlider">
            <Carousel  responsive={responsive}   keyBoardControl={true}>
                 <div className="items">
                    <img className="image" alt="" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979310/M%20Residence/AD6987D1-EDB7-4A5C-B1A4-99237C71E35A_m9e5cr.jpg"/>
                    </div>

                 <div className="items">
                    <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979311/M%20Residence/2CE7263B-27E6-429F-9AF9-4D17683B22A6_ypg9yd.jpg"/>
                 </div>

                  <div className="items">
                  <img className="image" alt="" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979359/M%20Residence/7948798A-D617-4626-98FD-7EA4042AD689_rfwxw8.jpg"/>

                  </div>

                  <div className="items">
                  <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979366/M%20Residence/51FC7FBC-A9CB-48A3-8392-E7ECD1D33AC1_fc4wrn.jpg" />

                  </div>

                  <div className="items">
                  <img className="image" alt="" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979312/M%20Residence/288BE02A-A062-4773-88EA-DE4D4E9AFBC3_hccihg.jpg"/>

                  </div>

                  <div className="items">
                    <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979314/M%20Residence/4C8CCDAA-1D96-4D22-B899-164E86374AF8_gutyjq.jpg" />
                    
                 </div>

                 <div className="items">
                    <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979372/M%20Residence/A6624A93-A32F-4200-B166-58E5544F59E7_n0xbhz.jpg" />
                    
                 </div>

                 <div className="items">
                    <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979373/M%20Residence/E04A5AC2-B437-468A-9371-CAC5A21248A3_ywceui.jpg" />
                    
                 </div>

                 <div className="items">
                    <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979356/M%20Residence/F14EEB0C-2789-4FB7-8E02-0AA32F10AF22_bqowpv.jpg" />
                    
                 </div>

                 <div className="items">
                    <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979371/M%20Residence/FEC55CF1-B04F-4BDF-8117-F3D101263A52_vj9bcr.jpg"
                     />
                    
                 </div>

                 <div className="items">
                    <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979351/M%20Residence/34899653-8150-4442-9F04-8076482F3A55_gnkuuu.jpg"
                     />
                    
                 </div>

                 <div className="items">
                    <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979416/M%20Residence/CFBFF0D6-0FB4-4264-ABB4-00FD28C8626A_dbyuni.jpg"
                     />
                    
                 </div>
                 
                 <div className="items">
                    <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1682979366/M%20Residence/A90718DB-7208-4550-B9B4-D11C8ED9EC5F_e0natc.jpg"
                     />
                    
                 </div>
</Carousel>

</div>
<h1 className="residence">M Residence<br></br><span className="architect">Studio MKY</span></h1>
            </div>
            

            
        </div>
)
}

export default MResidence
