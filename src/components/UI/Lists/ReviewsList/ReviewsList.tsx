import {IReview} from "@/interfaces";

export const ReviewsList = ({reviews}: {reviews?: IReview[]}) => {
    return (
        <div className='container mx-auto flex flex-col gap-5'>
            {reviews ? reviews.map(rev => <div key={rev.id}>{rev.value} - {rev.comment}</div>) : null}
        </div>
    )
}