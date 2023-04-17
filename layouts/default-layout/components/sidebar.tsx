import Link from 'next/link'
import { SlideOut, SildeOutProps } from '../../../components/shared/utilities/form/slide-out'
import React from 'react'
import { MENU, SearchingInput } from './header'
import { FiShoppingBag } from 'react-icons/fi'
import { TfiLayoutGrid2 } from 'react-icons/tfi'
interface SidebarProps extends SildeOutProps { }

export function Sidebar({ ...props }: SidebarProps) {
    return (
        <SlideOut isOpen={props.isOpen} onClose={props.onClose} className={`w-full`} >
            <div className=''>

                <Link href="/" className=''>

                    <div className="flex items-center gap-2 mb-4 mr-8 text-2xl font-semibold"> <span className="text-green-600"><FiShoppingBag /></span> FreshCart</div>
                </Link>
                <SearchingInput />

                <div className='flex flex-col items-start justify-start gap-5 py-3'>
                    <div className='flex flex-row items-center justify-center w-full gap-2 px-6 py-2 text-white bg-green-500 rounded-md'>
                        <span><TfiLayoutGrid2 /></span>
                        <span className='font-bold'>All Department</span>
                    </div>
                    <div className='flex flex-col items-start w-full gap-2'>
                        {
                            MENU.map((menu, index) => (
                                <Link href={menu?.value} key={index} legacyBehavior>
                                    <a className='block w-full p-2 font-bold border-b hover:text-green-700' >
                                        {menu.label}
                                    </a>
                                </Link>
                            ))
                        }
                    </div>
                </div>

            </div>
        </SlideOut>
    )
}