import {IAuthData} from "@/interfaces";
import {AuthAction} from "@/types/AuthAction";

export type AuthContextType = {
    authState: IAuthData | null;
    authDispatch: React.Dispatch<AuthAction>
}