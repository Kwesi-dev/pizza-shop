
import { createContext, useEffect, useReducer } from "react"

//actions 
export const loginStart = () => ({
    type: "loginStart"
})

export const loginSuccess = ( user : {} ) => (
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
    user: {},
    isFetching: boolean,
    error: boolean,
}

type actionTypes = | { type: "loginStart"} | { type: "loginSuccess"; payload: {}} | { type: "loginFailed"}
const reducer = ( state: initialStateTypes, action: actionTypes ) => {
    switch(action.type){
       case "loginStart" : 
            return{
                ...state,
                user: {},
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
                user: {},
                isFetching: false,
                error: false 
            };
        default: 
            return state
    }
}

//context

const initialState : initialStateTypes = {
    user: JSON.parse(localStorage.getItem('user') || '{}'),
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
