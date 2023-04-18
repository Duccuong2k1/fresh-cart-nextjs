import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

type Props = {
    numberStar?: number
    buyAmount?: number
}

export function RatingStar({ numberStar, buyAmount }: Props) {
    return (
        <div className="flex flex-row items-center justify-start gap-2">
            <div className="flex flex-row items-center justify-start gap-1 text-xs lg:text-base">
                <span className="text-yellow-300">
                    <AiFillStar />
                </span>
                <span className="text-yellow-300">
                    <AiFillStar />
                </span>
                <span className="text-yellow-300">
                    <AiFillStar />
                </span>
                <span className="text-yellow-300">
                    <AiFillStar />
                </span>
                <span className="text-yellow-300">
                    <AiOutlineStar />
                </span>
            </div>
            <span className="text-sm text-gray-500">{numberStar}</span>
            {buyAmount && <span className="text-sm text-gray-500">({buyAmount})</span>}
        </div>
    )
}