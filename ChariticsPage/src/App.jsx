import './App.css';
import Head from "./Head";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import ContactUs from './pages/ContactUs';
import Charitics from './charitics';

function App() {
  return (
    <div>

      
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path='contact' element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
      <Charitics/>

    
    </div>
  );
}

export default App;