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

const Login = () => {
  const { data, error, loading, isLogin } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: ''
  })
  // console.log(data)
  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(AuthLogin(formLogin))
  }
  useEffect(() => {
    if (isLogin === true) {
      navigate('/', { replace: true }) //kita menghapus routing login dari browser
    } else {
      navigate('/login', { replace: true })
    }
  }, [isLogin, navigate])
  const toastError = () => {
    toast.error(error.msg);
  }
  // console.log(data, error, loading, isLogin)
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
        <title>Login | Tickitz</title>
      </Helmet>
      <div className="container-fluid-signin">
        <div className="banner-tickitz">
          <div className="banner-tickitz-image-container">
            <div className="banner-tickitz-overlay">
              <div className="banner-tickitz-overlay-parent">
                <img src={Logo} className="banner-tickitz-overlay-image img-fluid" alt="tickitz" />
                <h2 className="banner_tickitz-title">wait, watch, wow!</h2>
              </div>
            </div>
            <img src={Bg} className="banner-tickitz-image" alt="Banner tickitz" />
          </div>
          <form className="form-signin " novalidate onSubmit={handleLogin}>
            <p className="signin">Sign In</p>
            <p className="signin-content">Sign in with your data that you entered during
              your registration</p>
            <div className="field-email" required onChange={(e) => {
              setFormLogin((prevData) => ({
                ...prevData, email: e.target.value
              }))
            }}>
              <label for="email">
                Email
              </label>
              <input type="text" name="email" id="email" placeholder="Write your email" className="field-form form-control" required />
            </div>
            <div className="field-pass" required onChange={(e) => {
              setFormLogin((prevData) => ({
                ...prevData, password: e.target.value
              }))
            }}>
              <label for="password" className="for-label">
                Password
              </label>
              <input type="password" name="password" id="password" placeholder="Write your password" className="field-form form-control" required />
            </div>
            {loading ? (
              <button className="btn-signin w-100" disabled={true}><i className="fas fa-spinner fa-spin" /></button>
            ) : (
              <button className="btn-signin w-100" onClick={toastError}>Sign In</button>
            )}<ToastContainer autoClose={2000} />
            <p className="text-more">Forgot your password? <a href="forgot.html">Reset now</a></p>
            <p className="text-more"> Don't have an account? <a href="signup.html">Sign Up</a></p>
          </form>
        </div>

      </div>
    </>
  )
}
export default Login