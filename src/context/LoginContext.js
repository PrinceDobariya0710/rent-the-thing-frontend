import { createContext ,useState} from "react";

const initialState = sessionStorage.getItem('temp')
const userID = sessionStorage.getItem('userid')
const userDetails = sessionStorage.getItem('userdetail')

export const LoginContext = createContext({

});

export const LoginProvider =({children})=>{

const [isToken,setisToken] = useState(initialState)
const [userid,setuserid] = useState(userID)
const [userdetailId,setuserdetailId] = useState(userDetails)
    return(
    <LoginContext.Provider value={{
    isToken,
    setisToken,
    userid,
    setuserid,
    userdetailId,
    setuserdetailId
    }}>
    
    {children}
    
    </LoginContext.Provider>
    
    );
}
// export default LoginContext;