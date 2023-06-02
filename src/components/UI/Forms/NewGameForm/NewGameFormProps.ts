import {IGame} from "@/interfaces/";
import {Dispatch, SetStateAction} from "react";

export interface NewGameFormProps {
    submitFunc: ((() => void ) | ((e: Event) => void))
    values: IGame
    setValues: Dispatch<SetStateAction<IGame>>
    submitText: string
}