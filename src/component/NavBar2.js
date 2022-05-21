import React from 'react';
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.header`
  height: 60px;
  background-color: #f4f4f4;
  ${mobile({ height: "40px",width:"100%"})}
`;
const Wrapper = styled.header`
  padding: 8px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ padding: "10px 0px" })}
`;
const MenuItem = styled.section`
  margin-top:7px;
  font-size: 17px;
  cursor: pointer;
  margin-left: 25px;
  display: inline-block;
  position: relative;
  padding-bottom:17px;
  ${mobile({ fontSize: "10px", marginLeft: "8px" })}
  &:hover{
      border-style:solid;
      border-width: 0px 0px 5px 0px;
      margin-top: 5px;
    border-radius:3px;
  }
`;
const NavBar2 = () => {
  return (
    <Container>
        <Wrapper>
            <MenuItem>All Categories</MenuItem>
            <MenuItem>My Orders</MenuItem>
            <MenuItem>Notifications</MenuItem>
            <MenuItem>Product Inventory</MenuItem>
        </Wrapper>
    </Container>
  )
}

export default NavBar2