import {FormInput} from "@/components/UI/Forms";
import {useContext, useState} from "react";
import {IReview} from "@/interfaces";
import {RatingButton} from "@/components/UI/Buttons/RatingButton";
import {BasicButton} from "@/components/UI/Buttons";
import {AuthContext} from "@/contexts";
import {useRouter} from "next/router";

export const ReviewForm = ({changeFunc}: { changeFunc: (() => void) }) => {

    const {authState, authDispatch} = useContext(AuthContext)

    const router = useRouter();
    const {game} = router.query;

    const [values, setValues] = useState<IReview>({
        comment: '',
        value: 1
    })

    const [error, setError] = useState<string>('')

    const ratings = Array.from(Array(5).keys()).map(i => i + 1)

    const setComment = (comment: string) => {
        setValues({...values, comment})
    }

    const setValue = (value: number) => {
        setValues({...values, value})
    }

    const submit = () => {
        if(!authState) return
        if(values.comment.trim() === '') {
            setError('Pole komentář nesmí být prázdné.')
            return;
        }
        fetch(`http://localhost:3000/games/${game}/add-rating`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authState.Authorization}`
            },
            body: JSON.stringify(values)
        }).then(res => {
            setError('')
            setComment('')
            changeFunc()
        })
            .catch(e => setError('Nelze přidat hodnocení.'))
    }

    return (
        <div className='container mx-auto flex flex-col gap-5'>
            <div className='mt-5 text-2xl'>Přidat hodnocení</div>
            <form>
                <FormInput placeholder='Super hra' label='Komentář' value={values.comment} setValue={setComment}
                           type='text'/>
                <div className='text-red-500 mb-3'>{error}</div>
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