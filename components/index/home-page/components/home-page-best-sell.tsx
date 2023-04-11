import { Button } from "@/components/shared/common/button";
import { LabelTitle } from "@/components/shared/common/label-title";
import { RatingStar } from "@/components/shared/common/rating-star";
import Link from "next/link";
import React from "react";
import {
    AiFillStar,
    AiOutlineEye,
    AiOutlineHeart,
    AiOutlineStar,
} from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";
import { RiAddFill } from "react-icons/ri";
import { TbArrowsRightLeft } from "react-icons/tb";

type Props = {};

export function HomePageBestSell({ }: Props) {
    return (
        <div className="my-8 main-container">
            <LabelTitle text="Daily best sells" />
            <div className="grid grid-cols-4 gap-5 py-8 my-4 overflow-x-auto ">
                <div
                    className="px-6 pt-8 bg-no-repeat bg-cover rounded-md"
                    style={{
                        backgroundImage: 'url("/assets/imgs/banner-deal.jpg")',
                        height: "470px",
                    }}
                >
                    <div className="text-3xl font-semibold text-white capitalize">
                        100% organic coffee beans
                    </div>
                    <div className="my-2 text-white">Get the best deal before close</div>
                    <Button
                        text="shop now"
                        icon={<HiArrowNarrowRight />}
                        href="/shop"
                        iconPosition="end"
                        className={
                            "bg-green-500 text-white hover:bg-green-600 hover:shadow-md"
                        }
                    />
                </div>
                {[1, 2, 3].map((product, index) => (
                    <ProductBestSellItem key={index} />
                ))}
            </div>
        </div>
    );
}

function ProductBestSellItem() {
    return (
        <div className="relative p-3 transition-all delay-75 border border-gray-200 rounded-md product-item hover:shadow-lg hover:border-green-600">
            <Link href={"/"}>
                <img
                    src="https://freshcart.codescandy.com/assets/images/products/product-img-1.jpg"
                    alt="image product"
                    className="object-cover mx-auto "
                />

                <div className="my-1 text-sm text-gray-500">snack & rice</div>

                <div className="my-1 font-semibold text-gray-800 hover:text-green-600">
                    Haldirams Sev Bhujia
                </div>
            </Link>
            <div className="flex items-center justify-between mt-3">
                <div className="flex items-center justify-start gap-2">
                    <span className="font-semibold text-gray-800">$24</span>{" "}
                    <del className="text-gray-400 ">$55</del>{" "}
                </div>
                <RatingStar numberStar={4.6} buyAmount={342} />
            </div>
            <Button
                text="Add to cart"
                icon={<RiAddFill />}
                iconPosition="start"
                className={
                    "bg-green-600 text-white hover:bg-green-700 w-full my-3 flex justify-center items-center"
                }
            />
            <TimerProductSell />

            <div className="absolute flex-row items-center justify-center flex-none gap-1 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 product-item__option">
                <span className="p-2 bg-white rounded-md shadow-md hover:bg-green-500 hover:text-white">
                    <AiOutlineEye />
                </span>
                <span className="p-2 bg-white rounded-md shadow-md hover:bg-green-500 hover:text-white">
                    <AiOutlineHeart />
                </span>
                <span className="p-2 bg-white rounded-md shadow-md hover:bg-green-500 hover:text-white">
                    <TbArrowsRightLeft />
                </span>
            </div>
        </div>
    );
}

function TimerProductSell() {
    return (
        <div className="flex flex-row flex-wrap items-center justify-center gap-3">
            <div className="px-4 py-2 text-center border rounded">
                <div className="font-medium">2023</div>
                <div className="text-sm text-gray-500">Days</div>
            </div>
            <div className="px-4 py-2 text-center border rounded">
                <div className="font-medium">12</div>
                <div className="text-sm text-gray-500">Hours</div>
            </div>
            <div className="px-4 py-2 text-center border rounded">
                <div className="font-medium">22</div>
                <div className="text-sm text-gray-500">Mins</div>
            </div>
            <div className="px-4 py-2 text-center border rounded">
                <div className="font-medium">12</div>
                <div className="text-sm text-gray-500">Sec</div>
            </div>
        </div>
    );
}
