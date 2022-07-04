import React from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css'
import Tickitz1 from '../../assets/images/Tickitz1.svg'
import ebu from '../../assets/images/ebu.svg'
import hiflix from '../../assets/images/hiflix.svg'
import cineone from '../../assets/images/cineone.svg'


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row wrapper-footer">
            <div className="col-sm-4">
              <img src={`${Tickitz1}`} alt="Tickitz" className="sub-menu-footer" />
              <div className="text-muted text-footer-mobile">
                Stop waiting in line. Buy tickets conveniently, watch movies quietly.
              </div>
            </div>
            <div className="col-sm-2">
              <h6 className="fw-bold sub-menu-footer">Explore</h6>
              <div className="row text-footer-explore">
                <Link to='/home' className="text-muted text-decoration-none text-footer ">Home</Link>
                <Link to='/movies' className="text-muted text-decoration-none text-footer ">List Movie</Link>
              </div>
            </div>
            <div className="col-sm-3">
              <h6 className="fw-bold sub-menu-footer ">Our Sponsor</h6>
              <div className="sub-menu-footer-sponsor ">
                <img src={`${ebu}`} alt="ebu" className=" logo-sponsor-img" />
                <img src={`${cineone}`} alt="cineone" className=" logo-sponsor-img" />
                <img src={`${hiflix}`} alt="hiflix" className=" logo-sponsor-img" />
              </div>
            </div>
            <div className="col-sm-3 wrapper-sns">
              <h6 className="fw-bold sub-menu-footer">Follow Us</h6>
              <div className="icons-mobile">
                <div className="col col-icons">
                  <i className="bi bi-facebook"></i>
                  <p className='text-muted'>Tickitz Cinema id</p>
                </div>
                <div className="col col-icons">
                  <i className="bi bi-instagram"></i>
                  <p className='text-muted'>tickitz.id</p>
                </div>
                <div className="col col-icons">
                  <i className="bi bi-twitter"></i>
                  <p className='text-muted'>tickitz.id</p>
                </div>
                <div className="col col-icons">
                  <i className="bi bi-youtube"></i>
                  <p className='text-muted'>Tickitz Cinema id</p>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
          <p className="footer-tickitz-title-copyright text-center">&copy; 2020 Tickitz. All Rights Reserved.</p>
        </div>
      </footer >
    </>
  )
}

export default Footer