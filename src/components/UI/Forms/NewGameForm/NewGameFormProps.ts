import {IGame} from "@/interfaces/";
import {Dispatch, SetStateAction} from "react";

export interface NewGameFormProps {
    submitFunc: () => void
    values: IGame
    setValues: Dispatch<SetStateAction<IGame>>
    submitText: string
}