import './App.css';
import Home from './components/Home/home'
import AboutRoute  from './Routes/AboutRoute/aboutRoute'
import GalleryRoute from './Routes/GalleryRoute/galleryRoute';
import { Routes,Route } from 'react-router-dom';
import ContactRoute from './Routes/ContactRoute/contacRoute';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/about' element = {<AboutRoute />} />
        <Route path = '/gallery' element = {<GalleryRoute />} />
        <Route path = '/contact' element = {<ContactRoute />} />
      </Routes>
    </div>
  );
}

export default App;
