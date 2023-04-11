import React from 'react'
import { AiFillStar } from 'react-icons/ai';

type Props = {
    star: number;
    numberPercent: number
}

export function ProgressStart({ star, numberPercent }: Props) {
    return (
        <>
            <div className='flex flex-row items-center justify-start gap-3 my-2'>
                <span className='flex items-center text-gray-500 gap-x-2 '>{star} <i className='text-yellow-500'><AiFillStar /></i> </span>
                <div className="w-full bg-gray-200 rounded-full h-1.5  dark:bg-slate-100">
                    <div className="bg-yellow-400 h-1.5 rounded-full dark:bg-gray-300" style={{ width: `${numberPercent}%` }}></div>
                </div>
                <span className='text-sm text-gray-400' >{numberPercent}%</span>
            </div>
        </>
    )
}