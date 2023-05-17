import React from "react";
import Gallery from "../components/Gallery";
import Nav from "../components/Nav";
import "./Home.css"



const Home = () => {

    return (
        <div className="container">
            <div className="flex-container">
                <div className="navigation">
                    <Nav />
                </div>

                <div className="content">
                    <Gallery />
                   
                </div>
                
                
                
                

            </div>

        </div>
    )
}

export default Home