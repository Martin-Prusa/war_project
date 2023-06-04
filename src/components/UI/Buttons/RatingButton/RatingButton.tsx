import {ReactNode} from "react";

export const RatingButton = ({children, action, selected}: {children: ReactNode, action: () => void, selected: boolean}) => {
    return <button type="button"
                   disabled={selected}
            onClick={() => action()}
            className={`mb-4 m-2 rounded-md bg-green-400 h-10 w-10 px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:bg-green-700`}>
        {children}</button>
}