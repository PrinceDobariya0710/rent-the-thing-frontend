import logo from './logo.svg';
import './App.css';
import './style.css';
import './component/componentstyle.css';
import React, {useState} from "react";
import LoginForm from './component/LoginFormComponent';
import NavBar from './component/NavBar';
import {useNavigate,BrowserRouter, Routes, Route} from 'react-router-dom';
import RegisterFormComponent from './component/RegisterFormComponent.js';
import Home from './component/Home';
import NavBar2 from './component/NavBar2';
import Slider from './component/Slider.js';
import Footer from './component/Footer.js';
import HomeProducts from './component/HomeProducts.js';
//import ProductDetailPage from './Pages/ProductDetailPage';
import HomePage from './Pages/HomePage';
import MainProduct from './component/MainProduct';
import Products from './Pages/Products';
import { RentCart } from './component/RentCart';
import { CartPage } from './Pages/CartPage';
import { OrderHistoryPage } from './Pages/OrderHistoryPage';
import { ProfilePage } from './Pages/ProfilePage';
import { DetailPage } from './Pages/DetailPage';

function App() {
 
 // const navigate = useNavigate();// for navigation

  // const [isShowLogin,setIsShowLogin] = useState(false)
  // const handleLoginClick = () => {
  //   setIsShowLogin((isShowLogin) => !isShowLogin)
  // }
  // // const [isShowRegister,setIsShowRegister] = useState(false)
  // const handleRegisterClick = () => {
    
  //   console.log("regi clicked");
  //   //navigate("/register");
  // }

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products/:id" element={<Products/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path='/order' element={<OrderHistoryPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/detail' element={<DetailPage/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
