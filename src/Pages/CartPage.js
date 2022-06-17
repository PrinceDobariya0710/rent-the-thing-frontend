import React,{useState} from 'react';
import NavBar from '../component/NavBar';
import NavBar2 from '../component/NavBar2';
import { RentCart } from '../component/RentCart';
import Register from '../component/Registration';
import Footer from '../component/Footer';
import LoginForm from '../component/LoginFormComponent';
import Cart from '../component/Cart';
export const CartPage = () => {
    const [isShowLogin,setIsShowLogin] = useState(false)
    const handleLoginClick = () => {
    if(isShowRegister===false)
    {
      setIsShowLogin((isShowLogin) => !isShowLogin)
    }else{
      setIsShowLogin((isShowLogin) => isShowLogin)
    }
    console.log("login clicked")
  }
  const [isShowRegister,setIsShowRegister] = useState(false)
  const handleRegisterClick = () => {
    if(isShowLogin===false)
    {
      setIsShowRegister((isShowRegister) => !isShowRegister)
    }
    else{
      setIsShowRegister((isShowRegister) => isShowRegister)
    }
  }
  const LoginClick = () => {
  if(isShowRegister===true)
  {
    setIsShowRegister(false);
    setIsShowLogin(true);
  }
 }
  
const RegClick = () =>
{
   if(isShowLogin===true)
   {
      setIsShowLogin(false);
      setIsShowRegister(true);
   }
  
}
  return (
    <>
        <NavBar handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick}></NavBar>
        <LoginForm isShowLogin={isShowLogin} RegClick={RegClick} handleLoginClick={handleLoginClick}/> 
        <Register isShowRegister={isShowRegister} LoginClick={LoginClick} handleRegisterClick={handleRegisterClick}></Register>
        <NavBar2></NavBar2>
        <Cart></Cart>
        <Footer></Footer>
    </>
  )
}
