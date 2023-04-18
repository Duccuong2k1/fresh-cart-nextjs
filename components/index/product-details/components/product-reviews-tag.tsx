import { Button } from '@/components/shared/utilities/form/button';
import { Input } from '@/components/shared/utilities/form/input';
import { LabelTitle } from '@/components/shared/common/label-title';
import { ProgressStart } from '@/components/shared/common/progress-start';
import { RatingStar } from '@/components/shared/common/rating-star';
import React, { useState } from 'react';
import { AiOutlineFlag, AiOutlineLike } from 'react-icons/ai';

type Props = {};

export function ProductReviewsTag({ }: Props) {
    const [rating, setRating] = useState(0)
    const ratingChanged = () => {

    }
    return (
        <div className="flex flex-col flex-wrap justify-between lg:flex-row gap-14 ">
            <div className="w-full lg:w-1/3">
                <div className="my-3 text-2xl font-semibold">Customer reviews</div>
                <div className="flex flex-row items-center gap-5">
                    <RatingStar />
                    <span className="text-gray-500">4.5 out of 5</span>
                    <span className="text-gray-500">11,899 global rating</span>
                </div>
                <ProgressStart numberPercent={55} star={5} />
                <ProgressStart numberPercent={40} star={4} />
                <ProgressStart numberPercent={15} star={3} />
                <ProgressStart numberPercent={10} star={2} />
                <ProgressStart numberPercent={5} star={1} />
                <div className="my-3 text-2xl font-semibold">Review this product</div>
                <p className="my-2 text-gray-400">
                    Share your thoughts with other customers
                </p>
                <Button
                    className={
                        "w-full flex items-center justify-center border !text-gray-400 mt-5 hover:bg-slate-100"
                    }
                    text="Write the review"
                />
            </div>
            <div className="flex-1">
                <div className="my-3 text-2xl font-semibold">Reviews</div>
                {
                    [1, 2, 3].map((review, index) => (
                        <CustomerReviewItem key={index} />
                    ))
                }
                <Button text="read more reviews" className={
                    "flex items-center justify-center border !text-gray-400 mt-5 hover:bg-slate-100"
                } />
                <LabelTitle text="create review" className={"mt-8"} />

                <div className="my-3 text-xl font-semibold">Overall rating</div>
                <form action="">
                    <Input name="" placeholder='what most important to know' label='Add to headline' />
                    <hr className='my-2' />
                    <div className='font-semibold text-gray-800'>Add a photo or video</div>
                    <p>Shoppers find images and videos more helpful than text alone.</p>
                    <div className='w-20 h-20 my-2 bg-gray-100 border-2 border-dashed rounded'>
                        <input type="file" className='hidden' />
                    </div>
                    <hr className='my-2' />
                    <div className='mt-5 font-semibold text-gray-800'>Add a written review</div>

                    <textarea name="" id="" cols={30} rows={5} className="w-full p-2 my-3 border outline-none" placeholder="what did you like or dislike? what did you use this product for?"></textarea>
                    <hr className='my-2' />
                    <Button
                        text='submit review '
                        className={"bg-green-500 text-white hover:bg-green-600 flex justify-end items-end flex-row ml-auto mt-8"}
                    />
                </form>

            </div>
        </div>
    );
}


function CustomerReviewItem() {
    return (
        <div className="flex justify-start gap-5 py-8 my-3 border-b">
            <img
                src="https://freshcart.codescandy.com/assets/images/avatar/avatar-10.jpg"
                alt="avatar reviewer"
                className="object-cover rounded-full w-14 h-14"
            />
            <div>
                <div className="font-semibold">shankar subscrice</div>
                <div className="flex items-center justify-start gap-3">
                    <span className="text-gray-500">02 december 2022</span>{" "}
                    <span className="font-semibold text-green-500">
                        verified purchase
                    </span>
                </div>
                <div className="flex flex-row flex-wrap items-center justify-start gap-5 my-3">
                    <RatingStar />
                    <div className="font-semibold">Need to recheck the weight at delivery point</div>
                </div>
                <p className="text-sm text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aperiam temporibus nemo velit consequatur reprehenderit cum accusamus, explicabo sapiente. Soluta?</p>
                <div className="flex flex-row items-center justify-end gap-5 mt-5">
                    <span className="inline-flex items-center gap-2 text-sm text-gray-500 cursor-pointer "  > <i><AiOutlineLike /></i> helpful</span>
                    <span className="inline-flex items-center gap-2 text-sm text-gray-500 cursor-pointer " > <i><AiOutlineFlag /></i> report abuse</span>
                </div>
            </div>
        </div>
    )
}