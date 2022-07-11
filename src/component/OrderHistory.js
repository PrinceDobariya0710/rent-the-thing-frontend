import React from 'react';
import "./OrderHistory.css";
import { Product, products } from '../data';
export const OrderHistory = () => {
  return (
    <main className='ordermain'>
        <section className='producthmain'>
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
            
        </section>
       </section>
      ))
      }
        </section>
    </main>
  )
}
