import logo from './logo.svg';
import './App.css';
import './style.css';
import './component/componentstyle.css';
import React, {useState} from "react";
import {useNavigate,BrowserRouter, Routes, Route} from 'react-router-dom';
//import ProductDetailPage from './Pages/ProductDetailPage';
import HomePage from './Pages/HomePage';
import MainProduct from './component/MainProduct';
import Products from './Pages/Products';
import { CartPage } from './Pages/CartPage';
import { OrderHistoryPage } from './Pages/OrderHistoryPage';
import { ProfilePage } from './Pages/ProfilePage';
import { DetailPage } from './Pages/DetailPage';
import {LoginContext} from './context/LoginContext';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products/:id" element={<Products/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path='/order' element={<OrderHistoryPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
      </Routes>
      </BrowserRouter>
      <LoginContext.Provider>
        
      </LoginContext.Provider>
    </div>
  );
}

export default App;
