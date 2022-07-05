import React from "react";
import { Link } from "react-router-dom";
import Tickitz1 from '../../assets/images/Tickitz1.svg'
import Profile from '../../assets/images/Photo.png'
import './style.css'

const Navbar = () => {
  return (
    <>
      <div className="wrapper-navbar-shadow">
        <div className="navbar-left ">
          <div className="navbar-left-content ">
            <Link to="#" className="spacing-navbar">
              <img src={`${Tickitz1}`} alt="" className="img-fluid tickitz" />
            </Link>
            <Link to="#" className="spacing-navbar d-none d-md-inline-block">Home</Link>
            <Link to="#" className="spacing-navbar d-none d-md-inline-block">List Movie</Link>
          </div>
        </div>
        <div className="navbar-right">
          <button className="navigation-button-icon-mobile d-md-none" onclick="menuNavigation()">
            <i className="bi bi-text-right fs-1 d-block d-md-none"></i>
          </button>
          <Link to="#navigation-menu" data-bs-toggle="collapse" href="#navigation-menu" aria-expanded="false"
            aria-controls="navigation-menu"></Link>
          <div className="form-search d-none d-md-inline-flex">
            <i className="bi bi-search"></i>
            <input action="text" placeholder="Search..." className="form-search-text">
            </input>
          </div>
          <Link to="/profile" className="wrapper-photo-profile-navbar d-none d-md-inline-flex">
            <img src={`${Profile}`} alt="profile" className="photo-profile" /> </Link>
        </div>
      </div>
      <div className="navbar-mobile d-md-none p-4 position-absolute text-center" id="menu">
        <div className="navbar-mobile-content">
          <Link to="#" className="navbar-mobile-content-text d-block d-md-none">Home</Link>
        </div>
        <div className="navbar-mobile-content">
          <Link to="#" className="navbar-mobile-content-text d-block d-md-none">List Movie</Link>
        </div>
        <p className="text-muted">&copy; 2021 Tickitz. All Rights Reserved</p>
      </div>
    </>
  )
}
export default Navbar