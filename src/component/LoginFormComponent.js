import React ,{useState,useContext} from "react";
import './componentstyle.css';
import Home from "./Home";
import styled from "styled-components";
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import KeySharpIcon from '@mui/icons-material/KeySharp';
import { mobile } from "../Responsive";
import axios from 'axios';
import { LoginContext } from '../context/LoginContext';

const Main = styled.main`
    display:flex;
    justify-content: center;
    padding:1%;
    position :absolute;
    z-index: 100;
    top:17%;
    left:550px;
    // margin-left:20%;
    ${mobile({left:"auto"})}
`;
const Formbox = styled.form`
    opacity: 1;
    border: 2px solid #f4f4f4;
    border-radius: 15px;
    width:25vw;
    height:55vh;
    background-color: #f4f4f4;
    text-align: center;
    letter-spacing: 2px;
    word-spacing: 5px;
    box-shadow: 2px 2px 5px gray;
    ${mobile({ height: "40vh" ,width:"65vw"})}

`;
const LoginText = styled.title`
    margin-top:5%;
    display:flex;
    justify-content:center;
    align-items :center ;
    font-family:Copperplate Gothic Light;
    font-size:200%;  
    font-Weight:40%;
    ${mobile({ fontSize:"30px"})}
`;
const Text  = styled.text`


`;
const Icon = styled.section`
    margin-top: 9px;
    margin-left:45px;
    min-width: 60px;
    position: absolute;
    height:15px;
    ${mobile({ marginLeft:"10px",marginTop:"7px",fontSize:"10px"})}
`;

const InputBox = styled.input`
width: 17vw;
padding: 1.5%;
margin: 8px 0;
display: inline-block;
border: 0;
border-bottom: 1px solid #ccc;
padding-left: 10%;
outline: none;
background: transparent;
${mobile({ fontSize:"12px",width:"180px"})}
`;

const ButtonSubmit = styled.button`
background-color: #f19d65;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
border-radius: 30px;
width:18vw;
${mobile({ fontSize:"12px",width:"180px"})}
`;

const LinkText = styled.text`
cursor: pointer;
      color: #295e81;
      ${mobile({ fontSize:"12px"})}
`;

const LoginForm = ({ isShowLogin ,RegClick,handleLoginClick}) =>
{
    const {isToken,setisToken} = useContext(LoginContext)
    const [state, setState] = useState({
        email:'',
        password:''
    })

    const handleChange = (e) => {
        setState((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const login = async(e) =>{
        e.preventDefault()
        console.log('login')
        let data = { userName: state.email,
        password:state.password,
        roles:{"role_id":2}
    }
        let res =await  axios.post(`http://localhost:8080/auth-service/verification/login`,data)
        console.log(res.data.token)
        console.log(JSON.stringify(res.data.token))
        handleLoginClick()
        setisToken(res.data.token)
        sessionStorage.setItem('temp',res.data.token)
    }
    console.log(isToken)
    return(
        <Main className={`${!isShowLogin ? "active" : ""} show`} >
            <section className="login-form"><br></br>
                <Formbox>
                <LoginText>
                    <Text>Login</Text>
                </LoginText>
                <br></br>
                <br></br>
                <Icon>
                <PersonSharpIcon></PersonSharpIcon>
                </Icon>
                <InputBox placeholder="USERNAME" name='email' value={state.email} onChange={handleChange}></InputBox>
                    <br></br><br></br>
                    <Icon>
                        <KeySharpIcon></KeySharpIcon>
                    </Icon>
                    <InputBox placeholder="PASSWORD" type="password" name='password' value={state.password} onChange={handleChange}></InputBox>
                    <br></br><br></br>
                    <ButtonSubmit onClick={login}>LOGIN</ButtonSubmit>
                    <br></br>
                    <Text>New User?</Text>
                    <LinkText onClick={RegClick}>Create an account!</LinkText>
                </Formbox>
            </section>
        </Main>
    );
}

export default LoginForm;


