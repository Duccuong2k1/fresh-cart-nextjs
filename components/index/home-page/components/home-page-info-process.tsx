import React from 'react'
import { AiOutlineClockCircle, AiOutlineGift } from 'react-icons/ai'
import { FiRefreshCw } from 'react-icons/fi'
import { BsBox } from "react-icons/bs";
type Props = {}

export function HomePageInfoProcess({ }: Props) {
    return (
        <div className='grid grid-cols-2 gap-2 my-5 lg:my-14 main-container lg:grid-cols-4 lg:gap-5'>
            {
                INFO_PROCESS.map((item, index) => (
                    <BoxInfo info={item} key={index} />
                ))
            }
        </div>
    )
}

function BoxInfo({ info }: { info: any }) {
    return (
        <div className='flex flex-col justify-start gap-3 '>
            <span className='text-4xl text-green-500' >{info.icon}</span>
            <div className='text-xl font-semibold '>{info.title}</div>
            <p className='text-gray-500'>{info?.desc}</p>
        </div>
    )
}

const INFO_PROCESS = [
    {
        icon: <AiOutlineClockCircle />,
        title: "10 minute grocery now",
        desc: "Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you."
    },
    {
        icon: <AiOutlineGift />,
        title: "Best Prices & Offers",
        desc: "Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers."
    },
    {
        icon: <BsBox />,
        title: "Wide Assortment",
        desc: "Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories."
    },
    {
        icon: <FiRefreshCw />,
        title: "Easy Returns",
        desc: "Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy."
    },
]