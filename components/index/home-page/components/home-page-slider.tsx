

import { Button } from '@/components/shared/utilities/form/button';
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper React components
// Import Swiper styles
// import required modules
type Props = {}

export function HomePageSlider({ }: Props) {
    return (
        <div className='my-5 main-container'>
            <Swiper

                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    bulletActiveClass: `bg-green-600 hover:bg-green-600 w-4`,
                    bulletClass: `inline-block mx-1 w-2.5 h-2.5 bg-gray-400 bg-opacity-60 hover:bg-gray-700 rounded-full transition-all cursor-pointer`,
                }} modules={[Pagination, Autoplay]} className="mySwiper ">
                {
                    SLIDER_BANNER.map((slider, index) => (

                        <SwiperSlide className='relative rounded-md lg:h-auto h-72' key={index} >
                            <img src={slider.image} className="object-cover w-full h-full rounded-sm" />
                            <div className='absolute w-2/3 transform lg:w-1/3 lg:top-1/3 top-20 left-10 lg:left-20'>
                                <span className='bg-yellow-400 font-bold rounded-lg text-black whitespace-nowrap text-xs lg:text-[12px] py-1 px-3 my-3'>{slider.tag}</span>
                                <div className='my-3 text-2xl font-semibold text-black lg:text-5xl'>{slider.title}</div>
                                <p className='my-3 text-xs font-medium text-gray-500 lg:text-base '>{slider.desc}</p>
                                <Button
                                    text='shop now'
                                    icon={<HiArrowNarrowRight />}
                                    href="/shop"
                                    iconPosition='end'
                                    className={"bg-gray-900 hover:bg-gray-700 text-white"}

                                />
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}

const SLIDER_BANNER = [
    {
        title: "Free shipping on order over $100",
        image: "/assets/imgs/slide-1.jpg",
        desc: "Free Shipping to First-Time Customers Only, After promotions and discounts are applied.",
        tag: "Free shipping - over order $100"
    },
    {
        title: "SupperMarket for fresh grocery",
        image: "/assets/imgs/slider-2.jpg",
        desc: "Free Shipping to First-Time Customers Only, After promotions and discounts are applied.",
        tag: "Opening sale discount 50%"
    },
]