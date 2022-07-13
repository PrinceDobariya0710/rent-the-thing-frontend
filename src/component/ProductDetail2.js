import React from 'react'
import styled from 'styled-components';
import { mobile , tablet } from '../Responsive';
import {Contact, RenterAddress} from "../data";
import { Fab, Rating} from '@mui/material';
import { Close, CurrencyRupee } from '@mui/icons-material';
import RenterAddressDetail from './RenterAddressDetail';
import RenterContact from './RenterContact';
import axios from 'axios';
import { useState,useEffect } from "react";

const Wrapper = styled.article`

`;

const MainContainer = styled.main`
border: 1px solid black;
border-radius: 10px;
width: 100%;
height: 90;
display: flex;
flex-direction: row;
${mobile({flexDirection:"column"})}
${tablet({width:"100%",flex:"1"})}
`;

const RightContainer = styled.section`
background-color: white;
border: 1px solid black;
border-radius: 6px;
margin: 5px;
display: flex;
flex-direction: column;
padding:2%;
${mobile({margin:"2%",height:"10%"})}
${tablet({width:"100%",flex:"1"})}
`;

const ProductHeaderContainer = styled.article`
font-weight: 600;

`;
const ImageContainer = styled.article`
height: 60vh;
max-width:100%;
max-height:100%;
width: auto;
${mobile({height:"8%"})}
`;

const ParaText = styled.p`

`;
const HeaderText = styled.h2`
font-weight: ${(props) => props.fontWeight};
text-align:${(props) => props.fontAlign};
`;

const H3Text = styled.h3`
font-weight: ${(props) => props.fontWeight};
text-align:${(props) => props.fontAlign};
font-size: 1.4rem;
text-decoration:  ${(props) => props.textDeco} ;
`;

const H5Text = styled.h5`
font-weight: ${(props) => props.fontWeightH5};
text-align:${(props) => props.fontAlignH5};
font-size:${(props) => props.fontSizeH5}; ;
background-color: ${(props) => props.bgColorH5};
`;

const Image = styled.img`
width: 100%;
height: 100%;
display: block;
object-fit: cover;
cursor: grab;
`;

const ProductDetailContainer = styled.section`
background-color: white;
border: 1px solid black;
border-radius: 6px;
margin: 5px;
flex: 1;
padding: 10px;
${mobile({margin:"2%",height:"10%"})}
`;

const AboutProductList = styled.ul`
font-weight: ${(props) => props.fontWeight};
text-align:${(props) => props.fontAlign};
font-size:${(props) => props.fontSize}; 
`;

const RenterContainer = styled.article`
display: flex;
flex-direction: row;
${mobile({flexDirection:"column"})}

`;

const AddressContainer = styled.section`

`;
const ContactContainer = styled.section`

`;

const ListItem = styled.li`

`;
const AddToCartButton = styled.button`
background:#f5a742;
position: relative;
font-size: 0.8rem;
margin: 5px;
padding: 5px;
border: 1px solid balck;
border-radius: 2%;
${mobile({width:"30%",top:"5%",left:"65%"})}
${tablet({width:"12%",top:"15%",left:"30%"})}
`;

