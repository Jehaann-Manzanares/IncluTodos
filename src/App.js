import './App.css';
import Home from './Components/Home'
import  "./fonts/FontsFree-Net-Circular-Std-Medium.ttf"
import  "./fonts/FontsFree-Net-Jeko-Extra-Bold.ttf"
import Resources from './Components/Resources/Resources';
import TipoUsuario from './Components/TipoUsuario';
import Login from './Components/Login';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'



function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Resources' element={<Resources/>}/>
          <Route path='/TipoUsuario' element={<TipoUsuario/>}/>
          <Route path='/Login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
