import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  height: 3%;
  background-color:#F7E9D7;
  align-items: center;
  padding: 0.5%;
  ${mobile({  })}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  
  ${mobile({ })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;


const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;


const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "18px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({})}
`;

const MenuItem = styled.section`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  padding: 5%;
  ${mobile({ fontSize: "10px", marginLeft: "8px" })}
`;
// ${mobile({ fontSize: "8px", marginLeft: "8px" })}
const NavBar = ({handleLoginClick,handleRegisterClick})=>
{
    return (
      <Container>
        <Wrapper>
          <Left>
            <Logo>RentTheThing</Logo>
            <SearchContainer>
                <Input placeholder="Search" />
                <SearchIcon style={{ color: "gray", fontSize: 14, width: 20, height: 20 }} />
              </SearchContainer>
          </Left>
          <Right>
            <MenuItem onClick={handleRegisterClick}>REGISTER</MenuItem>
            <MenuItem onClick={handleLoginClick}>SIGN IN</MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    );
}
export default NavBar;