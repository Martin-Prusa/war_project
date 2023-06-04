import {IReview} from "@/interfaces";

export const ReviewsList = ({reviews}: {reviews?: IReview[]}) => {
    return (
        <div className='container mx-auto flex flex-col gap-5 mb-20'>
            <div className='mt-5 text-2xl'>Hodnocení</div>
            <ul>
                {reviews ? reviews.map(rev => <li key={rev.id} className="flex rounded-md">
                    <div
                        className="flex flex-shrink-0 w-16 items-center justify-center bg-green-500 rounded-l-md text-sm font-medium text-white">{rev.value}
                    </div>
                    <div
                        className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                        <div className="flex-1 truncate px-4 py-2 text-sm">
                            <span className="font-medium text-gray-900 hover:text-gray-600">{rev.comment}</span>
                        </div>
                    </div>

                </li>) : null}
            </ul>

        </div>
    )
}