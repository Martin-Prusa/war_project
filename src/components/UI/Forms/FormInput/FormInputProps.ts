export interface FormInputProps {
    placeholder: string
    label: string
    value: string | number
    setValue: ((v: string) => void) | ((v:number) => void) | ((v: Date) => void)
    type: string
}