import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Product, products } from '../data';
import { mobile, tablet } from "../Responsive";
import "./Notification.css";
import CloseIcon from '@mui/icons-material/Close';
import { LoginContext } from '../context/LoginContext';

export const Notification = () => {

  let data;
  const [getdata, setgetdata] = useState([])
  const { isToken, userid, userdetailId } = useContext(LoginContext)

  const getNotification = async () => {
    // console.log(params.id)
    if ({ userdetailId }.userdetailId != null) {
      const create = axios.create({
        baseURL: `http://localhost:8080/orders/notifications/get/owner/${userdetailId}`,
        timeout: 1000 * 60 * 60,
        headers: { 'Authorization': 'Bearer ' + isToken }
      });
      let res = await create.get(``)
      data = res.data
      console.log(data)
      setgetdata(data)
    }
    else {
      alert("Please fill your User Details before accessing this page.")
    }
  }

  const confirmOrder = async (id) => {

    const create = axios.create({
      baseURL: `http://localhost:8080/orders/order/changestatus/2/${id}`,
      timeout: 1000 * 60 * 60,
      headers: { 'Authorization': 'Bearer ' + isToken }
    });
    let res = await create.put(``)
    console.log(res.data)
    getNotification();
  }

  const cancelOrder = async (id) => {
    const create = axios.create({
      baseURL: `http://localhost:8080/orders/order/changestatus/3/${id}`,
      timeout: 1000 * 60 * 60,
      headers: { 'Authorization': 'Bearer ' + isToken }
    });
    let res = await create.put(``)
    console.log(res.data)
    getNotification();
  }

  useEffect(() => {
    getNotification()
  }, []);

  return (
    <main className='cartmain'>
      <section className='productmain'>
        {getdata.map((item) => (
          <section className='productcontainer'>
            <section className='c1'>
              <img src={`/ecommerce-photos/${item.order.product.product_image}`} height="150px" width="150px" />
            </section>
            <section className='c2'>
              Product Name: {item.order.product.productName}<br></br>
              {/* {item.attribute.attributeTitle}: {item.attributeValue}<br></br> */}
              Duration: {item.order.product.productDurationRates.duration} <br></br>
              Price: {item.order.product.value_duration}<br></br>
              Seller: {item.order.product.userDetailsId.firstName} {item.ownerUser.lastName}
            </section>
            <section className='c3'>
              {console.log(item.order.orderId)}
              <button className='confirm' onClick={() => confirmOrder(item.order.orderId)}>Confirm</button><br />
              <button className='decline' onClick={() => cancelOrder(item.order.orderId)}>Decline</button>
            </section>
          </section>
        ))
        }
      </section>

    </main>
  )
}

export default Notification