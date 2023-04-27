import React from 'react'
import { SildeOutProps, SlideOut } from '../../utilities/form/slide-out'
import { Button } from '../../utilities/form/button'
import { RiDeleteBinLine } from 'react-icons/ri'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { inCrementQuantity, inDecrementQuantity, removeItemCart } from '@/app/cart/cartSlice'


interface ShopCartProps extends SildeOutProps { }

export function ShopCartSlideOut({ ...props }: ShopCartProps) {
    const router = useRouter()
    const dispatch = useDispatch()

    const cart = useSelector((state: any) => state.cart.cart);
    const totalMoney = () => {
        return cart.reduce((total: number, product: any) => {
            total = total + product?.quantity * product?.price
            return total
        }, 0).toFixed(2)
    }


    return (
        <>
            <SlideOut
                isOpen={props.isOpen}
                onClose={props.onClose}
                className={`${props.isOpen ?? "lg:w-1/3"}  `}
            >
                <div className='text-xl font-semibold'>Shop cart</div>
                <hr className='my-3' />
                {
                    !!cart?.length ? (

                        <div className={`overflow-y-auto max-h-[500px]`}>

                            {
                                cart?.map((product: any, index: number) => (

                                    <div className='grid items-center grid-cols-2 gap-3 py-2 border-b lg:grid-cols-4' key={index} >
                                        <div className='flex flex-row items-center justify-start col-span-2 gap-5'>

                                            <img src={product?.thumbnail} className='object-cover w-16 h-16' alt="product cart 1" />
                                            <div>
                                                <div className='font-semibold'>{product?.name}</div>
                                                <div className='text-sm text-gray-500'>{230}g</div>
                                                <Button
                                                    icon={<RiDeleteBinLine />}
                                                    iconClassName={"text-green-600"}
                                                    iconPosition='start'
                                                    text='remove'
                                                    className={"hover:shadow-none !px-0 flex gap-2 text-xs text-gray-500"}
                                                    onClick={() => dispatch(removeItemCart(product?.id))}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-start my-3">
                                            <Button
                                                icon={<AiOutlineMinus />}
                                                iconPosition="start"
                                                className={"bg-white  hover:bg-slate-50 border rounded-sm px-0.5 !py-1 "}
                                                onClick={() => dispatch(inDecrementQuantity(product?.id))}
                                                iconClassName="text-gray-600"
                                            />
                                            <span className="px-3 py-1 text-sm border-t border-b">{product?.quantity}</span>
                                            <Button
                                                icon={<AiOutlinePlus />}
                                                iconPosition="start"
                                                className={"bg-white hover:bg-slate-50 border rounded-sm  px-0.5 !py-1"}
                                                onClick={() => dispatch(inCrementQuantity(product?.id))}
                                                iconClassName="text-gray-600"
                                            />
                                        </div>
                                        <div className='font-semibold'>${product?.price}</div>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <div className='flex flex-col items-center justify-center'>
                            <img src="/assets/imgs/empty_cart.png" className='object-cover w-48 h-auto' alt='empty cart' />
                            <div className='mt-5 text-gray-500 h-60'>No products in the cart yet</div>
                        </div>
                    )
                }
                {
                    cart.length > 0 && (

                        <div className='flex flex-row items-center justify-between mt-5'>
                            <span className='font-semibold' >Total:</span>
                            <span className='font-semibold text-green-700' >$ {totalMoney()}</span>
                        </div>
                    )
                }
                <div className='flex items-center justify-between gap-2 mt-8'>
                    <Button
                        text="continue shopping"
                        className={"bg-green-600 text-white"}
                        onClick={
                            props.onClose
                            // router.push("/")
                        }
                    />
                    <Button
                        text="Payment"
                        className={"text-white bg-gray-800"}
                    />
                </div>
            </SlideOut>
        </>
    )
}       