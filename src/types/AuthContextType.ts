import {IAuthData} from "@/interfaces";
import {AuthAction} from "@/types/AuthAction";

export type AuthContextType = {
    state: IAuthData | null;
    dispatch: React.Dispatch<AuthAction>
}