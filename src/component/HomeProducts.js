import React from 'react';
import { useState,useEffect } from "react";
import styled from "styled-components";
import ProductDetailPage from '../Pages/ProductDetailPage';
import { mobile ,tablet} from "../Responsive";
import axios from 'axios';

const Container = styled.header`
  padding-left:6%;
  width:90%;
  ${mobile({ flexDirection: "column" ,fontSize:"12px",paddingLeft:"0%"})}
  ${tablet({ paddingLeft:"0%",flexDirection: "column",columnCount: "2"})}
`;

const Wrapper = styled.section`
  display: inline-block;
  align-items: center;
  justify-content:center;
`;

const ImgContainer = styled.section`
  height: 79%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
  ${mobile({ height: "250px" ,padding:"0px"})}
`;

const Button = styled.button`
  padding:8px 25px;
  font-size: 10px;
  background-color: transparent;
  width:100%;
  background-color:#F7E9D7;
  border:none;
  border-top: 1px solid gray;
  ${mobile({ fontSize:"10px",padding:"2px" ,})}
`;

const Title = styled.h1`
  font-size: 20px;
  ${mobile({  })}
`;

const Card = styled.article`
  height: 20%;
  // display: inline-block;
  margin:60px;
  border:1px solid gray;
  width:220px;
  ${mobile({ height: "40vh", width:"60%",padding:"5px"})}
  ${tablet({ height: "50vh",width:"50%"})}
`;
const Amount = styled.p`
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 3px;
  margin-bottom:1px;
  ${mobile({ fontSize:"13px" })}
`;

const InfoContainer = styled.section`
  // flex: 1;
  // padding: 10px;
  // margin-top: 5px;
  width:200px;
  justify-content:center;
  ${mobile({padding:"0px"})}
`;

export const HomeProducts = () => {
let pro

const [productData,setProductData]=useState()
  const getLatestProduct = async() =>{
    let res = await axios.get(`http://localhost:8084/products/cloth-product/get/all-cproducts/`)
    setProductData(res.data)  
    console.log(productData)
  }
  useEffect(() => {
    getLatestProduct()
  },[] );
  
  // const [isShowProduct,setIsShowProduct] = useState(false)
  // const handleProductClick = () => {
  //     if(closeProduct===false)
  //     {
  //       setIsShowProduct((isShowProduct) => !isShowProduct)
  //     }else{
  //       setIsShowProduct((isShowProduct) => isShowProduct)
  //     }
  //     console.log("product view click")
  //   }
  
  // const [closeProduct,setCloseProduct] = useState(false)
  // const handleCloseClick = () => {
  //     if(isShowProduct===false)
  //     {
  //       setCloseProduct((closeProduct) => !closeProduct)
  //     }
  //     else{
  //       setCloseProduct((closeProduct) => closeProduct)
  //     }
  //     console.log("close view click")
  //   }

  return (
    <Container>
      {console.log(pro)}
       {productData?.map((item) => ( <Wrapper>
        <Card key={item.product.id}>
        <ImgContainer>
         <Image src={`/ecommerce-photos/${item.product.product_image}`} height="30%" width="100%"/>
         </ImgContainer>
         <InfoContainer>
         <Title>{item.product.productName}</Title>
         <Amount>Rs{item.product.value_duration}</Amount>
       </InfoContainer>
       <Button>AddToCart</Button>
     </Card>
    </Wrapper>
    ))}
    </Container>
  )
}

export default HomeProducts;