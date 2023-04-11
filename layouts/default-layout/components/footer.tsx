import Link from 'next/link'
import React from 'react'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

type Props = {}

export function Footer({ }: Props) {
    return (
        <div className='mt-10 bg-gray-100'>
            <div className='grid grid-cols-1 gap-2 py-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 main-container'>
                <div>
                    <div className='mb-8 font-semibold'>Categories</div>
                    <ul className='flex flex-col gap-3'>
                        <li>
                            <Link href="/" className='text-gray-500 capitalize'>
                                vegetable & fruits
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className='text-gray-500 capitalize'>
                                breakfast & instant food
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className='text-gray-500 capitalize'>
                                tea coffee & drink
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className='text-gray-500 capitalize'>
                                home & office
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className='text-gray-500 capitalize'>
                                pet care
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className='mb-8 font-semibold'>Get to know us</div>
                    <ul className='flex flex-col gap-3'>
                        <li>
                            <Link href="/" className='text-gray-500 capitalize'>
                                company
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className='text-gray-500 capitalize'>
                                about
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className='text-gray-500 capitalize'>
                                blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className='text-gray-500 capitalize'>
                                help center
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className='text-gray-500 capitalize'>
                                our value
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className='mb-8 font-semibold'>Become a shopper</div>
                    <ul className='flex flex-col gap-3'>
                        <li>
                            <Link href="/" className='text-gray-500 capitalize'>
                                payments
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className='text-gray-500 capitalize'>
                                shipping
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className='text-gray-500 capitalize'>
                                product return
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className='text-gray-500 capitalize'>
                                FAQ
                            </Link>
                        </li>

                    </ul>
                </div>
                <div>
                    <div className='mb-8 font-semibold'>Freshcart programs</div>
                    <ul className='flex flex-col gap-3'>
                        <li>
                            <Link href="/" className='text-gray-500 capitalize'>
                                Gift card
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className='text-gray-500 capitalize'>
                                freshcart program
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className='text-gray-500 capitalize'>
                                fresh ads
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className='text-gray-500 capitalize'>
                                promos & coupons
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
            <CopyRight />
        </div>
    )
}

export function CopyRight() {
    return (
        <div className="flex flex-wrap items-center justify-between pt-10 border-t main-container pb-14">
            <div className='text-gray-500'>Copyright 2023@ freshcart | email: doduccuong2001@gmail.com</div>
            <div className='flex items-center justify-start gap-3'>
                <span className='text-gray-500'>Follow us on</span>
                <Link href="/" className='p-2 border rounded-sm hover:text-blue-400' >
                    <BsFacebook />
                </Link>
                <Link href="/" className='p-2 border rounded-sm hover:text-blue-500' >
                    <AiFillLinkedin />
                </Link>
                <Link href="/" className='p-2 border rounded-sm hover:text-orange-600' >
                    <AiFillInstagram />
                </Link>
            </div>
        </div>
    )
}