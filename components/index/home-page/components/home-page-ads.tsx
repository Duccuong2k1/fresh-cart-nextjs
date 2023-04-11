import { Button } from "@/components/shared/common/button";
import React from "react";

type Props = {};

export function HomePageAds({ }: Props) {
    return (
        <div className="grid grid-cols-1 gap-3 my-10 lg:grid-cols-2 lg:gap-8 main-container">
            <div
                className="w-full h-auto px-8 py-10 rounded-md"
                style={{
                    backgroundImage: "url('/assets/imgs/ads-1.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="my-3 text-2xl font-semibold capitalize">Fruits & vegetables</div>
                <div className="my-2 text-gray-500 capitalize">Get upto 30% off</div>
                <Button text="shop now"
                    className={"bg-gray-900 hover:bg-gray-700"}
                    href="/shop"

                />
            </div>
            <div
                className="w-full h-auto px-8 py-10 rounded-md"
                style={{
                    backgroundImage: "url('/assets/imgs/ads-2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="my-3 text-2xl font-semibold capitalize">freshly baked buns</div>
                <div className="my-2 text-gray-500 capitalize">Get upto 25% off</div>
                <Button text="shop now"
                    className={"bg-gray-900 hover:bg-gray-700"}
                    href="/shop"

                />
            </div>
        </div>
    );
}
