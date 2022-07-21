import React, { useEffect, useContext, useState } from 'react';
import "./OrderHistory.css";
import { Product, products } from '../data';
import axios from 'axios';
import { LoginContext } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';

export const OrderHistory = () => {
  let data;
  const navigate = useNavigate()
  const [getdata, setgetdata] = useState([])
  const { isToken, userid, userdetailId } = useContext(LoginContext)
  const getCategoryProduct = async () => {
    // console.log(params.id)
      const create = axios.create({
        baseURL: `http://localhost:8080/orders/order/get/user_history/${sessionStorage.getItem('userdetail')}`,
        timeout: 1000 * 60 * 60,
        headers: { 'Authorization': 'Bearer ' + isToken }
      });
      let res = await create.get(``)
      data = res.data
      console.log(data)
      setgetdata(data)
  }
  useEffect(() => {
    getCategoryProduct()
  }, []);

  return (
    <main className='ordermain'>
      <section className='producthmain'>
        {getdata.map((item) => (
          <section className='producthcontainer'>
            <section className='column1'>
              <img src={`/ecommerce-photos/${item.product.product_image}`} height="150px" width="150px" />
            </section>
            <section className='column2'>
              Product Name: {item.product.productName}<br></br>
              Size : {item.clothingProduct.size}<br></br>
              Duration: {item.product.productDurationRates.duration} <br></br>
              Price: {item.product.value_duration}<br></br>
              Seller: {item.product.userDetailsId.firstName} {item.product.userDetailsId.lastName}
            </section>
            <section className='column3'>
              <p>Status</p>
              <h6>{item.orderStatus.orderStatus}</h6>
            </section>
            <section className='column3'>
              <p>Issue Date</p>
              <h6>{item.issuedDate}</h6>
            </section>
            <section className='column3'>
              <p>Return Date</p>
              <h6>{item.returnDate}</h6>
            </section>
            <section className='column3'>
              <p>OrderType</p>
              <h6>{item.orderType.orderType}</h6>
            </section>
          </section>
        ))
        }
      </section>
    </main>
  )
}
