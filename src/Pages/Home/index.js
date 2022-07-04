import React from 'react';
import Footer from '../../Components/Footer'
import Navbar from './components/Navbar';
import NowShowing from './components/NowShowing';
import Upcoming from './components/Upcoming';
import movieGroup from '../../assets/images/Group14.svg'
import './style.css'
import { Helmet } from 'react-helmet';

const Home = () => {
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
        <title>Tickitz</title>
      </Helmet>
      <Navbar />
      <section className="container">
        <div className="dashboard">
          <div className="dashboard-left">
            <div className="tagline text-muted fs-4">Nearest Cinema, Newest Movie,</div>
            <div className="tagline1">Find out now!</div>
          </div>
          <div className="dashboard-right">
            <img src={`${movieGroup}`} alt="movies group" className="img-fluid dashboard-right-img" />
          </div>
        </div>
      </section>
      <NowShowing />
      <Upcoming />
      <section className="container">
        <div className="wrapper-subcribe text-center">
          <div className="font-subcribe1">Be the vanguard of the</div>
          <div className="font-subcribe2">Moviegoers</div>
          <form className="d-flex form-join">
            <div className="col sm-3">
              <input type="text" placeholder="Type your email" className="form-email col sm-2" />
              <input type="button" value="Join now" className="btn-join col sm-1 btn-lg" />
            </div>
          </form>
          <div className="text-muted text-subcribe">
            <div>By joining you as a Tickitz member,</div>
            <div>we will always send you the latest updates via email .</div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default Home