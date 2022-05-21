import React from 'react'
import styled from 'styled-components';
import { mobile , tablet } from '../Responsive';
import {Contact, Product , RenterAddress} from "../data";
import { Fab, Rating} from '@mui/material';
import { CurrencyRupee } from '@mui/icons-material';
import RenterAddressDetail from './RenterAddressDetail';
import RenterContact from './RenterContact';


const Wrapper = styled.article`

`;


const MainContainer = styled.main`
border: 1px solid black;
border-radius: 10px;
width: 100%;
height: 90;
display: flex;
flex-direction: row;
flex-wrap: wrap;
${mobile({flexDirection:"column"})}
${tablet({width:"100%"})}
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
${tablet({width:"100%"})}
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

const ProductDetail2 = () => {
  return (
    <Wrapper>
        {Product.map(item=>(
    <MainContainer>
        <RightContainer>
            <ProductHeaderContainer>
                <HeaderText fontWeight="600" fontAlign="left">{item.product.productName} 
                  <H5Text fontSizeH5="1.1rem" fontWeightH5="400">({item.product.subcategory.cateGory.category_name} - {item.product.subcategory.subCategory_name})</H5Text>
                </HeaderText>
                <H3Text fontWeight="300" fontAlign="left">Ratings :<Rating name="read-only"  value={item.product.Rating} readOnly size="small"></Rating></H3Text>
            </ProductHeaderContainer>
            <ImageContainer>
            <hr></hr>
              <Image src={item.product.product_image}/>
            </ImageContainer>
        </RightContainer>
        <ProductDetailContainer>
            <H3Text fontWeight="500" fontAlign="left" textDeco="solid">
            Available pieces : <Fab color="primary" aria-label="available pieces" size="small">{item.product.available_pieces}</Fab>
            </H3Text>
            <H3Text fontWeight="400" fontAlign="left">About this Product</H3Text>
            <hr/>
            <AboutProductList fontAlign="left" fontSize="1.1rem">
              <ListItem><H5Text fontSizeH5="1.0em">Size : </H5Text>{item.attributeValue} </ListItem>
              <hr/>
              <ListItem><H5Text fontSizeH5="1.0em">Description : </H5Text>{item.product.product_description}</ListItem>
              <hr/>
              <ListItem><H5Text fontSizeH5="1.0em">Pricing :</H5Text>
              <hr/>
                <AboutProductList>
                  <ListItem><H5Text fontSizeH5="1.1rem" fontAlignH5="left">Rent price per {item.product.productDurationRates.duration} : {item.product.value_duration}<CurrencyRupee fontSize='small'/></H5Text></ListItem>
                  <ListItem><H5Text fontSizeH5="1.1rem" fontAlignH5="left">Product Price : {item.product.product_rate}<CurrencyRupee fontSize='small'/></H5Text></ListItem>
                  <ListItem><H5Text fontSizeH5="1.1rem" fontAlignH5="left">Deposite : {item.product.deposit}<CurrencyRupee fontSize='small'/></H5Text></ListItem>
                </AboutProductList>
              </ListItem>
              <ListItem><H5Text fontSizeH5="1.0em">Renter info :</H5Text>
              <hr/>
              <RenterContainer>
                <AddressContainer>
                {RenterAddress.map(item=>(<AboutProductList>
                <ListItem><ParaText>Rented By : {item.userDetails.firstName}</ParaText></ListItem>
                  <RenterAddressDetail item={item} key={item.id} />
                </AboutProductList>))}
                </AddressContainer>
                <ContactContainer> 
                {Contact.map(item=>(<AboutProductList>
                  <RenterContact item={item} key={item.id}/>
                </AboutProductList>))}           
                      
                </ContactContainer>
              </RenterContainer>
              </ListItem>
            </AboutProductList>
        </ProductDetailContainer>

    </MainContainer>
    ))}
    </Wrapper>
  )
}

export default ProductDetail2