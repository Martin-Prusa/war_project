import {FormInput} from "@/components/UI/Forms";
import {useState} from "react";
import {IReview} from "@/interfaces";
import {RatingButton} from "@/components/UI/Buttons/RatingButton";
import {BasicButton} from "@/components/UI/Buttons";

export const ReviewForm = ({changeFunc}: { changeFunc: (() => void) }) => {

    const [values, setValues] = useState<IReview>({
        comment: '',
        value: 1
    })

    const ratings = Array.from(Array(5).keys()).map(i => i + 1)

    const setComment = (comment: string) => {
        setValues({...values, comment})
    }

    const setValue = (value: number) => {
        setValues({...values, value})
    }

    const submit = () => {
        changeFunc()
    }

    return (
        <div className='container mx-auto flex flex-col gap-5'>
            <div className='mt-5 text-2xl'>Přidat hodnocení</div>
            <form>
                <FormInput placeholder='Super hra' label='Komentář' value={values.comment} setValue={setComment}
                           type='text'/>
                <div className='text-sm font-medium leading-6 text-gray-900'>Hodnocení</div>
                {ratings.map(r => <RatingButton key={r} action={() => setValue(r)}
                                                selected={values.value === r}>{r}</RatingButton>)}
                <div>
                    <BasicButton action={submit}>Submit</BasicButton>
                </div>
            </form>
            <hr/>
        </div>
    )
}