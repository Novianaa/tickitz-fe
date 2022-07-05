import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ManageMovie from "./Pages/Admin/ManageMovie"
import ManageSchedule from "./Pages/Admin/ManageSchedule"
import MovieNow from './Pages/MovieNow';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/manage-movie' element={<ManageMovie />} />
      <Route path='/manage-schedule' element={<ManageSchedule />} />
      <Route path='/now' element={<MovieNow />} />
    </Routes>
  )
}

export default App;
