import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { createContext } from 'react';

//blocks
import Footer from './components/footer';
import Navbar from './components/navbar';
//views
import Home from "./Views/Home"
import News from "./Views/News"
import Media from "./Views/Media"
import Contact from "./Views/Contact"
import Store from "./Views/Store"
import Descripcionproducto from './Views/descripcionproducto';
//img
import Imglogo from "./img/nav-logo.jpeg"

//ecommercecontext
export const ecommerce_context = createContext();


function App() {
  //ecommerce
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0); //estado para sumar total
  const [countProducts, setCountProducts] = useState(0); // estado contador de productos
  
  
  
  return (
    <ecommerce_context.Provider value={{allProducts, setAllProducts, total, setTotal, countProducts, setCountProducts}}>
      <BrowserRouter> 
        <div className='App'>
          <Navbar img={Imglogo} op1="News" op2="Media" op3="Contact" op4="Store"
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
          total={total}
          setTotal={setTotal}
          />
          <Routes>
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/News" element={<News/>} />
            <Route exact path="/Media" element={<Media />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Store" element={<Store />} />
            <Route path="/producto/:id" element={<Descripcionproducto/>} />
            </Routes>
          <Footer/>
        </div> 
      </BrowserRouter>
    </ecommerce_context.Provider> 
  );
}

export default App;





