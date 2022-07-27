import axios from "axios";

const ScheduleRequest = () => {
  return {
    type: "SCHEDULE_REQUEST",
  };
};

const ScheduleSuccess = (data) => {
  return {
    type: "SCHEDULE_SUCCESS",
    payload: data
  };
};

const ScheduleError = (error) => {
  return {
    type: "SCHEDULE_ERROR",
    payload: error
  };
};

export const ScheduleNow = () => {
  return (dispatch) => {
    dispatch(ScheduleRequest())
    axios({
      method: "GET",
      url: `https://backend-tickitz.herokuapp.com/api/v1/schedule/now?limit=5`,
    })
      .then((res) => {
        dispatch(ScheduleSuccess(res.data.data))
      }).catch((err) => {
        console.log(err)
        dispatch(ScheduleError(err.response.data))
      })
  }
}
export const ScheduleUpcoming = () => {
  return (dispatch) => {
    dispatch(ScheduleRequest())
    axios({
      method: "GET",
      url: `https://backend-tickitz.herokuapp.com/api/v1/schedule/upcoming?limit=5`,
    })
      .then((res) => {
        dispatch(ScheduleSuccess(res.data.data))
      }).catch((err) => {
        console.log(err)
        dispatch(ScheduleError(err.response.data))
      })
  }
}


