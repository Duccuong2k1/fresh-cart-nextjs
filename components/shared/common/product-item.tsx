import Link from 'next/link'
import React from 'react'
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai'
import { RiAddFill } from 'react-icons/ri'
import { TbArrowsRightLeft } from 'react-icons/tb'
import { Button } from './button'
import { RatingStar } from './rating-star'

type Props = {}

export function ProductItem() {
    return (
        <div className="relative p-3 transition-all delay-75 border border-gray-200 rounded-md product-item hover:shadow-lg hover:border-green-600">
            <span className="inline px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-md">
                sale
            </span>
            <Link href={`/product?productId=${345}`}>
                <img
                    src="https://freshcart.codescandy.com/assets/images/products/product-img-1.jpg"
                    alt="image product"
                    className="object-cover mx-auto"
                />

                <div className="my-1 text-sm text-gray-500">snack & rice</div>

                <div className="my-1 font-semibold text-gray-800 hover:text-green-600">
                    Haldirams Sev Bhujia
                </div>
            </Link>
            <RatingStar numberStar={3.6} buyAmount={346} />
            <div className="flex items-center justify-between mt-3">
                <div className="flex items-center justify-start gap-2">
                    <span className="font-semibold text-gray-800">$24</span>{" "}
                    <del className="text-gray-400 ">$55</del>{" "}
                </div>
                <Button
                    text="Add"
                    icon={<RiAddFill />}
                    iconPosition="start"
                    className={
                        "bg-green-600 text-white hover:bg-green-800 !py-1 px-2 text-sm"
                    }
                />
            </div>

            <div className="absolute flex-row items-center justify-center flex-none gap-1 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 product-item__option">
                <span className="p-2 bg-white rounded-md shadow-md hover:bg-green-500 hover:text-white">
                    <AiOutlineEye />
                </span>
                <span className="p-2 bg-white rounded-md shadow-md hover:bg-green-500 hover:text-white">
                    <AiOutlineHeart />
                </span>
                <span className="p-2 bg-white rounded-md shadow-md hover:bg-green-500 hover:text-white">
                    <TbArrowsRightLeft />
                </span>
            </div>
        </div>
    )
}