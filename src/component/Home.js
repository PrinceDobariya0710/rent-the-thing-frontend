import LoginForm from './LoginFormComponent';
import NavBar from './NavBar';
import React, {useState} from "react";
import RegisterFormComponent from './RegisterFormComponent';
const Home = () => {

  const [isShowLogin,setIsShowLogin] = useState(false)
  const handleLoginClick = () => {
    if(isShowRegister==false)
    {
      setIsShowLogin((isShowLogin) => !isShowLogin)
    }else{
      setIsShowLogin((isShowLogin) => isShowLogin)
    }
    
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
    <NavBar handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick} >
      </NavBar>
      <LoginForm isShowLogin={isShowLogin} handleLoginClick={handleLoginClick} RegClick={RegClick}/>
      <RegisterFormComponent isShowRegister={isShowRegister} LoginClick={LoginClick}/>
    </>
  )
}

export default Home