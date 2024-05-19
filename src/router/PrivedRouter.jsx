import { useContext, useEffect } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate, useLocation } from "react-router-dom";

export const PrivedRouter = ({children}) => {

    const { isLogin} =useContext(AuthContext);

    const {pathname,search} = useLocation();
    
    useEffect(() => {
        
        localStorage.setItem('pathname',pathname+search)        
        
    }, [pathname,search])
    
    
  return (
        isLogin
        ? children
        :<Navigate to={'/login'} />
  )
}
