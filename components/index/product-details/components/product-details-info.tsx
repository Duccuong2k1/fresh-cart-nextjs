import React, { useState } from "react";
import { ProductDetailTag } from "./product-detail-tag";
import { ProductInfoTag } from "./product-info-tag";
import { ProductReviewsTag } from "./product-reviews-tag";

type Props = {};

export function ProductDetailsInfo({ }: Props) {
    const [tagSelected, setTagSelected] = useState("DETAILS");
    return (
        <div className="pt-10 my-10 ">
            <div className="flex justify-start gap-8 border-b">
                {TAG_INFO.map((tag, index) => (
                    <span
                        key={index}
                        className={`py-3 capitalize  font-medium text-gray-600 w-28 cursor-pointer whitespace-nowrap transition-all delay-100 text-center ${tagSelected === tag.value
                            ? "border-b border-green-500 text-green-600 "
                            : ""
                            } `}
                        onClick={() => setTagSelected(tag.value)}
                    >
                        {tag.label}
                    </span>
                ))}
            </div>
            <div className="my-6" >
                {tagSelected === "DETAILS" ? (
                    <ProductDetailTag />
                ) : tagSelected === "INFO" ? (
                    <ProductInfoTag />
                ) : tagSelected === "REVIEW" ? (
                    <ProductReviewsTag />
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

const TAG_INFO = [
    { value: "DETAILS", label: "Product details" },
    { value: "INFO", label: "information" },
    { value: "REVIEW", label: "reviews" },
    // { value: "SELLER", label: "Seller info" },
];
