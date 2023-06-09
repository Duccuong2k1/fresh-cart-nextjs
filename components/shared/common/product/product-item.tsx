import { addToCart } from '@/app/cart/cartSlice';
import { addProductToWish } from '@/app/cart/wishlist';
import { useProductContext } from '@/lib/providers/product-provider';
import { useToast } from '@/lib/providers/toast-provider';
import { ProductType } from '@/lib/res/product';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import { RiAddFill } from 'react-icons/ri';
import { TbArrowsRightLeft } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Button } from '../../utilities/form/button';
import { RatingStar } from '../rating-star';

type Props = {};

export function ProductItem({ productItem, ...props }: { productItem?: ProductType }) {
    const { product, setProduct } = useProductContext()
    const dispatch = useDispatch()
    const toast = useToast()

    const handleButtonClick = (product: ProductType) => {
        // Show a toast notification
        dispatch(addToCart(product))
        toast.success("Add to cart success!")
    };
    return (
        <>
            <div className="relative p-3 transition-all delay-75 border border-gray-200 rounded-md product-item hover:shadow-lg hover:border-green-600">
                {productItem?.tag && <span className="inline px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-md">
                    {productItem?.tag}
                </span>}

                <Link href={`/product?productId=${productItem?.id}`} className="block">
                    <img
                        src={productItem?.thumbnail}
                        alt="image product"
                        className="object-cover mx-auto"
                    />

                    <div className="my-1 text-sm text-gray-500">{productItem?.category}</div>

                    <div className="my-1 font-semibold text-gray-800 hover:text-green-600">
                        {productItem?.name}
                    </div>
                </Link>

                <RatingStar numberStar={productItem?.rate} buyAmount={346} />
                <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center justify-start gap-2">
                        <span className="font-semibold text-gray-800">${productItem?.price}</span>{" "}
                        <del className="text-gray-400 ">${productItem?.priceOld}</del>{" "}
                    </div>
                    <Button
                        text="Add"
                        icon={<RiAddFill />}
                        iconClassName={"text-sm lg:text-lg"}
                        iconPosition="start"
                        className={
                            "bg-green-600 text-white hover:bg-green-800 !py-1 lg:px-2 lg:text-sm text-xs pl-1 pr-1.5 "
                        }
                        onClick={() => handleButtonClick(productItem as ProductType)}
                    />
                </div>

                <div className="absolute flex-row items-center justify-center flex-none gap-1 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 product-item__option">
                    <span
                        className="p-2 bg-white rounded-md shadow-md cursor-pointer hover:bg-green-500 hover:text-white "
                        onClick={() => setProduct?.(productItem as any)}
                    >
                        <AiOutlineEye />
                    </span>
                    <span className="p-2 bg-white rounded-md shadow-md cursor-pointer hover:bg-green-500 hover:text-white "
                        onClick={() => {
                            dispatch(addProductToWish(productItem))
                            toast.success("Add product to wishlist success!")
                        }}
                    >
                        <AiOutlineHeart />
                    </span>
                    <span className="p-2 bg-white rounded-md shadow-md cursor-pointer hover:bg-green-500 hover:text-white ">
                        <TbArrowsRightLeft />
                    </span>
                </div>
            </div>

        </>
    );
}
