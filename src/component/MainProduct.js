import React,{useState,useEffect, Component} from 'react';
import styled from "styled-components";
import { mobile ,tablet} from "../Responsive";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Container = styled.header`
  padding-left:6%;
  margin-top:20px;
  width:90%;
  ${mobile({ flexDirection: "column" ,fontSize:"12px",paddingLeft:"10%"})}
`;

const Wrapper = styled.header`
display: inline-block;
  align-items: center;
  justify-content:center;
`;

const ImgContainer = styled.section`
  height: 300px;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
  ${mobile({ height: "250px", width:"250px" ,padding:"0px"})}
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
  ${mobile({ fontSize:"17px" })}
`;

const Card = styled.article`
  height: 404px;
  margin:60px;
  border:1px solid gray;
  width:220px;
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
  //  flex: 1;
  // padding: 10px;
  // margin-top:12px;
  width:200px;
  justify-content:center;
  ${mobile({padding:"0px" })}
`;

let data
export const MainProduct = () => {
    const params = useParams()
    console.log(params.id)
    const [dataLoad,setdataLoad] = useState()

    const getCategoryProduct = async() =>{
        console.log(params.id)
        let res = await axios.get(`http://localhost:8084/products/cloth-product/get-categorywise-cproduct/?subcategory-id=${params.id}`)
        console.log(res)
        data =  res.data
        console.log(data)
        setdataLoad(data)
      }
      
      useEffect(() => {
        getCategoryProduct()
    }, [ getCategoryProduct]);

  return (
    <Container>
    {dataLoad?.map((item) => ( <Wrapper>
   
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
 </Wrapper>))}
 </Container>
    
  )
}

export default MainProduct
