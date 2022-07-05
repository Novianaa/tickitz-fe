import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import EmptyState from '../../Components/EmptyState'
import Loader from '../../Components/Loader'
import Footer from '../../Components/Footer'
import './style.css'
import { Helmet } from "react-helmet";

const MovieNow = () => {
  const [movieSchedule, setMovieSchedule] = useState({
    loading: false,
    result: {
      data: []
    }
  })
  const [query, setQuery] = useState({
    keyword: '',
    sortBy: '' || 'title',
    orderBy: '' || 'asc'
  })
  useEffect(() => {
    const { keyword, sortBy, orderBy } = query
    setMovieSchedule((prevState) => ({
      ...prevState,
      loading: true
    }))
    axios.get(`http://localhost:3000/api/v1/schedule/now?sortBy=${sortBy}&orderBy=${orderBy}&keyword=${keyword}`)
      .then((res) => {
        // console.log(res.data.data)
        setMovieSchedule({
          loading: false,
          result: res.data
        })
      })
      .catch((err) => {
        // console.log(err)
      })

  }, [query])
  console.log(movieSchedule)
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
      <div className="container-fluid">
        <div className="container wrapper-movie-now">
          <div className="head">
            <p className="text-list-name">List Movie</p>
            <div className="head-right">
              <select name="sort" id="sort" className="costum-input" onChange={(e) => {
                setQuery(prevData => ({
                  ...prevData,
                  sortBy: e.target.value
                }))
              }}>
                <option value='title'>Sort</option>
                <option value='location'>Location</option>
                <option value='cinema' >Cinema</option>
              </select>
              <div className="btn-group wrapper-order-by" role="group" onClick={(e) => {
                setQuery(prevData => ({
                  ...prevData,
                  orderBy: e.target.value
                }))
              }}>
                <button type="button" className="btn wrapper-order-by-btn" name="asc" value="asc"><i className="bi bi-sort-alpha-down" />
                </button>
                <button type="button" className="btn wrapper-order-by-btn" name="desc" value="desc"><i className="bi bi-sort-alpha-up" />
                </button>
              </div>
              <input type="search" name="search" id="search" className="costum-input" placeholder="Search Movie Name ..." onChange={(e) => {
                setQuery(prevData => ({
                  ...prevData,
                  keyword: e.target.value
                }))
              }} />
            </div>
          </div>
          {!movieSchedule.result.data.length ? <Loader /> : movieSchedule.loading ? <EmptyState /> :
            <div className="container-all-movie">
              <div className="wrapper-movie-list">
                {movieSchedule.result.data.map((schedule) => {
                  return (
                    <div className="card-list-movie text-center">
                      <img src={`http://localhost:3000/static/upload/movie/${schedule.cover}`} alt={schedule.title} className="img-cover" />
                      <div className="card-list-content-text ">
                        <h6 className="fw-bold">{schedule.title}</h6>
                        <p className="text-muted">{schedule.categories}</p>
                        <a className="btn-lg btn-custom fw-bold" href="detail.html" role="button" >Details</a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          }
          <div className="schedule-pagination">
            <Link to="#" className="schedule-pagination-button">1</Link>
            <Link to="#" className="schedule-pagination-button">2</Link>
            <Link to="#" className="schedule-pagination-button">3</Link>
          </div>
        </div >
      </div>
      <Footer />
    </>
  )
}
export default MovieNow