import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { typeSession } from "../types/types"

const authState ={
    user:{name:'',id:''},
    isLogin:false
}

const init =()=>{
    const user = JSON.parse( localStorage.getItem('user'));
    return{
        isLogin:!!user,
        user: user ? {...user}:{name:'',id:''} 
    }
}


export const AuthProvider = ({children}) => {

    const [state, dispatch] = useReducer(authReducer, {},init);

    const dispatchLogin =(name='')=>{

        const user ={id:'ABC',name}

        const action={
            type:typeSession.typeLogin,
            payload:user
        }

        localStorage.setItem('user',JSON.stringify(user));

        dispatch(action)
    }

    const dispatchLogout=()=>{
        const action={
            type:typeSession.typeLogout
        }
        localStorage.removeItem('user');
        dispatch(action);

    }

  return (
    <AuthContext.Provider  value={{...state
        ,dispatchLogin,dispatchLogout
    }} >
        {children}
    </ AuthContext.Provider>
  )
}

