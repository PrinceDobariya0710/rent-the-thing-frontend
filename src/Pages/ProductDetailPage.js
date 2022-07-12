import { Close} from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';
import ProductDetail2 from '../component/ProductDetail2';
import { mobile, tablet } from '../Responsive';

const MainContainer = styled.main`
margin: auto;
padding: 5px;
width: 70vw;
position :absolute;
top:300px;
left:10px;
right: 10px;
border: 1px solid black;
background-color: azure;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
border-radius: 10px;
${mobile({margin:"3%",width:"94vw", top:"100px",left:"5px",right:"5px"})}
${tablet({margin:"auto",width:"94vw"})}
`;

const ProductDetailPage = ({ key , isShowProduct,closeProduct,handleCloseClick}) => {
  return (
    <MainContainer className={`${!isShowProduct ? "active" : ""} show`}>
        <Close></Close>
        <ProductDetail2></ProductDetail2>
    </MainContainer>
  )
}

export default ProductDetailPage;