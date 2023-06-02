import {GenreItemProps} from "@/components/UI/Lists";

export const GenreItem = ({boxText, text, btnAction, btnText}: GenreItemProps) => {
    return (
        <li  className="flex rounded-md w-72 h-12">
            <div
                className="flex flex-shrink-0 w-16 items-center justify-center bg-green-500 rounded-l-md text-sm font-medium text-white">{boxText}
            </div>
            <div
                className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                <div className="flex-1 truncate px-4 py-2 text-sm">
                    <span className="font-medium text-gray-900 hover:text-gray-600">{text}</span>
                </div>
                <div className="flex-shrink-0 pr-2">
                    <button type="button"
                            onClick={btnAction}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                        {btnText}
                    </button>
                </div>
            </div>

        </li>
    )
}