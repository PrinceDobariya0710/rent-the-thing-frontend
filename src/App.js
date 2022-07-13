import logo from './logo.svg';
import './App.css';
import './style.css';
import './component/componentstyle.css';
import React, {useState} from "react";
import {useNavigate,BrowserRouter, Routes, Route} from 'react-router-dom';
//import ProductDetailPage from './Pages/ProductDetailPage';
import HomePage from './Pages/HomePage';
import Products from './Pages/Products';
import { CartPage } from './Pages/CartPage';
import { OrderHistoryPage } from './Pages/OrderHistoryPage';
import { ProfilePage } from './Pages/ProfilePage';
import { DetailPage } from './Pages/DetailPage';
import {LoginContext} from './context/LoginContext';
import { ManageProductPage } from './Pages/ManageProductPage';

function App() {
  const [isToken,setisToken] = useState()
  return (
    <div className="App">
      <LoginContext.Provider value={{isToken,setisToken}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products/:id" element={<Products/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path='/order' element={<OrderHistoryPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
        <Route path='/inventory' element={<ManageProductPage/>}/>
        
      </Routes>
      </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
