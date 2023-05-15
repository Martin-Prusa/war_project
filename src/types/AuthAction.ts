import {IAuthData} from "@/interfaces";

export type AuthAction =
    | {type: 'setAuthData', auth: IAuthData}
    | {type: 'logout'}