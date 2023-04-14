import { Breadcrumb } from '@/components/shared/common/breadcrumb'
import { LabelTitle } from '@/components/shared/common/label-title'
import { Button } from '@/components/shared/utilities/form/button'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'

type Props = {}

export function WishlistPage({ }: Props) {
    const router = useRouter()
    return (
        <div className='main-container'>
            <Breadcrumb
                listPathName={[
                    { name: "Shop", href: "/shop" },
                    { name: "My WishList", href: "/wishlist" },

                ]}
            />
            <LabelTitle text='My WishList' className={"text-4xl mt-8"} />
            <p className='text-gray-600'>there are {5} products in this wishlist </p>
            <WishListTable />

        </div>
    )
}

function WishListTable() {
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
                            [1, 2, 3].map((product, index) => (
                                <ProductItemRow key={index} />
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </>
    )
}

function ProductItemRow({ product }: { product?: any }) {
    return (
        <tr className="bg-white border-b hover:bg-gray-50 ">
            <th scope="row" className="p-4 font-medium text-gray-900">
                <img
                    className='object-cover w-16 h-16'
                    src='/assets/imgs/product-img-11.jpg'
                    alt='image product 1'
                />
            </th>
            <th scope="row" className="w-1/4 p-4 font-medium text-gray-900">
                <Link href="/" className='font-semibold text-md'>
                    macbook
                </Link>
                <div className='mt-2 text-sm'>12 </div>
            </th>
            <td className="p-4 font-medium text-gray-600 ">
                $55.00
            </td>
            <td className="p-4">
                <span className='px-2 py-1 text-sm font-medium text-white capitalize bg-green-700 rounded-md '>in stock</span>
            </td>
            <td className="p-4">
                <Button
                    text="Add to cart"
                    className={"text-white bg-green-500 px-2 py-1 text-sm"}
                    onClick={() => { }}
                />
            </td>
            <td className="p-4 ">
                <Button
                    icon={<RiDeleteBin6Line />}
                    iconClassName={"text-gray-600 hover:text-red-700 !p-0 hover:shadow-none"}
                    iconPosition='start'
                    onClick={() => { }}

                />
            </td>
        </tr>
    )
}