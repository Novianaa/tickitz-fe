import axios from "axios"

const GetMoviesPending = () => {
  return {
    type: 'GET_MOVIES_REQUEST'
  }
}
const GetMoviesSuccess = (data) => {
  return {
    type: 'GET_MOVIES_SUCCESS',
    payload: data
  }
}
const GetMoviesError = (err) => {
  return {
    type: 'GET_MOVIES_ERROR',
    payload: err

  }
}
export const GetMovies = (params) => {
  let orderBy = '' || 'title'
  let sortBy = '' || 'asc'
  let keyword = ''
  let page = 1
  let limit = 8
  return async (dispatch) => {
    try {
      dispatch(GetMoviesPending())
      const result = await axios({
        method: 'GET',
        url: `https://backend-tickitz.herokuapp.com/api/v1/movies/?orderBy=${orderBy}&sortBy=${sortBy}&keyword=${keyword}&page=${page}&limit=${limit}`,
      })
      dispatch(GetMoviesSuccess(result.data.data))
    }
    catch (err) {
      console.log(err)
      dispatch(GetMoviesError(err.response.data))
    }
  }
}