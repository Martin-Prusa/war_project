export interface FormInputProps {
    placeholder: string
    label: string
    value: string
    setValue: (v: string) => void
    type: string
}