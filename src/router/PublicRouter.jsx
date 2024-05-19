import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate } from "react-router-dom";

export const PublicRouter = ({children}) => {

    const {isLogin} = useContext(AuthContext);


  return (
        !isLogin 
        ? children
        : < Navigate to={'/marvel'} /> 
)
}
