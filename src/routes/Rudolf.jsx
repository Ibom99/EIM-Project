import React from "react";
import Nav from "../components/Nav";
import "./Rudolf.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2.8,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1.8,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Rudolf = () => {
  return (
    <div className="rudolf-container">
      <div className="rudolf-navigation">
        <Nav />
      </div>
      <div className="rudolf-content">
        {/* mobile view of gallery */}
        <div className="rudolfmobile-container">
          <div className="m-description">
            <p className="mobile-title">Project Rudolf</p>
            <p className="mobile-arc">Chrystal White Architects</p>
          </div>

          <div className="rudolfmobile-content">
            <img
              className="rudolfmobile-image"
              alt=""
              src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689010327/Rudolf/IMG_5926-Edit_IG_yuir5o.jpg"
            />

            <img
              className="rudolfmobile-image"
              alt=""
              src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689010541/Rudolf/IMG_6059-Edit_IG_w6sawa.jpg"
            />

            <img
              className="rudolfmobile-image"
              alt=""
              src="https://res.cloudinary.com/dzzohccd8/image/upload/v1685216763/Rudolf/IMG_6992-Edit_IG_tclqiy.jpg"
            />

            <img
              className="rudolfmobile-image"
              alt=""
              src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689010327/Rudolf/IMG_6017-Edit_IG_cabdik.jpg"
            />
            <img
              className="rudolfmobile-image"
              alt=""
              src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689009139/Rudolf/IMG_6029-Edit_IG_irklyn.jpg"
            />
            <img
              className="rudolfmobile-image"
              alt=""
              src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689009011/Rudolf/IMG_6167-Edit_IG_ydoubr.jpg"
            />
            <img
              className="rudolfmobile-image"
              alt=""
              src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689009012/Rudolf/IMG_6444-Edit_IG_dq0tbp.jpg"
            />
            <img
              className="rudolfmobile-image"
              alt=""
              src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689009013/Rudolf/IMG_6913-Edit_IG_rrg5lo.jpg"
            />
            <img
              className="rudolfmobile-image"
              alt=""
              src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689009012/Rudolf/IMG_6881-Edit_IG_wy5kug.jpg"
            />
            <img
              className="rudolfmobile-image"
              alt=""
              src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689015745/Rudolf/IMG_6898-Edit_IG_akx0yc.jpg"
            />
            <img
              className="rudolfmobile-image"
              alt=""
              src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689009012/Rudolf/IMG_6577-Edit_IG_zgyjbj.jpg"
            />
            <img
              className="rudolfmobile-image"
              alt=""
              src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689015745/Rudolf/IMG_6647-Edit_IG_mmwrgy.jpg"
            />
          </div>
        </div>

        <div className="imageSlider">
          <Carousel responsive={responsive} keyBoardControl={true}>
            <div className="items">
              <img
                className="image"
                alt=""
                src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689010327/Rudolf/IMG_5926-Edit_IG_yuir5o.jpg"
              />
            </div>

            <div className="items">
              <img
                className="image"
                alt=""
                src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689010541/Rudolf/IMG_6059-Edit_IG_w6sawa.jpg"
              />
            </div>
            <div className="items">
              <img
                className="image"
                alt=""
                src="https://res.cloudinary.com/dzzohccd8/image/upload/v1685216763/Rudolf/IMG_6992-Edit_IG_tclqiy.jpg"
              />
            </div>

            <div className="items">
              <img
                className="image"
                src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689009139/Rudolf/IMG_6029-Edit_IG_irklyn.jpg"
              />
            </div>

            <div className="items">
              <img
                className="image"
                alt=""
                src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689009012/Rudolf/IMG_6444-Edit_IG_dq0tbp.jpg"
              />
            </div>

            <div className="items">
              <img
                className="image"
                src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689009012/Rudolf/IMG_6881-Edit_IG_wy5kug.jpg"
              />
            </div>

            <div className="items">
              <img
                className="image"
                alt=""
                src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689009012/Rudolf/IMG_6577-Edit_IG_zgyjbj.jpg"
              />
            </div>

            <div className="items">
              <img
                className="image"
                src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689009011/Rudolf/IMG_6691-Edit_IG_pq9s7c.jpg"
              />
            </div>

            <div className="items">
              <img
                className="image"
                src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689009139/Rudolf/IMG_5597-Edit_IG_yr37kx.jpg"
              />
            </div>

            <div className="items">
              <img
                className="image"
                src="https://res.cloudinary.com/dzzohccd8/image/upload/v1689010327/Rudolf/IMG_5666-Edit_IG_fq3hga.jpg"
              />
            </div>
          </Carousel>
        </div>
        <h1 className="residence">
          Project Rudolf<br></br>
          <span className="architect">Chrystal White Architects</span>
        </h1>
      </div>
    </div>
  );
};
export default Rudolf;
