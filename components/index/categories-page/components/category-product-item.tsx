import { addToCart } from '@/app/cart/cartSlice'
import { addProductToWish } from '@/app/cart/wishlist'
import { RatingStar } from '@/components/shared/common/rating-star'
import { Button } from '@/components/shared/utilities/form/button'
import { useProductContext } from '@/lib/providers/product-provider'
import { useToast } from '@/lib/providers/toast-provider'
import { ProductType } from '@/lib/res/product'
import Link from 'next/link'
import React from 'react'
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai'
import { RiAddFill } from 'react-icons/ri'
import { TbArrowsRightLeft } from 'react-icons/tb'
import { useDispatch } from 'react-redux'

type Props = {}

export function CategoryProductItem({ productItem, ...props }: { productItem?: ProductType, }) {
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
            <div className={`flex flex-row items-center p-3 transition-all delay-75 border border-gray-200 rounded-md product-item hover:shadow-lg hover:border-green-600`}>
                <div className=''>

                    {productItem?.tag && <span className="inline px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-md">
                        {productItem?.tag}
                    </span>}

                    <Link href={`/product?productId=${productItem?.id}`} className="block">
                        <img
                            src={productItem?.thumbnail}
                            alt="image product"
                            className="object-cover mx-auto"
                        />


                    </Link>
                </div>
                <div>
                    <div className="my-1 text-sm text-gray-500">{productItem?.category}</div>
                    <div className="my-1 font-semibold text-gray-800 hover:text-green-600">
                        {productItem?.name}
                    </div>
                    <RatingStar numberStar={productItem?.rate} buyAmount={346} />
                    <div className="flex flex-col justify-start mt-3">
                        <div className="flex items-center justify-start gap-2">
                            <span className="font-semibold text-gray-800">${productItem?.price}</span>{" "}
                            <del className="text-gray-400 ">${productItem?.priceOld}</del>{" "}
                        </div>
                        <div className="flex flex-row items-center justify-start gap-2 my-3">
                            <span
                                className="p-2 bg-white rounded-md shadow cursor-pointer hover:bg-green-500 hover:text-white "
                                onClick={() => setProduct?.(productItem as any)}
                            >
                                <AiOutlineEye />
                            </span>
                            <span className="p-2 bg-white rounded-md shadow cursor-pointer hover:bg-green-500 hover:text-white "
                                onClick={() => {
                                    dispatch(addProductToWish(productItem))
                                    toast.success("Add product to wishlist success!")
                                }}
                            >
                                <AiOutlineHeart />
                            </span>
                            <span className="p-2 bg-white rounded-md shadow cursor-pointer hover:bg-green-500 hover:text-white ">
                                <TbArrowsRightLeft />
                            </span>
                        </div>
                        <Button
                            text="Add"
                            icon={<RiAddFill />}
                            iconClassName={"text-lg"}
                            iconPosition="start"
                            className={
                                "bg-green-600 text-white hover:bg-green-800 px-2 flex items-center justify-center  mt-3 "
                            }
                            onClick={() => handleButtonClick(productItem as ProductType)}
                        />
                    </div>

                </div>


            </div>

        </>
    );
}