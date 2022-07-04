import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import DashboardAdmin from './Pages/DashboardAdmin';
// import Movies from './Pages/Movies';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/board-admin' element={<DashboardAdmin />} />
      {/* <Route path='/movies' element={<Movies />} /> */}
    </Routes>
  )
}

export default App;
