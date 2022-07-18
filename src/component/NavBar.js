import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import React,{useState} from "react";
import styled from "styled-components";
import { mobile,tablet } from "../Responsive";
import { Link } from "react-router-dom";

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
  ${tablet({ })}
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


const Logo = styled(Link)`
  font-weight: bold;
  color:black;
  text-decoration:none;
  font-size:3rem;
  ${tablet({ fontSize: "20px" })}
  ${mobile({ fontSize: "18px" })}
  &:hover{
    color:black;
  }
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
  ${tablet({ fontSize: "14px" })}
  ${mobile({ fontSize: "10px", marginLeft: "8px" })}
`;

const MenuLink = styled(Link)
`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
padding: 5%;
color:black;
${tablet({ fontSize: "14px" })}
${mobile({ fontSize: "10px", marginLeft: "8px" })}

`;
// ${mobile({ fontSize: "8px", marginLeft: "8px" })}
const NavBar = ({handleLoginClick,handleRegisterClick})=>
{
  const [Auth,setAuth] = useState(false)
  const AuthFunction = () =>
  {
    let d = sessionStorage.getItem('temp')
    console.log(d)
  setAuth(d)
  }
  React.useEffect(() => {
    AuthFunction()
  }, [])
  const logout = () =>
  {
    sessionStorage.removeItem('temp');
    sessionStorage.clear();
  }
    return (
      <Container>
        <Wrapper>
          <Left>
            <Logo to="/">RentTheThing</Logo>
            <SearchContainer>
                <Input placeholder="Search" />
                <SearchIcon style={{ color: "gray", fontSize: 14, width: 20, height: 20 }} />
              </SearchContainer>
          </Left>
          <Right>
            {
                Auth ? 
                <MenuItem onClick={logout}>Logout</MenuItem>:
                <>
                <MenuItem onClick={handleRegisterClick}>REGISTER</MenuItem>
                <MenuItem onClick={handleLoginClick}>SIGN IN</MenuItem>
                </>
            }
            <MenuLink to="/cart">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </MenuLink>
          </Right>
        </Wrapper>
      </Container>
    );
}
export default NavBar;