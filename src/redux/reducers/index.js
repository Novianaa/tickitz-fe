import { combineReducers } from "redux";
import Auth from '../reducers/Auth'
import Movies from '../reducers/Movies'
import Schedule from '../reducers/Schedule'

const rootReducer = combineReducers({
  auth: Auth,
  movies: Movies,
  schedule: Schedule,
})
export default rootReducer