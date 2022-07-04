import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from '../../../../Components/MyLoader'
import EmptyState from "../../../../Components/EmptyState";
import './style.css'

const Upcoming = () => {
  const [movieSchedule, setMovieSchedule] = useState({
    loading: false,
    result: {
      data: []
    }
  })
  useEffect(() => {
    setMovieSchedule((prevState) => ({
      ...prevState,
      loading: true
    }))
    axios.get('http://localhost:3000/api/v1/schedule/upcoming?limit=5')
      .then((res) => {
        setMovieSchedule({
          loading: false,
          result: res.data
        })

      })
      .catch((err) => {
        console.log(err)
      })

  }, [])
  console.log(movieSchedule.loading)
  return (
    <>
      <section className="container" >
        <div className="wrapper-movie-tagline">
          <div className="wrapper-movie-tagline-text">Up Coming</div>
          <div className="wrapper-movie-tagline-text"> View All</div>
        </div>
        <div className="container-button d-flex flex-nowrap ">
          <Link className="btn-lg btn-month" to="#" role="button">September</Link>
          <Link className="btn-lg btn-month" to="#" role="button">October</Link>
          <Link className="btn-lg btn-month" to="#" role="button">November</Link>
          <Link className="btn-lg btn-month" to="#" role="button">December</Link>
          <Link className="btn-lg btn-month" to="#" role="button">January</Link>
          <Link className="btn-lg btn-month" to="#" role="button">February</Link>
          <Link className="btn-lg btn-month" to="#" role="button">March</Link>
          <Link className="btn-lg btn-month" to="#" role="button">April</Link>
          <Link className="btn-lg btn-month" to="#" role="button">May</Link>
          <Link className="btn-lg btn-month" to="#" role="button">June</Link>
          <Link className="btn-lg btn-month" to="#" role="button">July</Link>
          <Link className="btn-lg btn-month" to="#" role="button">august</Link>
        </div>
        {!movieSchedule.loading ? <Loader /> :
          !movieSchedule.result.data.length ? <EmptyState /> : <div className="container wrapper-movie-list">
            <div className="row">
              {movieSchedule.result.data.map((movie, index) => {
                return (
                  <div className="col" key={index}>
                    <div className="card-list-upcoming text-center">
                      <img src={`http://localhost:3000/static/upload/movie/${movie.cover}`} alt={movie.title} className="img-fluid " />
                      <div className="card-list-content-upcoming ">
                        <h6 className="fw-bold">{movie.title}</h6>
                        <p className="text-muted">{movie.categories}</p>
                      </div>
                      <Link className="btn-lg btn-custom fw-bold" to="detail.html" role="button">Details</Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        }
      </section>
    </>
  )
}
export default Upcoming