import React from 'react';
import styled from 'styled-components';
import { Product, products } from '../data';
import { mobile ,tablet} from "../Responsive";
import "./Notification.css";
import CloseIcon from '@mui/icons-material/Close';

export const Notification = () => {
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
            <button className='confirm'>Confirm</button>
            <button className='decline'>Decline</button>
        </section>
       </section>
      ))
      }
      </section>

    </main>
  )
}

export default Notification