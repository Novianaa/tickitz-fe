import React from "react";
import NotFound from '../../assets/images/No-data-rafiki.png'
import './style.css'

const EmptyState = ({ title = "Data Not Found" }) => {
  return (
    <>
      <div className="wrapper-not-found">
        <img src={`${NotFound}`} alt="Not Found" className="text-center wrapper-img" />
        <p className="wrapper-not-found-text">No Data Found!</p>
      </div>
    </>
  )
}
export default EmptyState