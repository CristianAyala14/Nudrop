import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//context
import CartProvider from "./context/cartContext"
//blocks
import Footer from './components/footer';
import Navbar from './components/navbar';
//views
import Home from "./Views/Home"
import News from "./Views/News"
import Media from "./Views/Media"
import Contact from "./Views/Contact"
import Store from "./Views/Store"
import FinalizarCompra from "./Views/finalizarcompra"

import Descripcionproducto from './Views/descripcionproducto';
//img
import Imglogo from "./img/nav-logo.jpeg"




function App() {
  return (
    <div className='App'>
      <CartProvider>
        <BrowserRouter> 
          <Navbar img={Imglogo} op1="News" op2="Media" op3="Contact" op4="Store"/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/News" element={<News/>} />
            <Route exact path="/Media" element={<Media />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Store" element={<Store />} />
            <Route path="/producto/:id" element={<Descripcionproducto/>} />
            <Route path="/finalizarcompra" element={<FinalizarCompra/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartProvider> 
    </div> 
  );
}

export default App;





