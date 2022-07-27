import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import ManageMovie from "./Pages/Admin/ManageMovie"
import ManageSchedule from "./Pages/Admin/ManageSchedule"
import MovieNow from
  './Pages/MovieNow'
import Login from './Pages/Auth/Login';
// import PrivateRoute from "./route/PrivateRoute";
import PublicRoute from "./route/PublicRouter";

const MainNavigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PublicRoute isRestricted={true}><Home /></PublicRoute>} />
          <Route path='login' element={<Login />} />
          <Route path='manage-movie' element={<PublicRoute isRestricted={true}><ManageMovie /></PublicRoute>} />
          <Route path='manage-schedule' element={<PublicRoute isRestricted={true}><ManageSchedule /></PublicRoute>} />
          <Route path='now' element={
            <PublicRoute isRestricted={true}><MovieNow /></PublicRoute>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default MainNavigation