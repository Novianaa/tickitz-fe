import axios from "axios";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import './style.css'

const AddMovie = () => {
  let { data, error, loading } = useSelector((state) => state.auth)
  console.log(data)

  const [formAddData, setFormAddData] = useState({})
  const [refetch, setRefetch] = useState(false)
  const inputFile = useRef(null);
  const onClickInput = () => {
    inputFile.current.click()
  }

  const formData = new FormData()
  formData.append('cover', formAddData.cover)
  formData.append('title', formAddData.title)
  formData.append('release_date', formAddData.release_date)
  formData.append('director', formAddData.director)
  formData.append('synopsis', formAddData.synopsis)
  formData.append('casts', formAddData.casts)
  formData.append('categories', formAddData.categories)
  formData.append('duration', formAddData.duration)

  // console dari formData
  for (const value of formData.values()) {
    console.log(value)
  }
  const handleAddMovie = async (e) => {
    e.preventDefault()
    try {
      const result = await axios({
        method: 'POST',
        url: 'https://backend-tickitz.herokuapp.com/api/v1/movies/',
        data: formData,
        headers: {
          authorization: `Bearer ${data.token}`
        },
      })
      if (result.data.status === 201) {
        toast.success('Successfully Added')
        setRefetch(!refetch)
      } else {
        toast.error('Failed, Try Again')
      }
      console.log(result.data)

    } catch (err) {
      toast.error(err.response.data.msg)
      // console.log(err, 'klkl')

    }
  }
  // const toastError = () => {
  //   toast.error(error.msg);
  // }
  // console.log(formAddData.cover.name)
  return (
    <>
      <div className="container">
        <div className="form-movie-text">Form Movie</div>
        <form encType="multipart/form-data">
          <div className="wrapper-form-movie-update">
            <div className="wrapper-form-movie-content" >
              <div className="card-movie-left text-center">
                <img src={formAddData.cover ? `${formAddData.cover}` : `http://bppl.kkp.go.id/uploads/publikasi/karya_tulis_ilmiah/default.jpg`} alt="" className="wrapper-display-cover" />
                <div className="wrapper-form-cover">
                  <input type="file" onChange={(e) => setFormAddData(prevState => ({ ...prevState, cover: e.target.files[0] }))} name="image" id="image" ref={inputFile} hidden />
                  <div className="hover-pointer d-flex text-center" onClick={() => onClickInput()}><i className="bi bi-pencil" />
                    Edit
                  </div>
                </div>
              </div>
              <div className="wrapper-form">
                <div className="wrapper-form-content">
                  <div className="wrapper-form-input">
                    <label for="inputName" className="label-content">
                      Movie Name
                    </label>
                    <input type="text" name="inputName" id="inputName" placeholder="MovieName" className="form-control" onChange={(e) => {
                      setFormAddData(prevState => ({ ...prevState, title: e.target.value }))
                    }} />
                  </div>
                  <div className="wrapper-form-input">
                    <label for="inputCategory" className="label-content">
                      Category
                    </label>
                    <input type="text" name="inputCategory" id="inputCategory" placeholder="Category" className="form-control" onChange={(e) => {
                      setFormAddData(prevState => ({ ...prevState, categories: e.target.value }))
                    }} />
                  </div>
                  <div className="wrapper-form-input">
                    <label for="inputDirector" className="label-content">
                      Director
                    </label>
                    <input type="text" name="inputDirector" id="inputDirector" placeholder="Director" className="form-control" onChange={(e) => {
                      setFormAddData(prevState => ({ ...prevState, director: e.target.value }))
                    }} />
                  </div>
                  <div className="wrapper-form-input">
                    <label for="inputCast" className="label-content">
                      Casts
                    </label>
                    <input type="text" name="inputCast" id="inputCast" placeholder="Casts"
                      className="form-control" onChange={(e) => {
                        setFormAddData(prevState => ({ ...prevState, casts: e.target.value }))
                      }} />
                  </div>
                  <div className="wrapper-form-input">
                    <label for="inputDate" className="label-content">
                      Release date
                    </label>
                    <input type="date" name="inputDate" id="inputDate" placeholder="yyyy-mm-dd"
                      className="form-control" onChange={(e) => {
                        setFormAddData(prevState => ({ ...prevState, release_date: e.target.value }))
                      }} />
                  </div>
                  <div className="wrapper-form-input">
                    <label for="inputDuration" className="label-content">
                      Duration
                    </label>
                    <input type="text" name="inputDuration" id="inputDuration" placeholder="example: 100 minutes"
                      className="form-control" onChange={(e) => {
                        setFormAddData(prevState => ({ ...prevState, duration: e.target.value }))
                      }} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label for="inputSynopsis" className="label-content">
                Synopsis
              </label>
              <textarea rows={10} name="inputSynopsis" id="inputSynopsis" placeholder="Synopsis movie" className="form-control-synopsis" onChange={(e) => {
                setFormAddData(prevState => ({ ...prevState, synopsis: e.target.value }))
              }} />
            </div>
            <div className="wrapper-btn">
              <button type="reset" className="btn-lg btn-wrapper-update fw-bold" >Reset</button>
              {loading ? (
                <button className="btn-lg btn-wrapper-update fw-bold" disabled={true}><i className="fas fa-spinner fa-spin" /></button>
              ) : (
                <button type="button" className="btn-lg btn-wrapper-update fw-bold" onClick={(e) => handleAddMovie(e)} >Submit</button>
              )}<ToastContainer autoClose={2000} />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
export default AddMovie