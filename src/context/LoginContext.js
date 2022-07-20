import { createContext ,useState} from "react";

const initialState = sessionStorage.getItem('temp')
const userID = sessionStorage.getItem('userid')
const userDetails = sessionStorage.getItem('userdetail')
const userName = sessionStorage.getItem('name')

export const LoginContext = createContext({

});

export const LoginProvider =({children})=>{

const [isToken,setisToken] = useState(initialState)
const [userid,setuserid] = useState(userID)
const [userdetailId,setuserdetailId] = useState(userDetails)
const [username,setusername] = useState(userName)
    return(
    <LoginContext.Provider value={{
    isToken,
    setisToken,
    userid,
    setuserid,
    userdetailId,
    setuserdetailId,
    username,
    setusername
    }}>
    
    {children}
    
    </LoginContext.Provider>
    
    );
}
// export default LoginContext;