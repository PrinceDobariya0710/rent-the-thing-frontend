import { createContext ,useState} from "react";

const initialState = sessionStorage.getItem('temp')
const userID = sessionStorage.getItem('userid')

export const LoginContext = createContext({

});

export const LoginProvider =({children})=>{

const [isToken,setisToken] = useState(initialState)
const [userid,setuserid] = useState(userID)
    return(
    <LoginContext.Provider value={{
    isToken,
    setisToken,
    userid,
    setuserid,
    }}>
    
    {children}
    
    </LoginContext.Provider>
    
    );
}
// export default LoginContext;