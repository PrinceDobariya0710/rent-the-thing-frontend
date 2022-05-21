import React from 'react';
import { useState } from "react";
import styled from "styled-components";
import { products } from "../data";
import { mobile } from "../Responsive";

const Container = styled.header`
  display: flex;
  padding-left:15%;
  ${mobile({ flexDirection: "column" ,fontSize:"12px",paddingLeft:"14%"})}
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
  ${mobile({ height: "250px", width:"250px" ,padding:"3px"})}
`;

const Button = styled.button`
  padding:5px;
  font-size: 10px;
  background-color: transparent;
  cursor: pointer;
  ${mobile({ fontSize:"9px",padding:"2px" })}
`;

const Title = styled.h1`
  font-size: 20px;
  ${mobile({ fontSize:"14px" })}
`;

const Card = styled.article`
  width: 100%;
  height: 500px;
  display: inline-block;
  align-items: center;
  padding:10px;
  background-color: #${(props) => props.bg};
  ${mobile({ height: "40vh" })}
`;


const Amount = styled.p`
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 3px;
  ${mobile({ fontSize:"10px" })}
`;

const InfoContainer = styled.section`
//   flex: 1;
  padding: 10px;
  background-color:;
  ${mobile({padding:"0px" })}
`;

export const HomeProducts = () => {
    const [productIndex, setproductIndex] = useState(0);
  return (
    <Container>
        <Wrapper>
      {products.map((item) => (
        <Card key={item.id}>
          <ImgContainer>
            <Image src={item.img} />
            <InfoContainer>
            <Title>{item.name}</Title>
            <Amount>Rs.{item.amount}</Amount>
            {/* <Button>VIEW PRODUCT</Button> */}
          </InfoContainer>
          </ImgContainer>
        </Card>
      ))}
    </Wrapper>
    </Container>
  )
}

export default HomeProducts;
