import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthLogout } from "../../redux/actions/Auth";
import Tickitz1 from '../../assets/images/Tickitz1.svg'
import './style.css'


const Navbar = () => {
  const { data, isLogin } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    if (isLogin === false) {
      navigate('/login', { replace: true })
    }
  }, [isLogin, navigate])

  // const menuToggle = (e) => {
  //   e.preventDefault()
  // }

  if (isLogin) {
    return (
      <>
        <nav className="navbar-home">
          <div className="navbar-left ">
            <div className="navbar-left-content ">
              <Link to='/' className="spacing-navbar">
                <img src={Tickitz1} alt="" className="img-fluid tickitz" />
              </Link>
              <Link to="#" className="spacing-navbar d-none d-md-inline-block">Home</Link>
              <Link to="#" className="spacing-navbar d-none d-md-inline-block">List Movie</Link>
            </div>
          </div>
          <div className="navbar-right-login">
            <button className="navigation-button-icon-mobile d-md-none" onClick="menuNavigation()" value="">
              <i className="bi bi-text-right fs-1 d-block d-md-none"></i>
            </button>
            <Link to="#navigation-menu" data-bs-toggle="collapse" href="#navigation-menu" aria-expanded="false"
              aria-controls="navigation-menu"></Link>
            <div className="form-search d-none d-md-inline-flex">
              <input action="text" placeholder="Search..." className="form-search-text">
              </input>
              <i className="bi bi-search"></i>
            </div>
            <div className="wrapper-dropdown-profile">
              <div className="wrapper-photo-profile dropdown dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={data.photo} alt='profile' className="photo-profile" />
              </div>
              <ul className="dropdown-profile dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link to='/profile' class="dropdown-item">Profile</Link></li>
                <li className="dropdown-item" onClick={() => {
                  dispatch(AuthLogout())
                }}>Log Out</li>
              </ul>
            </div>
          </div>
        </nav>
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
  } else {
    return (
      <>
        <nav className="navbar-home">
          <div className="navbar-left ">
            <div className="navbar-left-content ">
              <Link to='/' className="spacing-navbar">
                <img src={Tickitz1} alt="" className="img-fluid tickitz" />
              </Link>
              <Link to="#" className="spacing-navbar d-none d-md-inline-block">Home</Link>
              <Link to="#" className="spacing-navbar d-none d-md-inline-block">List Movie</Link>
            </div>
          </div>
          <div className="navbar-right">
            <button className="navigation-button-icon-mobile d-md-none" onClick="menuNavigation()" value="">
              <i className="bi bi-text-right fs-1 d-block d-md-none"></i>
            </button>
            <Link to="#navigation-menu" data-bs-toggle="collapse" href="#navigation-menu" aria-expanded="false"
              aria-controls="navigation-menu"></Link>
            <Link to='/login' className=" mx-3 d-none d-md-inline-flex text-center btn-nav">
              <input className="btn-signup btn-lg" type="button" value="Sign Up" />
            </Link>
          </div>
        </nav>
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
}
export default Navbar