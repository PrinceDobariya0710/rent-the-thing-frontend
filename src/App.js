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
import ProductDetailPage from './Pages/ProductDetailPage';

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
  <NavBar></NavBar>
  <NavBar2></NavBar2>
  <ProductDetailPage></ProductDetailPage>
  <Footer></Footer>
      
    </div>
  );
}

export default App;
