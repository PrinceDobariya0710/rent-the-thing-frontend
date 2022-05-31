import React from 'react';
import { useState } from "react";
import styled from "styled-components";
import ProductDetailPage from '../Pages/ProductDetailPage';
// import { products ,AllProducts } from "../data";
import { mobile ,tablet} from "../Responsive";
// const imageBaseUrl =  "./../ecommerce-photos/";




const Container = styled.header`
  display: flex;
  padding-left:0%;
  ${mobile({ flexDirection: "column" ,fontSize:"12px",paddingLeft:"10%"})}
`;

const Wrapper = styled.header`
  height: 100%;
  display: list-item;
  
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
  padding:4px;
  background-color: #${(props) => props.bg};
  ${mobile({ height: "40vh", width:"60%"})}
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
  ${mobile({padding:"0px" })}
`;




export const HomeProducts = ({products}) => {

  const [isShowProduct,setIsShowProduct] = useState(false)
  const handleProductClick = () => {
      if(closeProduct===false)
      {
        setIsShowProduct((isShowProduct) => !isShowProduct)
      }else{
        setIsShowProduct((isShowProduct) => isShowProduct)
      }
      console.log("product view click")
    }
  
  const [closeProduct,setCloseProduct] = useState(false)
  const handleCloseClick = () => {
      if(isShowProduct===false)
      {
        setCloseProduct((closeProduct) => !closeProduct)
      }
      else{
        setCloseProduct((closeProduct) => closeProduct)
      }
      console.log("close view click")
    }

  return (
    <Container>
       {products.map((item) => ( <Wrapper>
      
        <Card key={item.id}>
          <ImgContainer onClick={handleProductClick}>
            <Image src={`ecommerce-photos/${item.product_image}` }/>
            <ProductDetailPage key={item.id} isShowProduct={isShowProduct}  closeProduct={closeProduct} handleCloseClick={handleCloseClick}/>
            <InfoContainer>
            <Title>{item.product_name}</Title>
            <Amount>Rs{item.value_per_duration}</Amount>
          </InfoContainer>
          </ImgContainer>
        </Card>
      
    </Wrapper>))}
    </Container>
  )
}

export default HomeProducts;
