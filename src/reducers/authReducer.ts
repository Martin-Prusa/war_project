import {IAuthData} from "@/interfaces";
import {AuthAction} from "@/types";

export const authReducer = (state: IAuthData, action: AuthAction) => {
    console.log('reducer')
    switch (action.type) {
        case "setAuthData":
            return {
                ...action.auth
            }
        case "logout":
            return null
        default:
            return state
    }
}