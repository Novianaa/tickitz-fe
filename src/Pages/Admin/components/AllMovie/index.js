import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { GetMovies } from "../../../../redux/actions/Movies";
import Loader from "../../../../Components/Loader";
import EmptyState from "../../../../Components/EmptyState";
import './style.css'
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

const AllMovie = () => {
  let { data, loading, } = useSelector((state) => state.movies)
  let getToken = useSelector((state) => state.auth)
  console.log(getToken)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetMovies())
  }, [dispatch])
  console.log(data.result, 'dfdfd')
  // const [movie, setMovie] = useState({
  //   loading: false,
  //   result: {
  //     data: []
  //   }
  // })
  const [refetch, setRefetch] = useState(false)

  const [formEditData, setFormEditData] = useState({})
  const [query, setQuery] = useState({
    keyword: "",
    orderBy: "" || 'title',
    sortBy: "" || 'asc',
    page: "" || 1,
    limit: "" || 100,
  })
  console.log(data.token)

  // useEffect(() => {
  //   const { keyword, sortBy, orderBy, page, limit } = query
  //   setMovie((prevState) => ({
  //     ...prevState,
  //     loading: true
  //   }))
  //   axios({
  //     method: 'GET',
  //     url: `https://backend-tickitz.herokuapp.com/api/v1/movies/?orderBy=${orderBy}&sortBy=${sortBy}&keyword=${keyword}&page=${page}&limit=${limit}`,
  //   })
  //     .then((res) => {
  //       console.log(`https://backend-tickitz.herokuapp.com/api/v1/movies/?orderBy=${orderBy}&sortBy=${sortBy}&keyword=${keyword}&page=${page}&limit=${limit}`)

  //       setMovie({
  //         loading: false,
  //         result: res.data
  //       })
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [query])
  // useEffect(() => {
  //   GetMovies()

  // }, [])

  // console.log(movie)

  const handleUpdateMovie = async (e) => {
    e.preventDefault()
    try {
      const result = await axios({
        method: 'PATCH',
        data: formEditData,
        url: `https://backend-tickitz.herokuapp.com/api/v1/movies/${formEditData.id}`,
        headers: {
          authorization: `Bearer ${getToken.data.token}`
        },
      })
      if (result.data.status === 200) {
        toast.success('Successfully Added')
        setRefetch(!refetch)
      } else {
        toast.error('Failed, Try Again')
      }

    } catch (err) {
      alert(err.response.data.msg)
      console.log(err)
    }
  }
  // const imageHandler = (e, prevData) => {
  //   const reader = new FileReader()
  //   reader.onload = () => {
  //     if (reader.readyState === 1) {
  //       setFormEditData({ ...prevData, cover: reader.result })
  //     }
  //   }
  //   reader.readAsDataURL(e.target.files[0])
  //   console.log(reader.result)
  // }
  const handleEdit = (prevData) => {
    setFormEditData({
      ...prevData,
      release_date: moment(prevData.release_date).format('YYYY-MM-DD'),
      created_at: moment(prevData.created_at).format('YYYY-MM-DD'),
      updated_at: moment(prevData.updated_at).format('YYYY-MM-DD')
    })
  }
  const handleDelete = (id) => {
    if (window.confirm('Are you sure?')) {
      axios({
        method: 'DELETE',
        url: `https://backend-tickitz.herokuapp.com/api/v1/movies/${id}`,
        headers: {
          authorization: `Bearer ${getToken.data.token}`
        },

      }).then((res) => {
        toast.success(res.data.msg)
        setRefetch(!refetch)
      }).catch((err) => {
        toast.error(err.movie.result.msg)
      })
    }
  }
  let totalPage = Array(data.totalPage).fill() ?? []
  return (
    <>
      <div className="container">
        <div className="wrapper-all-movie">
          <div className="wrapper-all-movie-head">
            <div className="wrapper-all-movie-title">Data Movie</div>
            <div className="right-bar">
              <select className="right-bar-content" onChange={(e) => {
                setQuery(prevData => ({
                  ...prevData,
                  sortBy: e.target.value
                }))
              }}>
                <option hidden>Sort by</option>
                <option value="title">Title</option>
                <option value="release_date">Release Date</option>
                <option value="cinema">Cinema</option>
                <option value="location">Location</option>
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
              <input action="text" placeholder="Search Movie Name ..." className="right-bar-content for-search-text" onChange={(e) => {
                setQuery(prevData => ({
                  ...prevData,
                  keyword: e.target.value
                }))
              }} >
              </input>
            </div>
          </div>
          {!data.result ? <Loader /> : loading ? <EmptyState /> :
            <div className="wrapper-all-movie-content">
              <div className="wrapper-card-all-movie">
                {data.result.map((movie, index) => {
                  return (
                    <div className="card-all-movie text-center" key={index}>
                      <img src={`https://backend-tickitz.herokuapp.com/static/upload/movie/${movie.cover}`} alt={movie.title} className="img-fluid wrapper-img" />
                      <div className="card-movie-text">
                        <h6 className="fw-bold">{movie.title}</h6>
                        <p className="text-muted">{movie.categories}</p>
                      </div>
                      <div className="wrapper-btn-all-movie">
                        <button type="button" className="btn-lg btn-wrapper-card-update fw-bold" onClick={() => handleEdit(movie)} data-bs-toggle="modal" data-bs-target="#editMovie">UPDATE</button>
                        <button type="button" className="btn btn-lg btn-outline-danger fw-bold" onClick={() => handleDelete(movie.id)}>DELETE</button>
                      </div>
                    </div>
                  );

                })}
                <ToastContainer autoClose={2000} />

              </div>
            </div>
          }
          <div class="modal fade" id="editMovie" tabindex="-1" aria-labelledby="editMovieLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="editMovieLabel">Edit Movies</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form onSubmit={(e) => handleUpdateMovie(e)}>
                  <div class="modal-body">
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Title</label>
                      <input type="text" class="form-control" id="exampleInputEmail1" value={formEditData.title} onChange={(e) => {
                        setFormEditData(prevState => ({ ...prevState, title: e.target.value }))
                      }} />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">cover</label>
                      <input type="file" class="form-control" id="exampleInputPassword1" value={formEditData.cover} onChange={(e) => {
                        setFormEditData(prevState => ({ ...prevState, cover: e.target.file[0] }))
                      }} />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Release Date</label>
                      <input type="date" class="form-control" id="exampleInputPassword1" value={formEditData.release_date} onChange={(e) => {
                        setFormEditData(prevState => ({ ...prevState, release_date: e.target.value }))
                      }} />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Duration</label>
                      <input type="text" class="form-control" id="exampleInputPassword1" value={formEditData.duration} onChange={(e) => {
                        setFormEditData(prevState => ({ ...prevState, duration: e.target.value }))
                      }} />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Director</label>
                      <input type="text" class="form-control" id="exampleInputPassword1" value={formEditData.director} onChange={(e) => {
                        setFormEditData(prevState => ({ ...prevState, director: e.target.value }))
                      }} />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Cast</label>
                      <input type="text" class="form-control" id="exampleInputPassword1" value={formEditData.casts} onChange={(e) => {
                        setFormEditData(prevState => ({ ...prevState, casts: e.target.value }))
                      }} />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Genre</label>
                      <input class="form-control" id="exampleInputPassword1" value={formEditData.categories} onChange={(e) => {
                        setFormEditData(prevState => ({ ...prevState, categories: e.target.value }))
                      }} />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Synopsis</label>
                      <textarea rows={10} class="form-control" id="exampleInputPassword1" value={formEditData.synopsis} onChange={(e) => {
                        setFormEditData(prevState => ({ ...prevState, synopsis: e.target.value }))
                      }} />
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onClick={(e) => handleUpdateMovie(e)}>Save changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {totalPage.map((item, index) => {
          return (
            <button type="button" className="btn pagination-movie-button">{index + 1}</button>
          )
        })}
      </div>
    </>
  )
}
export default AllMovie