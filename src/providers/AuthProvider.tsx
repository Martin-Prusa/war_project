import {useReducer} from "react";
import {authReducer} from "@/reducers";
import {AuthContext} from "@/contexts";

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    // TODO: fix
    // @ts-ignore
    const [state, dispatch] = useReducer(authReducer, null)

    return (
        <AuthContext.Provider value={{authState: state, authDispatch: dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}