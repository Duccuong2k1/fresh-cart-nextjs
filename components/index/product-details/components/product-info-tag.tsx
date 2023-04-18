import React from 'react'

type Props = {}

export function ProductInfoTag({ }: Props) {
    return (
        <div className='w-full lg:w-1/2'>
            <div className='flex flex-row items-center justify-start gap-5 p-4 text-gray-600 bg-gray-100 border-b'>
                <span className='w-1/2 font-semibold'>Weight</span>
                <span className='w-1/2'>1000 grams</span>
            </div>
            <div className='flex flex-row items-center justify-start gap-5 p-4 text-gray-600 border-b'>
                <span className='w-1/2 font-semibold'>Ingredient Type</span>
                <span className='w-1/2'>Vegetarian</span>
            </div>
            <div className='flex flex-row items-center justify-start gap-5 p-4 text-gray-600 bg-gray-100 border-b'>
                <span className='w-1/2 font-semibold'>Item Package Quantity</span>
                <span className='w-1/2'>1</span>
            </div>
            <div className='flex flex-row items-center justify-start gap-5 p-4 text-gray-600 border-b'>
                <span className='w-1/2 font-semibold'>Brand</span>
                <span className='w-1/2'>Dmart</span>
            </div>
            <div className='flex flex-row items-center justify-start gap-5 p-4 text-gray-600 bg-gray-100 border-b'>
                <span className='w-1/2 font-semibold'>Form</span>
                <span className='w-1/2'>Larry the Bird</span>
            </div>
            <div className='flex flex-row items-center justify-start gap-5 p-4 text-gray-600 border-b'>
                <span className='w-1/2 font-semibold'>Product Dimensions</span>
                <span className='w-1/2'>9.6 x 7.49 x 18.49 cm</span>
            </div>
        </div>
    )
}