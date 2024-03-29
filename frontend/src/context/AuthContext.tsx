
import { createContext, useEffect, useReducer } from "react"
type userType = {
    email: string,
    password: string
}

//actions 
export const loginStart = () => ({
    type: "loginStart"
})

export const loginSuccess = ( user : null | userType ) => (
    {
        type: "LoginSuccess",
        payload: user
    }
)

export const loginFailed = () => ({
    type: "loginFailed"
})

//reducer
type initialStateTypes = {
    user: null | userType,
    isFetching: boolean,
    error: boolean,
}

type actionTypes = | { type: "loginStart"} | { type: "loginSuccess"; payload: null | userType} | { type: "loginFailed"} | { type: "logout"}
const reducer = ( state: initialStateTypes, action: actionTypes ) => {
    switch(action.type){
       case "loginStart" : 
            return{
                ...state,
                user: null,
                isFetching: true,
                error: false 
            };
        case "loginSuccess" : 
            return{
                ...state,
                user: action.payload,
                isFetching: false,
                error: false 
            };
        case "loginFailed" : 
            return{
                ...state,
                user: null,
                isFetching: false,
                error: false 
            };
        case "logout" : 
            return {
                ...state,
                user: null,
                isFetching: false,
                error: false        
            }
        default: 
            return state
    }
}

//context

const initialState : initialStateTypes = {
    user: null || JSON.parse(localStorage.getItem('user') || 'null'),
    isFetching: false,
    error: false,
}


export const AuthContext = createContext<{ state: initialStateTypes, dispatch: React.Dispatch<actionTypes>}>({ state: initialState, dispatch: () => null })

const AuthContextProvider = ({ children } : React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    const [ state, dispatch ] = useReducer(reducer, initialState)

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user])
    
    return (
        <AuthContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
