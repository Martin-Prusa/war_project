export interface FormInputProps {
    placeholder: string
    label: string
    value: string | number | Date
    setValue: ((v: string) => void) | ((v:number) => void) | ((v: Date) => void)
    type: string
}