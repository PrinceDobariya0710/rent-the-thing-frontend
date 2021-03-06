import React,{useState , useEffect} from 'react';
import styled from "styled-components";
import { mobile } from "../Responsive";
import {Link} from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios';
import MainProduct from './MainProduct';

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

const NavLink = styled(Link)`
margin-top:7px;
font-size: 17px;
cursor: pointer;
margin-left: 7%;
display: inline-block;
position: relative;
padding-bottom:17px;
color:black;
text-decoration:none;
${mobile({ fontSize: "10px", marginLeft: "8px" })}
&:hover{
    color:black;
    border-style:solid;
    border-width: 0px 0px 5px 0px;
    margin-top: 4px;
    border-radius:5px;
}
`;
const Menulink = styled(Link)
`
margin-top:5%;
font-size: 14px;
cursor: pointer;
margin-left: 15%;
padding-bottom:17px;
color:black;
text-decoration:none;
align-items: center;
display: block;
${mobile({ fontSize: "10px", marginLeft: "8px" })}
&:hover{
    color:black;
    margin-top: 4px;
    font-size:17px;
}
`;

const ulcss = {
  position: 'absolute',
  backgroundColor:'#f4f4f4',
  top:'23.4%',
  left:'24%',
  width:'13%',
  listStyleType: 'none', 
  padding:'0',
  alignItems: 'center',
  textAlign:'start',
  zIndex:'100',
};

let data
const NavBar2 = () => {

const [dropdownstate,setDropdownstate] = useState(false)
useEffect(() => {
  getSubCategory()
}, []);
  
  const getSubCategory = async() =>{
    let res = await axios.get(`http://localhost:8080/products/subcategory/all`)
    console.log(res)
    data =  res.data
    console.log(data)
  }

  return (
    <Container>
        <Wrapper>

            <MenuItem onClick={()=>{
              setDropdownstate(prevState=>!prevState)
              console.log(dropdownstate)
            }}>All Categories<KeyboardArrowDownIcon></KeyboardArrowDownIcon></MenuItem> <Dropdown display={dropdownstate}/>
            <NavLink to="/order">My Orders</NavLink>
            <NavLink to="/notification">Notifications</NavLink>
            <NavLink to="/inventory">Product Inventory</NavLink>

        </Wrapper>
    </Container>
  )
}

const Dropdown = ({display}) =>
{ 
  const reload = () =>
 {
    window.reload()
 }

  if (display) {
  return (
    <ul style={ulcss}>
    {data?.map((item) => {
      return (
        <Menulink to={`/products/${item.id}`} key={item.id} onClick={reload}>
          {item.subCategory_name}
        </Menulink>
    );
  })
}
  </ul>
)  
}
}

export default NavBar2