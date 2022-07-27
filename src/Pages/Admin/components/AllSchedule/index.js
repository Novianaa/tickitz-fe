import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import EmptyState from "../../../../Components/EmptyState";
import Loader from "../../../../Components/Loader";

const AllSchedule = () => {
  const [schedule, setSchedule] = useState({
    loading: false,
    result: {
      data: []
    }
  })
  const [refetch, setRefetch] = useState(false)

  const [formEditData, setFormEditData] = useState({})
  const [query, setQuery] = useState({
    keyword: "",
    sortBy: "" || 'title',
    orderBy: "" || 'asc',
  })
  useEffect(() => {
    const { keyword, sortBy, orderBy } = query
    setSchedule((prevState) => ({
      ...prevState,
      loading: true
    }))
    axios({
      method: 'GET',
      url: `https://backend-tickitz.herokuapp.com/api/v1/schedule/?sortBy=${sortBy}&orderBy=${orderBy}&keyword=${keyword}`,
    })
      .then((res) => {
        setSchedule({
          loading: false,
          result: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [query])
  const handleUpdateschedule = async (e) => {
    e.preventDefault()
    try {
      const result = await axios({
        method: 'PATCH',
        data: formEditData,
        url: `https://backend-tickitz.herokuapp.com/api/v1/schedule/${formEditData.id}`,
      })
      if (result.data.status === 200) {
        alert('Successfully Added')
        setRefetch(!refetch)
      } else {
        alert('Failed, Try Again')
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
        url: `https://backend-tickitz.herokuapp.com/api/v1/schedule/${id}`,
      }).then((res) => {
        alert(res.data.msg)
        setRefetch(!refetch)
      }).catch((err) => {
        alert(err.schedule.result.msg)
      })
    }
  }
  return (
    <>
      <div className="container">
        <div className="wrapper-all-schedule">
          <div className="wrapper-all-schedule-head">
            <div className="wrapper-all-schedule-title">Data schedule</div>
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
              <input action="text" placeholder="Search schedule Name ..." className="right-bar-content for-search-text" onChange={(e) => {
                setQuery(prevData => ({
                  ...prevData,
                  keyword: e.target.value
                }))
              }} >
              </input>
            </div>
          </div>
          {!schedule.result.data.length ? <Loader /> : schedule.loading ? <EmptyState /> :
            <div className="wrapper-all-schedule-content">
              <div className="wrapper-card-all-schedule">
                {schedule.result.data.map((schedule, index) => {
                  return (
                    <div className="card-all-schedule text-center" key={index}>
                      <img src={`https://backend-tickitz.herokuapp.com/static/upload/schedule/${schedule.cover}`} alt={schedule.title} className="img-fluid wrapper-img" />
                      <div className="card-schedule-text">
                        <h6 className="fw-bold">{schedule.title}</h6>
                        <p className="text-muted">{schedule.categories}</p>
                      </div>
                      <div className="wrapper-btn-all-schedule">
                        <button type="button" className="btn-lg btn-wrapper-card-update fw-bold" onClick={() => handleEdit(schedule)} data-bs-toggle="modal" data-bs-target="#editschedule">UPDATE</button>
                        <button type="button" className="btn btn-lg btn-outline-danger fw-bold" onClick={() => handleDelete(schedule.id)}>DELETE</button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          }
          <div class="modal fade" id="editschedule" tabindex="-1" aria-labelledby="editscheduleLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="editscheduleLabel">Edit schedule</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form onSubmit={(e) => handleUpdateschedule(e)}>
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
                        setFormEditData(prevState => ({ ...prevState, cover: e.target.files[0] }))
                      }} />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Release Date</label>
                      <input type="text" class="form-control" id="exampleInputPassword1" value={formEditData.release_date} onChange={(e) => {
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
                      <label for="exampleInputPassword1" class="form-label">Casts</label>
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
                    <button type="button" class="btn btn-primary" onClick={(e) => handleUpdateschedule(e)}>Save changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AllSchedule