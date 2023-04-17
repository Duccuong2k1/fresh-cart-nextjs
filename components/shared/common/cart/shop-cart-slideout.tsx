import React from 'react'
import { SildeOutProps, SlideOut } from '../../utilities/form/slide-out'
import { Button } from '../../utilities/form/button'
import { RiDeleteBinLine } from 'react-icons/ri'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '@/app/cart/cartSlice'

interface ShopCartProps extends SildeOutProps { }

export function ShopCartSlideOut({ ...props }: ShopCartProps) {
    const dispatch = useDispatch()
    const amount = useSelector((state: any) => state.cart)
    console.log("🚀 ~ file: shop-cart-slideout.tsx:14 ~ ShopCartSlideOut ~ amount:", amount)

    const handleIncrement = () => {
        dispatch(increment())
    }
    return (
        <>
            <SlideOut
                isOpen={props.isOpen}
                onClose={props.onClose}
            >
                <div className='text-xl font-semibold'>Shop cart</div>
                <hr className='my-3' />
                <div className={`overflow-y-auto max-h-[500px]`}>

                    {
                        [1, 2, 3].map((item, index) => (

                            <div className='grid items-center grid-cols-4 gap-3 py-2 border-b' key={index} >
                                <div className='flex flex-row items-center justify-start col-span-2 gap-5'>

                                    <img src="/assets/imgs/product-img-12.jpg" className='object-cover w-16 h-16' alt="product cart 1" />
                                    <div>
                                        <div className='font-semibold'>product 1</div>
                                        <div className='text-sm text-gray-500'>230g</div>
                                        <Button
                                            icon={<RiDeleteBinLine />}
                                            iconClassName={"text-green-600"}
                                            iconPosition='start'
                                            text='remove'
                                            className={"hover:shadow-none !px-0 flex gap-2 text-xs text-gray-500"}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row items-center justify-start my-3">
                                    <Button
                                        icon={<AiOutlineMinus />}
                                        iconPosition="start"
                                        className={"bg-white  hover:bg-slate-50 border rounded-sm px-0.5 !py-1 "}
                                        onClick={() => console.log("minus")}
                                        iconClassName="text-gray-600"
                                    />
                                    <span className="px-3 py-1 text-sm border-t border-b">{amount}</span>
                                    <Button
                                        icon={<AiOutlinePlus />}
                                        iconPosition="start"
                                        className={"bg-white hover:bg-slate-50 border rounded-sm  px-0.5 !py-1"}
                                        onClick={handleIncrement}
                                        iconClassName="text-gray-600"
                                    />
                                </div>
                                <div className='font-semibold'>$5.00</div>
                            </div>
                        ))
                    }
                </div>
                <div className='flex items-center justify-between mt-8'>
                    <Button
                        text="continue shopping"
                        className={"bg-green-600 text-white"}
                    />
                    <Button
                        text="update cart"
                        className={"text-white bg-gray-800"}
                    />
                </div>
            </SlideOut>
        </>
    )
}       