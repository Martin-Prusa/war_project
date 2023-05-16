import {ReactNode} from "react";

export interface BasicButtonProps {
    children: ReactNode
    action: () => void
}