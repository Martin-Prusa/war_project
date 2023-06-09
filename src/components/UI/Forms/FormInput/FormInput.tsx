import {FormInputProps} from "@/components/UI/Forms";
import {ChangeEvent} from "react";

export const FormInput = ({placeholder, label, value, setValue, type}: FormInputProps) => {

    const set = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setValue(e.target.value)
    }

    return (
        <div className='mb-4'>
            <label className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
            <div className="mt-2">
                <input type={type} name="email" value={value}
                       onChange={(e) => set(e)}
                       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                       placeholder={placeholder} />
            </div>
        </div>
    )
}