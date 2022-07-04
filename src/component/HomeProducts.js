import React from 'react';
import { useState,useEffect } from "react";
import styled from "styled-components";
import ProductDetailPage from '../Pages/ProductDetailPage';
// import { products ,AllProducts } from "../data";
import { mobile ,tablet} from "../Responsive";
// const imageBaseUrl =  "./../ecommerce-photos/";
import axios from 'axios';

const Container = styled.header`
  display: flex;
  // padding-left:3%;
  width:80%;
  ${mobile({ flexDirection: "column" ,fontSize:"12px",paddingLeft:"0%"})}
  ${tablet({ paddingLeft:"0%",flexDirection: "column",columnCount: "2"})}
`;
const Main = styled.section
`

`;
const Wrapper = styled.section`
 
  display: inline-block;
  align-items: center;
  justify-content:center;
`;

const ImgContainer = styled.section`
  height: 300px;
  flex: 1;
`;

const Image = styled.img`
  height: 350px;
  ${mobile({ height: "250px", width:"250px" ,padding:"0px"})}
`;

const Button = styled.button`
  padding:5px;
  font-size: 10px;
  width:18.2%;
  background-color: transparent;
  cursor: pointer;
  position:absolute;
  background-color:blue;
  margin-top:330px;
  color:white;
  ${mobile({ fontSize:"10px",padding:"2px" ,})}
`;

const Title = styled.h1`
  font-size: 20px;
  ${mobile({ fontSize:"17px" })}
`;

const Card = styled.article`
  width: 30%;
  height: 500px;
  display: inline-block;
  padding:60px;
  background-color: #${(props) => props.bg};
  ${mobile({ height: "40vh", width:"60%",padding:"5px"})}
  ${tablet({ height: "40vh",width:"40%"})}
`;


const Amount = styled.p`
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 3px;
  ${mobile({ fontSize:"13px" })}
`;

const InfoContainer = styled.section`
  flex: 1;
  padding: 10px;
  margin-top:12px;
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
      <Main>
      {console.log(pro)}
       {productData?.map((item) => ( <Wrapper>
        <Card key={item.product.id}>
       <ImgContainer>
         <Image src={`/ecommerce-photos/${item.product.product_image}`} height="30%" width="250x"/>
         <InfoContainer>
         <Title>{item.product.productName}</Title>
         <Amount>Rs{item.product.value_duration}</Amount>
       </InfoContainer>
       </ImgContainer>
     </Card>
    </Wrapper>))}
    </Main>
    </Container>
  )
}

export default HomeProducts;
