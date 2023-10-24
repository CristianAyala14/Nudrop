import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//blocks
import Footer from './components/footer';
import Navbar from './components/navbar';
//views
import Home from "./Views/Home"
import News from "./Views/News"
import Media from "./Views/Media"
import Contact from "./Views/Contact"
import Store from "./Views/Store"
import Cart from "./Views/Cart"
//img
import Imglogo from "./img/nav-logo.jpeg"

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar img={Imglogo} op1="News" op2="Media" op3="Contact" op4="Store" />
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/News" element={<News/>} />
          <Route exact path="/Media" element={<Media />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Store" element={<Store />} />
          <Route exact path="/Cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </div> 
    </BrowserRouter>
      
  );
}

export default App;





