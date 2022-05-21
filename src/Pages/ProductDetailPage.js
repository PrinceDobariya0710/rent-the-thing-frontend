import React from 'react'
import styled from 'styled-components';
import ProductDetail2 from '../component/ProductDetail2';
import { mobile } from '../Responsive';


const MainContainer = styled.main`
margin: auto;
padding: 5px;
width: 70vw;
border: 1px solid black;
background-color: azure;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
border-radius: 10px;
${mobile({margin:"3%",width:"94vw"})}
`;

const Wrapper = styled.article`

`;





const ProductDetailPage = () => {
  return (
    <MainContainer>
        <ProductDetail2></ProductDetail2>
    </MainContainer>
  )
}

export default ProductDetailPage