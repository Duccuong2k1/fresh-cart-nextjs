import { Breadcrumb } from '@/components/shared/common/breadcrumb';
import { Button } from '@/components/shared/utilities/form/button';
import { RatingStar } from '@/components/shared/common/rating-star';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FiShoppingBag } from 'react-icons/fi';
import { HiArrowsRightLeft } from 'react-icons/hi2';
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductDetailsInfo } from './components/product-details-info';
import { ProductListRelatedItems } from './components/product-list-related-items';

// Import Swiper styles
// import required modules
type Props = {};

SwiperCore.use([Navigation, Thumbs]);

export function ProductDetails({ }: Props) {
    const router = useRouter();

    return (
        <div className="py-5 main-container">
            <Breadcrumb />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
                <ProductViewSlider />
                <ProductViewInfo />
            </div>
            <ProductDetailsInfo />
            <ProductListRelatedItems />
        </div>
    );
}

function ProductViewSlider() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

    return (
        <div>
            <Swiper
                spaceBetween={10}
                thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                modules={[Thumbs]}
                className="transition-all delay-100 rounded-md"
            >
                {[1, 2, 3, 4, 5].map((img, index) => (
                    <SwiperSlide className="w-full h-[75%] transition-all delay-100" key={index}>

                        <div className="">
                            <img
                                src="/assets/imgs/product-single-img-1.jpg"
                                className="object-contain rounded-md"
                            />
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                className="mt-5 rounded-md listSwiper"

            >
                {[1, 2, 3, 4, 5].map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src="/assets/imgs/product-single-img-1.jpg"
                            className="object-cover rounded-lg cursor-pointer"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
function ProductViewInfo() {
    return (
        <div className="flex flex-col justify-start gap-2">
            <Link
                href="/"
                className="font-semibold text-green-500 hover:text-green-700"
            >
                bread & foods
            </Link>
            <div className="text-4xl font-semibold capitalize">napolitanke bread</div>
            <RatingStar />
            <div className="flex flex-row items-center justify-start gap-5">
                <span className="text-2xl font-semibold text-gray-800 " >$33</span>
                <del className="text-xl font-semibold text-gray-400 " >$54</del>
                <span className="text-sm font-semibold text-red-500 " >26% Off</span>
            </div>
            <hr className="my-5" />
            <div className="flex flex-row items-center justify-start gap-5">
                {
                    [123, 466, 33].map((tag, index) => (
                        <span key={index} className="px-4 py-2 font-medium text-gray-500 border rounded-lg cursor-pointer hover:bg-gray-400 hover:text-white ">
                            {tag}kg
                        </span>
                    ))
                }
            </div>
            <div className="flex flex-row items-center justify-start my-3">
                <Button
                    icon={<AiOutlineMinus />}
                    iconPosition="start"
                    className={"bg-white  hover:bg-slate-50 border rounded-sm px-1.5 "}
                    onClick={() => console.log("minus")}
                    iconClassName="text-gray-600"
                />
                <span className="px-3 py-1 text-xl border-t border-b" >1</span>
                <Button
                    icon={<AiOutlinePlus />}
                    iconPosition="start"
                    className={"bg-white hover:bg-slate-50 border rounded-sm px-1.5"}
                    onClick={() => console.log("plus")}
                    iconClassName="text-gray-600"

                />
            </div>
            <div className="flex items-center justify-start gap-3">
                <Button
                    icon={<FiShoppingBag />}
                    iconPosition="start"
                    text="Add to cart"
                    className={"bg-green-500 hover:bg-green-600 text-white px-6 flex gap-2 items-center text-sm"}
                />
                <span className="p-3 rounded-md cursor-pointer bg-slate-100 hover:bg-slate-300" ><HiArrowsRightLeft /></span>
                <span className="p-3 rounded-md cursor-pointer bg-slate-100 hover:bg-slate-300" ><AiOutlineHeart /></span>
            </div>

            <hr className="my-5" />
            <div className="flex flex-row items-center justify-start my-2 text-gray-600 "><span className="w-1/3 capitalize ">product code:</span> <span>sdfasd33</span> </div>
            <div className="flex flex-row items-center justify-start my-2 text-gray-600 "><span className="w-1/3 capitalize ">availability:</span> <span>in stock</span> </div>
            <div className="flex flex-row items-center justify-start my-2 text-gray-600 "><span className="w-1/3 capitalize ">type:</span> <span>foods</span> </div>
            <div className="flex flex-row items-center justify-start my-2 text-gray-600 "><span className="w-1/3 capitalize ">shipping:</span> <span>01 shipping (free pickup today</span> </div>
        </div>
    );
}
