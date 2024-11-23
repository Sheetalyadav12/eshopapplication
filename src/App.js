import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Footer from './assets/image/componets/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { useState } from 'react';
import Order from './pages/Order';
import Navbar from './assets/image/componets/Navbar';
import Filter from './pages/Filter';
import ProductDetail from './pages/ProductDetail';

function App() {
  const[order,setOrder] = useState(null)
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/shop'  element={<Shop/>}/>
      <Route path='/cart'  element={<Cart/>}/>
      <Route path='/checkout'  element={<Checkout setOrder={setOrder}/>}/>
      {/* <Route path='/order-confirmation' element={<Order Checkout={Checkout}/>}/> */}
      <Route path='/filter.data' element={<Filter/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>


      


    </Routes>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;

