import React from "react";
import Nav from "../components/Nav";
import "./ONAResidence.css"

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

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


const ONAResidence = () =>{
return(
    <div className="ona-container">
        <div className="navigation">
            <Nav />
            </div>

            <div className="ona-content">

            <div className="imageSlider">
            <Carousel  responsive={responsive}   keyBoardControl={true}>
                 <div className="items">
                    <img className="image" alt="" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1683446038/ONA%20Residence/Ona_Interior--8_nmcp0y.jpg" />
                    </div>

                 <div className="items">
                    <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1683446032/ONA%20Residence/Ona_Interior--9_rhsv51.jpg"/>
                 </div>

                  <div className="items">
                  <img className="image" alt="" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1683446043/ONA%20Residence/Ona_Interior--6_1_myokfo.jpg"/>

                  </div>

                  <div className="items">
                  <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1683446024/ONA%20Residence/Ona_Interior--10_umi42w.jpg" />

                  </div>

                  <div className="items">
                  <img className="image" alt="" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1683446039/ONA%20Residence/Ona_Interior--7_vwiwuk.jpg"/>

                  </div>

                   <div className="items">
                    <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1683446042/ONA%20Residence/Ona_Interior--5_cjr5tm.jpg" />
                    
                 </div>

                  <div className="items">
                    <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1683446025/ONA%20Residence/onaresidencebedroom_cggywu.jpg" />
                    
                 </div>
{/*
                 <div className="items">
                    <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1683445974/ONA%20Residence/Ona_Interior--2_aclnz9.jpg" />
                    
                 </div>

                 <div className="items">
                    <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1683446039/ONA%20Residence/Ona_Interior--3_1_el3vi6.jpg" />
                    
                 </div> */}

                 {/*<div className="items">
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
                    
                 </div> */}
</Carousel>

            </div>
<h1 className="residence">ONA Residence</h1>
    </div>
    </div>
)
}

export default ONAResidence