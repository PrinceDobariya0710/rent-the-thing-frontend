import { createContext ,useState} from "react";

const initialState = sessionStorage.getItem('temp')

export const LoginContext = createContext({

});

export const LoginProvider =({children})=>{

const [isToken,setisToken] = useState(initialState)
    
    
    return(
    
    <LoginContext.Provider value={{
    isToken,setisToken
    }}>
    
    {children}
    
    </LoginContext.Provider>
    
    );
}
// export default LoginContext;