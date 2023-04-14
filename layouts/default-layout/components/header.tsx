import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { FiHeart, FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";
import { TfiLayoutGrid2 } from 'react-icons/tfi';
import Link from 'next/link';
import { SignInDialog } from '@/components/shared/common/signin-dialog';
import { Button } from '@/components/shared/utilities/form/button';
import { useDefaultLayoutContext } from '../provider/default-layout-provider';
type Props = {}

export function Header({ }: Props) {
    const [openFormSignUp, setOpenFormSignUp] = useState(false)
    const { setOpenCartSlideOut } = useDefaultLayoutContext()
    return (
        <header className="border-b border-b-gray-200">

            <div className="py-3 main-container">
                <div className="flex items-center justify-between py-2">
                    <div className="flex flex-row items-center justify-start w-2/3">
                        <Link href="/">

                            <div className="flex items-center gap-2 mr-8 text-2xl font-semibold"> <span className="text-green-600"><FiShoppingBag /></span> FreshCart</div>
                        </Link>
                        <SearchingInput />
                    </div>
                    <div className="flex items-center justify-start gap-3">
                        <span className='relative'>

                            <Button
                                className={"!p-0 hover:shadow-none m-1"}
                                icon={<FiHeart />}
                                iconClassName={"text-xl"}
                                iconPosition='start'
                                href='/wishlist'
                            />
                            <span className='absolute px-1.5 py-0.5 text-xs text-white bg-green-600 rounded-full -top-2 -right-2 '>5</span>
                        </span>
                        <Button
                            className={"!p-0 hover:shadow-none m-1"}
                            icon={<FiUser />}
                            iconClassName={"text-xl"}
                            iconPosition='start'
                            onClick={() => setOpenFormSignUp(true)}
                        />
                        <span className='relative'>

                            <Button
                                className={"!p-0 hover:shadow-none m-1"}
                                icon={<FiShoppingBag />}
                                iconClassName={"text-xl"}
                                iconPosition='start'
                                onClick={() => {
                                    setOpenCartSlideOut?.(true)
                                    console.log("click here")
                                }}
                            />
                            <span className='absolute px-1.5 py-0.5 text-xs text-white bg-green-600 rounded-full -top-2 -right-2  '>1</span>

                        </span>

                    </div>
                </div>
                <HomePageNavbar />
            </div>
            <SignInDialog
                isOpen={openFormSignUp}
                onClose={() => setOpenFormSignUp(false)}
            />
        </header>
    )
}

function SearchingInput() {
    const [textSearching, setTextSearching] = useState<string>("");
    return (
        <div className="flex items-center justify-start w-full px-4 py-2 border rounded-md">
            <input
                placeholder="Search for products"
                className="w-full outline-none"
                onChange={(e) => setTextSearching(e.target.value)}
                value={textSearching}
            />
            <span
                className="cursor-pointer"
                onClick={() => {
                    textSearching.length > 0 ? setTextSearching("") : null;
                }}
            >
                {textSearching?.length > 0 ? <IoClose /> : <FiSearch />}
            </span>
        </div>
    );
}


function HomePageNavbar({ }: Props) {
    return (
        <div className='flex flex-row items-center justify-start gap-5 py-3'>
            <div className='flex items-center gap-2 px-6 py-2 text-white bg-green-500 rounded-md'>
                <span><TfiLayoutGrid2 /></span>
                <span className='font-bold'>All Department</span>
            </div>
            <div className='flex flex-row justify-start gap-5'>
                {
                    MENU.map((menu, index) => (
                        <Link href={menu?.value} key={index} legacyBehavior>
                            <a className='p-2 font-bold hover:text-green-700' >
                                {menu.label}
                            </a>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

const MENU = [
    {
        value: "/",
        label: "Home"
    },
    {
        value: "/shop",
        label: "Shop"
    },
    {
        value: "/store",
        label: "Store"
    },
    {
        value: "/mega",
        label: "Mega menu"
    },
    {
        value: "/page",
        label: "Pages"
    },
    {
        value: "/contact",
        label: "Contact"
    },
]