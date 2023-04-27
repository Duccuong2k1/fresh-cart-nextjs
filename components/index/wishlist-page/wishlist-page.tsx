import { addToCart } from '@/app/cart/cartSlice'
import { addProductToWish, removeProductInWish } from '@/app/cart/wishlist'
import { Breadcrumb } from '@/components/shared/common/breadcrumb'
import { LabelTitle } from '@/components/shared/common/label-title'
import { Button } from '@/components/shared/utilities/form/button'
import { useToast } from '@/lib/providers/toast-provider'
import { ProductType } from '@/lib/res/product'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'

type Props = {}

export function WishlistPage({ }: Props) {
    const router = useRouter()
    const wishlists = useSelector((state: any) => state.wishlists.wishLists)

    return (
        <div className='main-container'>
            <Breadcrumb
                listPathName={[
                    { name: "Shop", href: "/shop" },
                    { name: "My WishList", href: "/wishlist" },

                ]}
            />
            <LabelTitle text='My WishList' className={"text-4xl mt-8"} />
            <p className='text-gray-600'>There are {wishlists?.length || 0} products in this wishlist </p>
            <WishListTable />

        </div>
    )
}

function WishListTable() {
    const wishlists = useSelector((state: any) => state.wishlists.wishLists)
    return (
        <>

            <div className="relative my-5 overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr className='border-b'>
                            <th scope="col" className="p-4">
                                <span className='sr-only' >title</span>
                            </th>
                            <th scope="col" className="p-4">
                                Product
                            </th>
                            <th scope="col" className="p-4">
                                Amount
                            </th>
                            <th scope="col" className="p-4">
                                Status
                            </th>
                            <th scope="col" className="p-4">
                                Actions
                            </th>
                            <th scope="col" className="p-4">
                                Remove
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishlists?.length > 0 ? wishlists.map((product: ProductType, index: number) => (
                                <ProductItemRow key={index} product={product} />
                            )) : (
                                <tr className="border ">
                                    <td className="py-10 font-semibold text-center text-gray-500 capitalize" colSpan={6}>
                                        no products in wishlist
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

        </>
    )
}

function ProductItemRow({ product }: { product?: ProductType }) {
    const dispatch = useDispatch();
    const toast = useToast()

    return (
        <tr className="bg-white border-b hover:bg-gray-50 ">
            <th scope="row" className="p-4 font-medium text-gray-900">
                <img
                    className='object-cover w-16 h-16'
                    src={product?.thumbnail}
                    alt={product?.name}
                />
            </th>
            <th scope="row" className="w-1/4 p-4 font-medium text-gray-900">
                <Link href={`/product?productId=${product?.id}`} className='font-semibold text-md'>
                    {product?.name}
                </Link>
                <div className='mt-2 text-sm text-ellipsis-2'>{product?.description} </div>
            </th>
            <td className="p-4 font-medium text-gray-600 ">
                ${product?.price}
            </td>
            <td className="p-4">
                <span className='px-2 py-1 text-sm font-medium text-white capitalize bg-green-700 rounded-md '>{product?.status}</span>
            </td>
            <td className="p-4">
                <Button
                    text="Add to cart"
                    className={"text-white bg-green-500 px-2 py-1 text-sm"}
                    onClick={() => {
                        dispatch(addToCart(product))
                        dispatch(removeProductInWish(product?.id))
                        toast.success("Add to cart success!")

                    }}
                />
            </td>
            <td className="p-4 ">
                <Button
                    icon={<RiDeleteBin6Line />}
                    iconClassName={"text-gray-600 hover:text-red-700 !p-0 hover:shadow-none"}
                    iconPosition='start'
                    onClick={() => {
                        dispatch(removeProductInWish(product?.id))
                        toast.success("Remove product success!")
                    }}

                />
            </td>
        </tr>
    )
}