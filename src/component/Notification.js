import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Product, products } from '../data';
import { mobile, tablet } from "../Responsive";
import "./Notification.css";
import CloseIcon from '@mui/icons-material/Close';
import { LoginContext } from '../context/LoginContext';
import {useNavigate} from 'react-router-dom';

export const Notification = () => {
  const navigate = useNavigate();
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
      navigate(`/profile`)
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
  const completeOrder = async (id) => {
    const create = axios.create({
      baseURL: `http://localhost:8080/orders/order/changestatus/4/${id}`,
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
              Seller: {item.order.product.userDetailsId.firstName} {item.ownerUser.lastName}<br></br>
              Status : {item.order.orderStatus.orderStatus}
            </section>
            <section className='c3'>
              {console.log(item.order.orderId)}
              {
                item.order.orderStatus.orderStatus == "Accepted and On Rent" &&
                <button className='completed' onClick={() => completeOrder(item.order.orderId)}>completed</button>
              }
              {
                item.order.orderStatus.orderStatus == "Notified to owner" &&
                <>
                <button className='confirm' onClick={() => confirmOrder(item.order.orderId)}>Confirm</button><br />
                <button className='decline' onClick={() => cancelOrder(item.order.orderId)}>Decline</button>
                </>
              }
              {item.order.orderStatus.orderStatus == "Returned and Completed" && item.order.orderStatus.orderStatus == "Rejected" &&
                <>
                </>
              }
            </section>
          </section>
        ))
        }
      </section>

    </main>
  )
}

export default Notification