import { typeSession } from "../types/types";

export const authReducer =(state={},action)=>{
    switch (action.type) {
        case typeSession.typeLogin:
            return {...state,
                user:action.payload,
                isLogin:true
            };
        case typeSession.typeLogout:
            return{
                user:{
                    name:'',id:''
                },isLogin:false
            }
        default:
            return state;
    }
}

