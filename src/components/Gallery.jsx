import React, { useEffect, useState } from "react";
import "./Gallery.css"
import galleryData from "../assets/data/galleryData";

const Gallery = () => {
    const [currentState, setCurrentState] = useState(0) 
    
      useEffect(() => {
        const timer = setTimeout(()=>{
            if(currentState===10){
                setCurrentState(0)
            }else{
                setCurrentState(currentState + 1)
            }
        }, 5000)
        return () => clearTimeout(timer)
      }, [currentState])

    const bgImageStyle = {
        backgroundImage: `url(${galleryData[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%'
    }

    // const goToNext = (currentState) =>{
    //     setCurrentState(currentState)
    // }

    return(
        <div className="gallery-container">
            <div className="background-image" style={bgImageStyle}></div>
           <div className="info-text">
            {/* <div> */}
                <h1 className="title">{galleryData[currentState].title}</h1>
                {/* <p>{galleryData[currentState].body}</p> */}
            {/* </div >
           <div className="carousel">
            {
                rudolfData.map((galleryData,currentState) => (
                    <span key={currentState} onClick={() => goToNext(currentState) }></span>
                ))
            }
           </div> */}
            </div>

        </div>

    )
}

export default Gallery