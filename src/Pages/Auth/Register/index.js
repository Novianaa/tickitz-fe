import React, { useEffect, useState } from 'react';
import { AuthLogin } from '../../../redux/actions/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'
import Logo from '../../../assets/images/tickitz.svg'
import Bg from '../../../assets/images/bg.png'

const Register = () => {

  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#5f2eea" />
        <meta name="description" content="Author: Novia,
      Name Web : Tickitz, Category: Booking Ticket Bioskop"/>
        <link rel="canonical" href="https://tickizee.netlify.app/" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Mulish:wght@400;600;700&family=Open+Sans&display=swap"
          rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
          integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
          crossorigin="anonymous"
        />
        <title>Register | Tickitz</title>
      </Helmet>
      <div class="container-fluid">
        <div class="banner-tickitz">
          <div class="banner-tickitz-image-container">
            <div class="banner-tickitz-overlay">
              <div class="banner-tickitz-overlay-parent">
                <img src="assets/images/tickitz.svg" class="banner-tickitz-overlay-image img-fluid" alt="tickitz" />
                <h2 class="banner-tickitz-title">wait, watch, wow!</h2>
              </div>
            </div>
            <img src="assets/images/bg.png" class="banner-tickitz-image" alt="Banner tickitz" />
          </div>
          <div class="form-signup">
            <p class="signup">Sign UP</p>
            <p class="signup-content">Fill your additional details</p>
            <div class="field-signup">
              <label for="first">
                First Name
              </label>
              <input type="text" name="email" id="" placeholder="Write your first name" class="field-form" />
            </div>
            <div class="field-signup">
              <label for="last">
                Last name
              </label>
              <input type="text" name="email" id="" placeholder="Write your last name" class="field-form" />
            </div>
            <div class="field-signup">
              <label for="no">
                Phone Number
              </label>
              <input type="text" name="email" id="" placeholder="Write your phone number" class="field-form" />
            </div>
            <div class="field-signup">
              <label for="email">
                Email
              </label>
              <input type="text" name="email" id="" placeholder="Write your email" class="field-form" />
            </div>
            <div class="field-signup">
              <label for="pass">
                Password
              </label>
              <input type="password" name="pass" id="" placeholder="Write your password" class="field-form" />
            </div>
            <a href="signin.html" class="link-signin">
              <input type="button" value="Sign Up" class="btn-signup " />
            </a>
            <p class="text-more"> Already have account ? <a href="signip.html">Sign In</a></p>
          </div>
        </div>
      </div>
    </>
  )
}