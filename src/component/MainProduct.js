import React,{useState,useEffect, Component} from 'react';
import styled from "styled-components";
import { mobile ,tablet} from "../Responsive";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Container = styled.header`
  display: flex;
  padding-left:0%;
  margin-top:20px;
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
  width:200px;
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
         <Image src={`/ecommerce-photos/${item.product.product_image}`} height="30%" width="250x"/>
         <InfoContainer>
         <Title>{item.product.productName}</Title>
         <Amount>Rs{item.product.value_duration}</Amount>
       </InfoContainer>
       </ImgContainer>
     </Card>
 </Wrapper>))}
 </Container>
    
  )
}

export default MainProduct
