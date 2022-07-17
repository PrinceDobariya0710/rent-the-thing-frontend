import React,{ useContext,useEffect,useState } from 'react';
import styled from 'styled-components';
import { Product, products } from '../data';
import { mobile ,tablet} from "../Responsive";
import "./Cart.css";
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { LoginContext } from '../context/LoginContext';

export const Cart = () => {
  let rentproduct
  const [rentdata,setrentdata] = useState([])
  const {isToken,userdetailId} = useContext(LoginContext)
  const getCartProduct = async() =>
  {
    console.log(userdetailId)
    console.log(isToken)
    const create = axios.create({
      baseURL: `http://localhost:8080/orders/order/get/rent_cart/${userdetailId}`,
      timeout: 1000*60*60,
      headers: {'Authorization': 'Bearer '+isToken}
    });
    let res = await create.get(``)
    console.log(res.data)
    setrentdata(res.data)
  }
  useEffect(() => {
    getCartProduct()
  },[] );

  return (
    <main className='cartmain'>
      <section className='productmain'>
      {rentdata.map((item)=>(
        <section className='productcontainer'>
        <section className='c1'>
          <img src={`/ecommerce-photos/${item.product.product_image}`} height="150px" width="150px"/>
        </section>
        <section className='c2'>
            Product Name: {item.product.productName}<br></br>
            {/* {item.attribute.attributeTitle}: {item.attributeValue}<br></br> */}
            Duration: {item.product.productDurationRates.duration} <br></br>
            Price: {item.product.value_duration}<br></br>
            Seller: {item.product.userDetailsId.firstName} {item.product.userDetailsId.lastName}<br></br>
            <button className='confirm'>Confirm</button>
        </section>
        <section className='c3'>
            <CloseIcon></CloseIcon>
        </section>
       </section>
      ))
      }
      </section>
      <section className='total'>
        <h5>PRICE DETAILS</h5>
        <hr></hr>
        {Product.map((item) =>
        (
          <artical className='price'>
            <p>{item.product.productName}</p>
            <p>{item.product.value_duration}</p>
          </artical>
        )
        )}
        <hr></hr>
        <article className='price'>
            <h5>TOTAL</h5>
            <h5>5000</h5>
            {/* <p>{item.product.value_duration}</p> */}
          </article>
      </section>
    </main>
  )
}

export default Cart