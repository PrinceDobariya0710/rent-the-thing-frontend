import React,{useState} from "react";
import { Button } from "react-bootstrap";
import './componentstyle.css';
import Home from "./Home";

const RegisterFormComponent = ({ isShowRegister,LoginClick }) => {
    // const handleClick = (direction) => {
    //     if (direction === "Next1") {
    //       setSlideIndex(slideIndex > 0 ? slideIndex + 1 : 1);
    //     } 
    //   };
    const [otpBox,setOtpBox] = useState(false)
    const [passwordBox,setPasswordBox] = useState(false)


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

    const getOtp = () =>{
        setOtpBox(true)
    }
    const getPassword = () =>{
        setOtpBox(false)
        setPasswordBox(true)
    }
    const register = () =>{
        setPasswordBox(false)
    }

  return (
    <main className= {`${!isShowRegister ? "active" : ""} show main`}>
        <section className="reg-form" >
            
            {   !otpBox  && !passwordBox &&
                <form className="reg-form-box solid" id="form1" >
                <h1 className="login-text">
                    Sign Up
                </h1><br></br>
                    {/* <i className="fa fa-user icon"></i>
                <input type="text" className="login-box" placeholder="USERNAME"></input>
            <br></br><br></br> */}

                <i className="fa fa-envelope icon"></i>
                <input type="text" className="login-box" placeholder="EMAIL"></input>
                <br></br><br></br>

                {/* <i className="fa fa-key icon"></i>
                <input type="password" name="password" className="login-box" placeholder="PASSWORD"></input><br>
                </br><br></br>
                
                <i className="fa fa-key icon"></i>
                <input type="password" name="password" className="login-box" placeholder="CONFIRM PASSWORD"></input><br>
            </br><br></br><br></br> */}
            {/* <a onClick={HandleClick()}>get otp</a> */}
                <input type="submit" value="Get OTP" onClick={getOtp} className="login-btn"  direction="Next1"></input> <br></br>
                <label>Already have an account?</label><span className="link" onClick={LoginClick}>Login here!</span>
            </form>}


                {   otpBox && !passwordBox &&
                    <form className="reg-form-box1 solid" id="form2" >
                    <h1 className="login-text">
                        OTP
                    </h1><br></br>
                    <i className="fa fa-envelope icon"></i>
                    <input type="text" className="login-box" placeholder="OTP"></input>
                    <br></br><br></br>
                    <input type="submit" value="Verify" onClick={getPassword} className="login-btn"  direction="Next1"></input> <br></br>
                </form>}

            { !otpBox && passwordBox &&
                <form className="reg-form-box2 solid" id="form3" >
                <h1 className="login-text">
                    Password
                </h1><br></br>
                <i className="fa fa-key icon"></i>
                <input type="password" name="password" className="login-box" placeholder="PASSWORD"></input><br>
                </br><br></br>
                
                <i className="fa fa-key icon"></i>
                <input type="password" name="password" className="login-box" placeholder="CONFIRM PASSWORD"></input><br>
            </br><br></br><br></br>
                <input type="submit" value="Register" onClick={register} className="login-btn" id="next3" direction="Next1"></input> <br></br>
            </form>}

    </section>
</main>
  )
}



export default RegisterFormComponent
