import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './page/Homepage';
import Movies from './page/Movies';
import Moviesdetail from './page/Moviesdetail';
import 내브바 from './component/Nav';


function App() {
  return (
    <BrowserRouter>
    <내브바/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/영화' element={<Movies/>}/>
      <Route path='/영화디테일' element={<Moviesdetail/>}/>
    </Routes>
    </BrowserRouter>
      
 
  );
}

export default App;