const ProductDetail2 = ({id}) => {
  const [DetailData,setDetailData]=useState()
  const [AddressData,setAddressData]=useState()
  const [ContactData,setContactData]=useState()
  let data
  let token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZDEyQGdtYWlsLmNvbSIsInJvbGUiOnsicm9sZV9pZCI6Miwicm9sZV9uYW1lIjoiQURNSU4ifSwiaWQiOjE5LCJleHAiOjE2NTc2ODI1MTgsImlhdCI6MTY1NzY0NjUxOH0.qEwiV4ozWgpCT_GgbHvI3mCjhnePM6qG2ibh6eiAv2Q"
  const getDetailProduct = async() =>{
    const create = axios.create({
      baseURL: `http://localhost:8084/products/product/product_by_product_id/?product_id=${id}`,
      timeout: 1000,
      headers: {'Authorization': 'Bearer '+token}
    });
    let res = await create.get(``)
    data = res.data
    console.log(data)
    setDetailData(data)
    setAddressData(data.userDetails.address.data)
    setContactData(data.userDetails.contact.data)
  }
  useEffect(() => {
    getDetailProduct()
  },[] );
  return (

    <Wrapper>
    {/* {data?.map((item) => ( */}.
    <MainContainer>
        <RightContainer>
            <ProductHeaderContainer>
                <HeaderText fontWeight="600" fontAlign="left">{DetailData?.clothingProducts.product.productName} 
                {/* <AddToCartButton>ADD TO CART</AddToCartButton> */}
                  <H5Text fontSizeH5="1.1rem" fontWeightH5="400">({DetailData?.clothingProducts.product.subcategory.cateGory.category_name} - {DetailData?.clothingProducts.product.subcategory.subCategory_name})</H5Text>
                </HeaderText>
                {/* <H3Text fontWeight="300" fontAlign="left">Ratings :<Rating name="read-only"  value={DetailData?.product.Rating} readOnly size="small"></Rating></H3Text> */}
            </ProductHeaderContainer>
            <ImageContainer>
            <hr></hr>
              <Image src={`/ecommerce-photos/${DetailData?.clothingProducts.product.product_image}`}/>
            </ImageContainer>
        </RightContainer>
        <ProductDetailContainer>
            <H3Text fontWeight="500" fontAlign="left" textDeco="solid">
            Available pieces : <Fab color="primary" aria-label="available pieces" size="small">{DetailData?.clothingProducts.product.available_pieces}</Fab>
            </H3Text>
            <H3Text fontWeight="400" fontAlign="left">About this Product</H3Text>
            <hr/>
            <AboutProductList fontAlign="left" fontSize="1.1rem">
              <ListItem><H5Text fontSizeH5="1.0em">Size : </H5Text>{DetailData?.clothingProducts.size} </ListItem>
              <hr/>
              <ListItem><H5Text fontSizeH5="1.0em">Description : </H5Text>{DetailData?.clothingProducts.product.product_description}</ListItem>
              <hr/>
              <ListItem><H5Text fontSizeH5="1.0em">Pricing :</H5Text>
              <hr/>
                <AboutProductList>
                  <ListItem><H5Text fontSizeH5="1.1rem" fontAlignH5="left">Rent price per {DetailData?.clothingProducts.product.productDurationRates.duration} : {DetailData?.clothingProducts.product.value_duration}<CurrencyRupee fontSize='small'/></H5Text></ListItem>
                  <ListItem><H5Text fontSizeH5="1.1rem" fontAlignH5="left">Product Price : {DetailData?.clothingProducts.product.product_rate}<CurrencyRupee fontSize='small'/></H5Text></ListItem>
                  <ListItem><H5Text fontSizeH5="1.1rem" fontAlignH5="left">Deposite : {DetailData?.clothingProducts.product.deposit}<CurrencyRupee fontSize='small'/></H5Text></ListItem>
                </AboutProductList>
                Select the Date: <input type="date" /> 
                <AddToCartButton >ADD TO CART</AddToCartButton>
              </ListItem>
              <ListItem><H5Text fontSizeH5="1.0em">Renter info :</H5Text>
              <hr/>
              <RenterContainer>
                <AddressContainer>
                <AboutProductList>
                <ListItem><ParaText>Rented By : {DetailData?.clothingProducts.product.userDetailsId.firstName}</ParaText></ListItem>
              {/* {DetailData?.userDetails.address} */}
                  {/* <RenterAddressDetail item={AddressData} key={DetailData?.clothingProducts.product.userDetailsId} />  */}
                </AboutProductList>
                </AddressContainer>
                <ContactContainer> 
                <AboutProductList>
                  {/* <RenterContact item={ContactData} key={DetailData?.clothingProducts.product.clothingProductId}/> */}
                </AboutProductList>
                </ContactContainer>
              </RenterContainer>
              </ListItem>
            </AboutProductList>
        </ProductDetailContainer>
    </MainContainer>
    {/* ))} */}
    </Wrapper>
  )
}

export default ProductDetail2