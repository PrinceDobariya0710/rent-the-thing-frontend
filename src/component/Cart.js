import React from 'react';
import styled from 'styled-components';
import { Product, products } from '../data';
import { mobile ,tablet} from "../Responsive";
import "./Cart.css";
import CloseIcon from '@mui/icons-material/Close';

export const Cart = () => {
  return (
    <main className='cartmain'>
      <section className='productmain'>
      {Product.map((item)=>(
        <section className='productcontainer'>
        <section className='c1'>
          <img src={item.product.product_image} height="150px" width="150px"/>
        </section>
        <section className='c2'>
            Product Name: {item.product.productName}<br></br>
            {item.attribute.attributeTitle}: {item.attributeValue}<br></br>
            Duration: {item.product.productDurationRates.duration} <br></br>
            Price: {item.product.value_duration}<br></br>
            Seller: {item.product.userDetailsId.firstName} {item.product.userDetailsId.lastName}
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