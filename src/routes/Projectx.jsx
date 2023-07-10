import React from "react";
import Nav from "../components/Nav";
import "./Projectx.css"

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


const Projectx = () => {
    return(
        <div className="x-container">
            
            <div className="x-navigation">
            <Nav />
            </div>

            <div className="x-content">
            <div className="xmobile-container">
            <div className="m-description">
       
       <p className="mobile-title">Project X</p>
       <p className="mobile-arc">Chrystal White Architects</p>
       
     </div>
<div className="xmobile-content">

<img className="xmobile-image" alt="" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427381/Project%20X/CWA-NAPIMS-Interior--22_vhls9b.jpg"/>
<img className="xmobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427344/Project%20X/CWA-NAPIMS-Interior--13_n9kgvz.jpg" />
<img className="xmobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427344/Project%20X/CWA-NAPIMS-Interior--10_c9fz5b.jpg" />
<img className="xmobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427321/Project%20X/CWA_NAPIMS_Interior-51_qqsjz1.jpg" />
<img className="xmobile-image" alt="" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427319/Project%20X/CWA-NAPIMS_Interior-8590_j5u6h3.jpg"/>
<img className="xmobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427320/Project%20X/CWA-NAPIMS_Interior--2_biapzh.jpg" />
<img className="xmobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427368/Project%20X/untitled--For_Web-2_mlurbb.jpg" />
<img className="xmobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427362/Project%20X/CWA-NAPIMS-Interior--3_uuhrxl.jpg" />
<img className="xmobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427355/Project%20X/untitled--For_Web-4_yb5qvb.jpg"
      />
 <img className="xmobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427325/Project%20X/CWA-NAPIMS-Interior--9_snngde.jpg"
      />
     <img className="xmobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427352/Project%20X/CWA-NAPIMS-Interior--8_ujiuqz.jpg" />

<img className="xmobile-image" alt="" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427380/Project%20X/untitled--4_uvz7ew.jpg"/>

<img className="xmobile-image" alt="" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427362/Project%20X/untitled--5_i1oiy5.jpg"/>
<img className="xmobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427311/Project%20X/CWA-NAPIMS_Interior-_bsdfdx.jpg"/> 
<img className="xmobile-image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427351/Project%20X/CWA-NAPIMS-Interior-2_owqrl5.jpg"/> 



</div>
</div>

<div className="imageSlider">
            <Carousel  responsive={responsive}   keyBoardControl={true}>
                 <div className="items">
                    <img className="image" alt="" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427380/Project%20X/untitled--4_uvz7ew.jpg"/>
                    </div>

                 <div className="items">
                    <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427319/Project%20X/CWA-NAPIMS_Interior-8590_j5u6h3.jpg"/>
                 </div>

                  <div className="items">
                  <img className="image" alt="" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427368/Project%20X/untitled--For_Web-2_mlurbb.jpg"/>

                  </div>

                  <div className="items">
                  <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427362/Project%20X/untitled--5_i1oiy5.jpg" />

                  </div>

                  <div className="items">
                  <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427388/Project%20X/CWA-NAPIMS_Interior--4_s11mcw.jpg" />

                  </div>

                  <div className="items">
                  <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427322/Project%20X/CWA-NAPIMS_Interior--3_mlqno7.jpg" />

                  </div>

                  <div className="items">
                  <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427377/Project%20X/CWA-NAPIMS-Interior-8718_mdizbv.jpg" />

                  </div>

                  <div className="items">
                  <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427344/Project%20X/CWA-NAPIMS-Interior--13_n9kgvz.jpg" />

                  </div>

                  <div className="items">
                  <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427325/Project%20X/CWA-NAPIMS-Interior--9_snngde.jpg" />

                  </div>

                  <div className="items">
                  <img className="image" src="https://res.cloudinary.com/dzzohccd8/image/upload/v1684427344/Project%20X/CWA-NAPIMS-Interior--10_c9fz5b.jpg" />

                  </div>
                
</Carousel>

</div>
<h1 className="residence">Project X<br></br><span className="architect">Chrystal White Architects</span></h1>
          


            </div>

        </div>
    )
}
export default Projectx