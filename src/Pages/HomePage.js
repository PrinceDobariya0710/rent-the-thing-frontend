
import React,{useState} from 'react';
import { Navbar } from 'react-bootstrap';
import Footer from '../component/Footer';
import HomeProducts from '../component/HomeProducts';
import LoginForm from '../component/LoginFormComponent';
import NavBar from '../component/NavBar';
import NavBar2 from '../component/NavBar2';
import RegisterFormComponent from '../component/RegisterFormComponent';
import Slider from '../component/Slider';
import ProductDetailPage from './ProductDetailPage';

export const HomePage = () => {
    const [isShowLogin,setIsShowLogin] = useState(false)
  const handleLoginClick = () => {
    if(isShowRegister==false)
    {
      setIsShowLogin((isShowLogin) => !isShowLogin)
    }else{
      setIsShowLogin((isShowLogin) => isShowLogin)
    }
    console.log("login clicked")
  }
   const [isShowRegister,setIsShowRegister] = useState(false)
  const handleRegisterClick = () => {
    if(isShowLogin==false)
    {
      setIsShowRegister((isShowRegister) => !isShowRegister)
    }
    else{
      setIsShowRegister((isShowRegister) => isShowRegister)
    }
  }
  const LoginClick = () => {
  if(isShowRegister==true)
  {
    setIsShowRegister(false);
    setIsShowLogin(true);
  }
 }
  
const RegClick = () =>
{
   if(isShowLogin==true)
   {
      setIsShowLogin(false);
      setIsShowRegister(true);
   }
  
}
  return (
      <>

      <NavBar handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick}></NavBar>
      <LoginForm isShowLogin={isShowLogin} RegClick={RegClick}/>
      <RegisterFormComponent isShowRegister={isShowRegister} LoginClick={LoginClick}/>
     <NavBar2></NavBar2>
     <Slider></Slider>
     <ProductDetailPage/>
     {/* <HomeProducts></HomeProducts> */}
     <Footer></Footer>
      </>
  )
}

export default HomePage;
