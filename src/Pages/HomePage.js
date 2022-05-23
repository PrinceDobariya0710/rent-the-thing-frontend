
import React,{useState} from 'react';
import { Navbar } from 'react-bootstrap';
import Footer from '../component/Footer';
import HomeProducts from '../component/HomeProducts';
import LoginForm from '../component/LoginFormComponent';
import NavBar from '../component/NavBar';
import NavBar2 from '../component/NavBar2';
import RegisterFormComponent from '../component/RegisterFormComponent';
import Register from '../component/Registration';
import Slider from '../component/Slider';
import ProductDetailPage from './ProductDetailPage';
import axios from 'axios';

export const HomePage = () => {
  



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
const api = axios.create({
  baseURL: 'http://localhost:5001/',
 });

const [products, setProducts] = useState([]);

React.useEffect(() => {
  api.get('/getall')
  .then(res=>{console.log(res.data)
    setProducts(res.data)})
    .catch(error=>{console.log(error)})
}, []);
console.log(products)
if (!products) return null;
console.log(products)


  return (
      <>

      <NavBar handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick}></NavBar>
      <LoginForm isShowLogin={isShowLogin} RegClick={RegClick} handleLoginClick={handleLoginClick}/> 
      <Register isShowRegister={isShowRegister} LoginClick={LoginClick} handleRegisterClick={handleRegisterClick}></Register>
     <NavBar2></NavBar2>
     <Slider></Slider>
     <HomeProducts products={products}></HomeProducts>
     <Footer></Footer>
      </>
  )
}

export default HomePage;
