import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Reserve from './pages/Reserve'
import Order from './pages/Order'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/reserve' element={<Reserve />}/>
        <Route path='/order' element={<Order />}/>
        <Route path='/login' element={<Login />}/>
    </Routes>
  );
}

export default App;
