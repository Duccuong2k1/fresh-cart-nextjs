import { Spinner } from "@/components/shared/utilities/misc";
import { useProductContext } from "@/lib/providers/product-provider";
import React, { useState } from "react";
import { BsGrid, BsGrid3X3Gap } from "react-icons/bs";
import { RiListCheck } from "react-icons/ri";

import { CategoryProductItem } from "./category-product-item";
import { ProductItem } from "@/components/shared/common/product/product-item";

type Props = {};

export function CategoriesProductList({ }: Props) {
    const { products } = useProductContext();
    const [typeLayout, setTypeLayout] = useState<
        "GRID" | "LIST" | "GRID3X" | string
    >("GRID");
    return (
        <div className="flex-1">
            <div className="px-5 py-8 text-3xl font-semibold bg-gray-100 rounded-md">
                snacks & munchies
            </div>
            <div className="flex flex-row items-center justify-between my-3 ">
                <div>
                    {" "}
                    <span className="px-1 font-semibold">
                        {products?.length || 0}
                    </span>{" "}
                    Products found
                </div>
                <div className="flex flex-row items-center justify-end gap-3">
                    {TYPE_LAYOUT?.map((type, index) => (
                        <span
                            className={`p-2 cursor-pointer ${typeLayout === type?.type ? "text-green-600 font-semibold" : ""
                                } `}
                            onClick={() => setTypeLayout(type.type)}
                            key={index}
                        >
                            {type.icon}
                        </span>
                    ))}

                    <select
                        name=""
                        id=""
                        defaultValue={10}
                        className="px-3 py-2 border rounded focus:border-green-500"
                    >
                        <option value="10">sort: 10</option>
                        <option value="">10</option>
                        <option value="">20</option>
                        <option value="">30</option>
                    </select>
                </div>
            </div>
            <div
                className={`grid gap-5 my-8  ${typeLayout === "LIST"
                        ? "grid-rows-1"
                        : typeLayout === "GRID3X"
                            ? "grid-cols-3"
                            : "grid-cols-4"
                    }`}
            >
                {!products?.length ? (
                    <Spinner />
                ) : (
                    <>
                        {typeLayout === "LIST" ? (
                            <>
                                {products.map((product, index) => (
                                    <CategoryProductItem key={index} productItem={product} />
                                ))}
                            </>
                        ) : (
                            <>
                                {products.map((product, index) => (
                                    <ProductItem key={index} productItem={product} />
                                ))}
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

const TYPE_LAYOUT = [
    { type: "GRID", icon: <BsGrid /> },
    { type: "LIST", icon: <RiListCheck /> },
    { type: "GRID3X", icon: <BsGrid3X3Gap /> },
];
