import React from "react";
import Nav from "../components/Nav";
import "./Projectv.css"

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

const Projectv = () => {
    return(
        <div className="v-container">

            <div className="v-navigation">
            <Nav />
            </div>

            <div className="v-content">
           
            <div className="vmobile-container">

<div className="vmobile-content">

<img className="vmobile-image" alt="" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684425754/Project%20V/Vulcan_suite_IDC--11_f5jxpk.jpg"/>
<img className="vmobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684425756/Project%20V/Vulcan_suite_IDC--10_aobqf9.jpg" />
<img className="vmobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684425770/Project%20V/Vulcan_suite_IDC--8_haosfr.jpg" />
<img className="vmobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684425762/Project%20V/Vulcan_suite_IDC--9_qrzawy.jpg" />
<img className="vmobile-image" alt="" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684425779/Project%20V/Vulcan_suite_IDC--3_w3k5bh.jpg"/>
<img className="vmobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684425777/Project%20V/Vulcan_suite_IDC--4_qntjas.jpg" />
<img className="vmobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684425768/Project%20V/Vulcan_suite_IDC--5_vvtuzj.jpg" />
<img className="vmobile-image" src="" />
<img className="vmobile-image" src=""
      />
{/* <img className="vmobile-image" src=""
      />
     <img className="vmobile-image" src="" />


<img className="vmobile-image" alt="" src=""/>
<img className="vmobile-image" src=""/> */}



</div>
</div>

<div className="imageSlider">
            <Carousel  responsive={responsive}   keyBoardControl={true}>
                 <div className="items">
                    <img className="image" alt="" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684425754/Project%20V/Vulcan_suite_IDC--11_f5jxpk.jpg"/>
                    </div>

                 <div className="items">
                    <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684425762/Project%20V/Vulcan_suite_IDC--9_qrzawy.jpg"/>
                 </div>

                  <div className="items">
                  <img className="image" alt="" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684425770/Project%20V/Vulcan_suite_IDC--8_haosfr.jpg"/>

                  </div>

                  <div className="items">
                  <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684425768/Project%20V/Vulcan_suite_IDC--5_vvtuzj.jpg" />

                  </div>

                  <div className="items">
                  <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684425779/Project%20V/Vulcan_suite_IDC--3_w3k5bh.jpg" />

                  </div>

                 
                
</Carousel>

</div>
<h1 className="residence">Project V<br></br><span className="architect">Inter-Design Concepts</span></h1>
          
            
            
            
            
            
            
            
            </div>
            
        </div>
    )

}

export default Projectv