import {useReducer} from "react";
import {authReducer} from "@/reducers";
import {AuthContext} from "@/contexts";

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(authReducer, null)

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}