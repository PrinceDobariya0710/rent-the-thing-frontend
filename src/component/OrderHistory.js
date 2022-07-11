import React from 'react';
import "./OrderHistory.css";
import { Product, products } from '../data';
export const OrderHistory = () => {
  return (
    <main className='ordermain'>
        <section className='producthmain'>
        {Product.map((item)=>(
        <section className='producthcontainer'>
        <section className='column1'>
          <img src={item.product.product_image} height="150px" width="150px"/>
        </section>
        <section className='column2'>
            Product Name: {item.product.productName}<br></br>
            {item.attribute.attributeTitle}: {item.attributeValue}<br></br>
            Duration: {item.product.productDurationRates.duration} <br></br>
            Price: {item.product.value_duration}<br></br>
            Seller: {item.product.userDetailsId.firstName} {item.product.userDetailsId.lastName}
        </section>
        <section className='column3'>
            <p>Status</p>
            <h6>Pending</h6>
        </section>
        <section className='column3'>
          <p>Issue Date</p>
          <h6>7/05/2022</h6>
        </section>
        <section className='column3'>
          <p>Return Date</p>
          <h6>7/05/2022</h6>
        </section>
        <section className='column3'>
          <p>OrderType</p>
          <h6>OrderType</h6>
        </section>
       </section>

      ))
      }
        </section>
    </main>
  )
}
