import React from 'react'
import { SildeOutProps, SlideOut } from '../utilities/form/slide-out'
import { CATEGORY_LIST, CATEGORY_STORES } from '@/components/index/categories-page/components/categories-filter'
import Link from 'next/link'

interface CategoryFilterProps extends SildeOutProps {

}

export function CategoriesFilterSlideOut({ ...props }: CategoryFilterProps) {
    return (
        <>
            <SlideOut
                isOpen={props.isOpen}
                onClose={props.onClose}
                className={`w-full`}
            >
                <form className="mt-4 ">
                    <div className="ml-3 font-semibold">Categories</div>
                    <ul role="list" className="px-1 py-3 font-medium text-gray-900">
                        {
                            CATEGORY_LIST.map((category, index) => (
                                <li className="" key={index}>

                                    <Link href={`/categories?tag=${category?.value}` ?? "/"} className="block px-2 py-3 border-t border-gray-200">
                                        {category?.label}
                                    </Link>
                                </li>
                            ))
                        }

                    </ul>

                    <div className="px-3 py-6 border-t border-gray-200">
                        <h3 className="flow-root -mx-2 -my-3">
                            <button type="button" className="flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                                <span className="font-medium text-gray-900">Stores</span>
                                {/* <span className="flex items-center ml-6">
                <i><AiOutlinePlus /></i>
                <i><AiOutlineMinus /></i>
              </span> */}
                            </button>
                        </h3>
                        <div className="pt-6" id="filter-section-mobile-0">
                            <div className="space-y-6">
                                {
                                    CATEGORY_STORES.map((store, index) => (

                                        <div className="flex items-center" key={index}>
                                            <input id="filter-mobile-color-0" name="color[]" value={store?.value} type="checkbox" className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-600" />
                                            <label htmlFor="filter-mobile-color-0" className="flex-1 min-w-0 ml-3 text-gray-500">{store?.label}</label>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>

                </form>


            </SlideOut>
        </>
    )
}