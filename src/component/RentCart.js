import React from 'react';
import styled from 'styled-components';
import { Product } from '../data';
import { mobile ,tablet} from "../Responsive";
const Conatiner = styled.main
`
    width:100vw;
    display:flex;
    margin-top:3%;  
`;
const Wrapper = styled.section
`
    width:100vw;
`;
const ImgContainer = styled.section
`

`;
const Image = styled.img`
  height: 200px;
  ${mobile({ })}
`;
const ButtonPlus = styled.button`
  font-size: 16px;
  width:100%;
  height:12%;
  background-color: transparent;
  cursor: pointer;
  background-color:#cecece;
  margin-top:15%;
  margin-left:80%;
  border: 2px solid black;
  border-radius: 50%;
  // padding: 5px 5px 5px 5px;
  color:black;
  padding-top: 0px;
  padding-right: 7px;
  padding-bottom: 5px;
  padding-left: 7px;
  ${mobile({ })}
`;
const ButtonMinus = styled.button`
  font-size: 16px;
  width:100%;
  height:12%;
  background-color: transparent;
  cursor: pointer;
  background-color:#cecece;
  margin-top:15%;
  margin-left:5%;
  border: 2px solid black;
  border-radius: 50%;
  // padding: 10px;
  padding-top: 0px;
  padding-right: 9px;
  padding-bottom: 5px;
  padding-left: 9px;
  color:black;
  ${mobile({ })}
`;
const Title = styled.h1`
  font-size: 20px;
  ${mobile({ })}
`;

const Card = styled.div`
  width: 30%;
  display:flex;
  flex-direction:row;
  height: 250px;
  margin-left:10%;
  background-color: #${(props) => props.bg};
  ${mobile({ height: "40vh", width:"60%"})}
  ${tablet({ height: "40vh",width:"40%"})}
`;


const Detail = styled.p`
  font-size: 15px;
  ${mobile({ fontSize:"13px" })}
`;

const InfoContainer = styled.div`
  margin-left:25%;
  width:200px;
  position:absolute;
  margin-top:1%;
  ${mobile({padding:"0px" })}
`;

const Qty = styled.p`
  margin-left:5%;
  margin-top:15%;
`;
const ConfirmOrder = styled.button
`
font-size: 16px;
  width:100%;
  height:12%;
  background-color: transparent;
  cursor: pointer;
  background-color:#cecece;
  margin-top:15%;
  margin-left:20%;
  border: 2px solid black;
  border-radius: 12px;
  // padding: 10px;
  color:black;

`;
const Status = styled.p
`
  margin-top:0%;
  margin-left:10%;
`;
export const RentCart = () => {
  return (
    <Conatiner>
        {Product?.map((item) => (  
            <Wrapper>
                <Card key={item.product.id}>
                    <ImgContainer>
                    <Image src={item.product.product_image} height="30%" width="250x"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.product.productName}</Title>
                        <Detail>Rs{item.product.value_duration}</Detail>
                        <Detail>{item.attribute.attributeTitle} : {item.attributeValue}</Detail>
                        <Detail>{item.product.productDurationRates.duration} : {item.product.value_duration}</Detail>
                        <Detail>{item.product.userDetailsId.firstName} {item.product.userDetailsId.lastName}</Detail>
                        <Status>Pending</Status>                    
                    </InfoContainer>
                    <ButtonPlus>+</ButtonPlus>
                    <Qty>0</Qty>
                    <ButtonMinus>-</ButtonMinus>
                    <ConfirmOrder>ConfirmOrder</ConfirmOrder>
                  </Card>     
            </Wrapper> 
        ))
        }
    </Conatiner>
  )
}
