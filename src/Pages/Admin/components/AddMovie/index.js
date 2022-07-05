import axios from "axios";
import React, { useRef, useState } from "react";
import './style.css'

const AddMovie = () => {
  const [formAddData, setFormAddData] = useState({
    title: "",
    categories: "",
    release_date: "",
    director: "",
    duration: "",
    casts: "",
    synopsis: "",
    cover: "",
  })
  const [refetch, setRefetch] = useState(false)
  const inputFile = useRef(null);
  const onClickInput = () => {
    inputFile.current.click()
    // updateImage();
  }
  const formData = new FormData();
  for (const data in formAddData) {
    formData.append(data, formAddData[data]);
  }
  const handleAddMovie = async (e) => {
    e.preventDefault()
    try {
      const result = await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/v1/movies/',
        data: formAddData,
      })
      if (result.data.status === 201) {
        alert('Successfully Added')
        setRefetch(!refetch)
      } else {
        alert('Failed, Try Again')
      }
    } catch (err) {
      alert(err.res.data.msg)
      console.log(err)

    }
  }
  console.log(formAddData)
  return (
    <>
      <div className="container">
        <div className="form-movie-text">Form Movie</div>
        <form encType="multipart/form-data">
          <div className="wrapper-form-movie-update">
            <div className="wrapper-form-movie-content" >
              <div className="card-movie-left text-center">
                {/* <img src={formAddData.cover ? `${setFormAddData.cover}` : `https://kravmaganewcastle.com.au/wp-content/uploads/2017/04/default-image-620x600.jpg`} alt="" className="wrapper-display-cover" /> */}
                <div className="wrapper-form-cover">
                  <input type="file" onChange={(e) => setFormAddData(prevState => ({ ...prevState, cover: e.target.files[0] }))} name="image" id="image" ref={inputFile} />
                  <div className="hover-pointer" onClick={() => onClickInput()}><i className="bi bi-pencil" />
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
                    <input type="text" name="inputDate" id="inputDate" placeholder="yyyy-mm-dd"
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
              <button type="button" className="btn-lg btn-wrapper-update fw-bold" >Reset</button>
              <button type="button" className="btn-lg btn-wrapper-update fw-bold" onClick={(e) => handleAddMovie(e)}>Submit</button>
            </div>
          </div>
        </form>

      </div>
    </>
  )
}
export default AddMovie