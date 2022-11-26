import './App.css';
import Home from './Components/Home'
import  "./fonts/FontsFree-Net-Circular-Std-Medium.ttf"
import  "./fonts/FontsFree-Net-Jeko-Extra-Bold.ttf"
import { BrowserRouter } from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Home/>
    </BrowserRouter>
  );
}

export default App;
