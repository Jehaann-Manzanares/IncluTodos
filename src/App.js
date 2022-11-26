import './App.css';
import Home from './Components/Home'
import  "./fonts/FontsFree-Net-Circular-Std-Medium.ttf"
import  "./fonts/FontsFree-Net-Jeko-Extra-Bold.ttf"
import Resources from './Components/Resources/Resources';
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
      </Routes>
    </Router>
  );
}

export default App;
