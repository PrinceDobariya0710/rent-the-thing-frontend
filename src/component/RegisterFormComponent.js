import React,{useState} from "react";
import { Button } from "react-bootstrap";
import './componentstyle.css';
import Home from "./Home";
import { mobile } from "../Responsive";
import styled from "styled-components";
import EmailIcon from '@mui/icons-material/Email';
import KeySharpIcon from '@mui/icons-material/KeySharp';
import axios from 'axios';

const Main = styled.main`
    display:flex;
    justify-content: center;
    padding:1%;
    position :absolute;
    z-index: 100;
    top:14%;
    left:550px;
    ${mobile({left:"60px"})}
`;
const RegBox = styled.form

`
opacity: 1;
border: 1px solid #f4f4f4;
border-radius: 2%;
width:400px;
height:350px;
background-color: #f4f4f4;
text-align: center;
letter-spacing: 2px;
word-spacing: 5px;
box-shadow: 2px 2px 5px gray;
position: relative;
${mobile({ height: "40vh" ,width:"65vw"})}
`;
const RegBox1 = styled.form`
opacity: 1;
border: 1px solid #f4f4f4;
border-radius: 15px;
width:400px;
height:350px;
background-color: #f4f4f4;
text-align: center;
letter-spacing: 2px;
word-spacing: 5px;
box-shadow: 2px 2px 5px gray;
position: relative;
margin-top: 0px;
${mobile({ height: "40vh" ,width:"65vw"})}
`;
const RegBox2 = styled.form
`
opacity: 1;
    border: 1px solid #f4f4f4;
    border-radius: 15px;
    width:400px;
    height:450px;
    background-color: #f4f4f4;
    text-align: center;
    letter-spacing: 2px;
    word-spacing: 5px;
    box-shadow: 2px 2px 5px gray;
    position: relative;
    ${mobile({ height: "40vh" ,width:"65vw"})}
`;
const LoginText = styled.title`
    margin-top:5%;
    display:flex;
    justify-content:center;
    align-item:center;  
    font-family:Copperplate Gothic Light;
    font-size:200%;  
    font-Weight:40%;
    ${mobile({ fontSize:"30px"})}
`;
const Text  = styled.text`


`;
const Icon = styled.section`
    margin-top: 13px;
    margin-left:55px;
    min-width: 60px;
    position: absolute;
    height:15px;
    ${mobile({ marginLeft:"23px",marginTop:"9px",fontSize:"10px"})}
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

const RegisterFormComponent = ({ isShowRegister,LoginClick }) => {
    // const handleClick = (direction) => {
    //     if (direction === "Next1") {
    //       setSlideIndex(slideIndex > 0 ? slideIndex + 1 : 1);
    //     } 
    //   };
    const [otpBox,setOtpBox] = useState(false)
    const [passwordBox,setPasswordBox] = useState(false)

    const [state, setState] = useState({
        email:'',
        OTP:0
    })

    const handleChange = (e) => {
        setState((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }


    var form1 = document.getElementById("form1");
    var form2 = document.getElementById("form2");
    var form3 = document.getElementById("form3");
    const Next1 = () =>{
        form1.style.left = "-450px";
        form2.style.top="-350px";
        form1.hidden()
    }
    const Next2 = () =>
    {

    }

    const getOtp = async() =>{
        setOtpBox(true)
        console.log(state.email);
        let res =await  axios.post(`http://localhost:8081/auth-service/verification/send-otp/?email=${state.email}`)
        console.log(res)
    }
    const getPassword = async() =>{
        setOtpBox(false)
        setPasswordBox(true)
        let otp = Number(state.OTP)
        let res =await  axios.post(`http://localhost:8081/auth-service/verification/verify-otp/?OTP=${otp}`)
        console.log(res)
    }
    const register = () =>{
        setPasswordBox(false)
    }

  return (
    <Main className= {`${!isShowRegister ? "active" : ""} show `}>
        <section className="reg-form" >
            
            {   !otpBox  && !passwordBox &&
                <RegBox id="form1" >
                <LoginText>
                    <Text>Register</Text>
                </LoginText><br></br><br></br>
                <Icon>
                <EmailIcon></EmailIcon>
                </Icon>
                <InputBox name='email' value={state.email} onChange={handleChange} placeholder="Email"></InputBox>
                <br></br><br></br><br></br>
                {/* <input type="submit" value="Get OTP" onClick={getOtp} className="login-btn"  direction="Next1"></input> <br></br>
                <label>Already have an account?</label><span className="link" onClick={LoginClick}>Login here!</span> */}
                <ButtonSubmit onClick={getOtp}>Get OTP</ButtonSubmit>
                    <br></br>
                    <Text>Already have an account?</Text>
                    <LinkText onClick={LoginClick}>Login here!</LinkText>
            </RegBox>}

                {   otpBox && !passwordBox &&
                    <RegBox1 id="form2" >
                    <LoginText>
                    <Text>OTP</Text>
                </LoginText><br></br><br></br>
                    <Icon>
                <EmailIcon></EmailIcon>
                </Icon>
                <InputBox placeholder="OTP" name='OTP' value={state.OTP} onChange={handleChange}></InputBox>
                    <br></br><br></br>
                    <br></br>
                    <ButtonSubmit onClick={getPassword}>Verify</ButtonSubmit>
                    {/* <input type="submit" value="Verify" onClick={getPassword} className="login-btn"  direction="Next1"></input>  */}
                    <br></br>
                </RegBox1>}

            { !otpBox && passwordBox &&
                <RegBox2 id="form3" >
                <LoginText>
                    <Text>Password</Text>
                </LoginText><br></br>
                <Icon>
                <KeySharpIcon></KeySharpIcon>
                </Icon>
                <InputBox placeholder="Password"></InputBox><br>
                </br><br></br>
                <Icon>
                <KeySharpIcon></KeySharpIcon>
                </Icon>
                <InputBox placeholder="Confirm Password"></InputBox><br>
            </br><br></br><br></br>
                {/* <input type="submit" value="Register" onClick={register} className="login-btn" id="next3" direction="Next1"></input>  */}
                <ButtonSubmit onClick={register}>Register</ButtonSubmit>
                <br></br>
            </RegBox2>}

    </section>
</Main>
  )
}

export default RegisterFormComponent