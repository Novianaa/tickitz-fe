import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmptyState from "../../../../Components/EmptyState";
import Loader from '../../../../Components/Loader'
import './style.css'

const NowShowing = () => {
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
    axios.get('http://localhost:3000/api/v1/schedule/now?limit=5')
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

  }, [])
  return (
    <>
      <div className="container-fluid card-movie">
        <div className="container">
          <div className="wrapper-movie-tagline">
            <div className="wrapper-movie-tagline-text">Now Showing</div>
            <div className="wrapper-movie-tagline-text"><Link to="/now" className="text-decoration-none text-reset">View
              All</Link>
            </div>
          </div>
          {!movieSchedule.result.data.length ? <Loader /> : movieSchedule.loading ? <EmptyState /> :
            <div className="container wrapper-movie-list">
              <div className="row">
                {movieSchedule.result.data.map((movie) => {
                  return (
                    <div className="col" >
                      <div className="card-list text-center">
                        <img crossOrigin="anonymous" src={`http://localhost:3000/static/upload/movie/${movie.cover}`} alt={movie.title} className="img-fluid card-list-cover" />
                        <div className="card-list-content ">
                          <h6 className="fw-bold card-list-text">{movie.title}</h6>
                          <p className="text-muted card-list-content-text">{movie.categories}</p>
                          <Link className="btn-custom btn-lg fw-bold" to="detail.html" role="button">Details</Link>
                        </div>
                      </div>
                    </div>
                  )
                })
                }
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}
export default NowShowing