import {BasicButtonProps} from "@/components/UI/Buttons/BasicButtonProps";
import {act} from "react-dom/test-utils";

export const BasicButton = ({children, action}: BasicButtonProps) => {
    return (
        <button type="button"
                onClick={action}
                className={`mb-4 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600`}>
            {children}</button>
    )
}