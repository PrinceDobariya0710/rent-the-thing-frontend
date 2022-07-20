import React, { useState, useEffect, useContext } from 'react';
import styled from "styled-components";
import { mobile, tablet } from "../Responsive";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.header`
  padding-left:6%;
  margin-top:20px;
  width:90%;
  ${mobile({ flexDirection: "column", fontSize: "12px", paddingLeft: "10%" })}
`;

const Wrapper = styled.header`
display: inline-block;
  align-items: center;
  justify-content:center;
`;

const ImgContainer = styled.section`
  height: 300px;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
  ${mobile({ height: "250px", width: "250px", padding: "0px" })}
`;

const Button = styled.button`
padding:8px 25px;
font-size: 10px;
background-color: transparent;
width:100%;
background-color:#f19d65;
border:none;
border-top: 1px solid gray;
  ${mobile({ fontSize: "10px", padding: "2px", })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  margin-left: 40%;
  padding: 5px;
  width:23%;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Title = styled.h1`
  font-size: 20px;
  ${mobile({ fontSize: "17px" })}
`;

const Card = styled.article`
  height: 390px;
  margin:60px;
  border:1px solid gray;
  width:220px;
  ${mobile({ height: "40vh", width: "60%" })}
  ${tablet({ height: "40vh", width: "40%" })}
`;


const Amount = styled.p`
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 3px;
  margin-bottom:1px;
  ${mobile({ fontSize: "13px" })}
`;

const InfoContainer = styled.section`
  //  flex: 1;
  // padding: 10px;
  // margin-top:12px;
  width:200px;
  justify-content:center;
  ${mobile({ padding: "0px" })}
`;

let data
export const MainProduct = () => {
  const params = useParams()
  const navigate = useNavigate()
  // console.log(params.id)
  const [dataLoad, setdataLoad] = useState([])

  const { isToken, userid, userdetailId } = useContext(LoginContext)
  const getCategoryProduct = async () => {
    // console.log(params.id)
    const create = axios.create({
      baseURL: `http://localhost:8080/products/cloth-product/user/get-categorywise-cproduct/?subcategory-id=${params.id}`,
      timeout: 1000 * 60 * 60,
      headers: { 'Authorization': 'Bearer ' + isToken }
    });
    // let res = await axios.get(`http://localhost:8080/products/cloth-product/user/get-categorywise-cproduct/?subcategory-id=${params.id}`)
    // console.log(res)
    let res = await create.get(``)
    data = res.data
    // console.log(data)
    setdataLoad(data)
  }

  useEffect(() => {
    getCategoryProduct()
  }, []);

  const ShowDetail = (id) => {
    navigate(`/detail/${id}`)
  }
  const [searchField, setSearchField] = useState("")
  return (
    <Container>
      <SearchContainer>
        <Input placeholder="Search" onChange={(event) => {
          setSearchField(event.target.value)
        }} />
        <SearchIcon style={{ color: "gray", fontSize: 14, width: 20, height: 20 }} />
      </SearchContainer>
      {dataLoad.filter((val) => {
        if (searchField == "") {
          return val
        }
        else if (val.product.productName.toLowerCase().includes(searchField.toLowerCase())) {
          return val
        }
      }).map((val, item) => (<Wrapper>
        <Card key={val.product.id} >
          <ImgContainer>
            <Image src={`/ecommerce-photos/${val.product.product_image}`} height="30%" width="100%" onClick={() => ShowDetail(val.product.id)} />
          </ImgContainer>
          <InfoContainer>
            <Title>{val.product.productName}</Title>
            <Amount>Rs{val.product.value_duration}</Amount>
          </InfoContainer>
          <Button>AddToCart</Button>
        </Card>
      </Wrapper>))}
    </Container>
  )
}

export default MainProduct
