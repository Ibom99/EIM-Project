import React from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/images/blackLogo.png"
// import goldLogo from "/src/assets/images/Logo.png"
import "./Nav.css"
import { useState } from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { MdClose } from "react-icons/md";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenTwo, setIsOpenTwo] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [isActiveTwo, setIsActiveTwo] = useState(false)
   
    const dropDown = () =>{
        setIsOpen(!isOpen)
    }

    const dropDownTwo = () => {
        setIsOpenTwo(!isOpenTwo)
    }
    return(
        <div className="nav">

            <div className="logo-container">
            <Link to="/" className="home-link"><img  onMouseOver={e => e.currentTarget.src = "/src/assets/images/Logo.png" } className="logo" onMouseOut={e => e.target.src = "/src/assets/images/blackLogo.png"} src={logo} alt="Ebony and Ivory Logo" /></Link>
            </div>

            <div className="description">
            <p>ARCHITECTURAL & INTERIOR PHOTOGRAPHY</p>
            </div>

            <div className="socials">
                <div className="instagram">
                <a href="https://instagram.com/ebonyandivorymedia?igshid=YmMyMTA2M2Y=" target="_blank"><FaInstagram /></a>
                </div>
                <div className="linkedin">
                   <a href="https://www.linkedin.com/company/ebony-and-ivory-media" target="_blank"> <FaLinkedinIn /> </a>

                </div>
                <div className="facebook">
                <a href="https://m.facebook.com/ebonyandivorymedia?wtsid=rdr_02ixBo5W5yVYfSX2M" target="_blank"><FaFacebookF /></a>
                </div>
            </div>
      

            <div className="menu">
            <button className="dropdown-btn" onClick={() => {setIsActive(!isActive); dropDown()}}>Residential <span className="plus-icon">{isActive ? <MdClose /> :<BsPlusLg /> }</span></button>
            {isOpen && (
              <ul className="sub-menu">
              {/* <Link to="/Rudolf" className="rudolf-link"><li>Project Rudolf</li></Link> */}
              <Link to="/MResidence" className="mresidence-link" ><li>M Residence</li></Link>
              <li>ONA Residence</li>
              <li>Project V</li>
    
          </ul>
            )}

            <div className="sub-menu2">
<button className="dropdown-btn" onClick={() => {setIsActiveTwo(!isActiveTwo); dropDownTwo()}}>Office Interiors <span className="plus-icon">{isActiveTwo ? <MdClose /> :<BsPlusLg /> }</span></button>
            {isOpenTwo && (
              <ul className="sub-menu">
              
              <li>Project X</li>
          </ul>
            )}
            </div>
            <Link to="/About" className="about-link"><p className="about">About</p></Link>
            <p className="contact">Contact</p>

            
            
            </div>
            <p className="copyright">Developed <b>by </b>Esther Ibom 2023 &copy;  <br></br> All content Copyright &copy; 2023 Ebony & Ivory Media </p>
        </div>
    )
}

export default Nav