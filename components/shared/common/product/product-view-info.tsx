import Link from "next/link";
import { RatingStar } from "../rating-star";
import { Button } from "../../utilities/form/button";
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { ProductType } from "@/lib/res/product";
import { useDispatch } from "react-redux";
import {
    addToCart,
    inCrementQuantity,
    inDecrementQuantity,
} from "@/app/cart/cartSlice";
import { useToast } from "@/lib/providers/toast-provider";
import { addProductToWish } from "@/app/cart/wishlist";

export function ProductViewInfo({ productInfo }: { productInfo: ProductType }) {
    const dispatch = useDispatch();
    const toast = useToast();

    return (
        <div className="flex flex-col justify-start gap-2">
            <Link
                href="/"
                className="font-semibold text-green-500 hover:text-green-700"
            >
                {productInfo?.category}
            </Link>
            <div className="text-4xl font-semibold capitalize">
                {productInfo?.name}
            </div>
            <RatingStar />
            <div className="flex flex-row items-center justify-start gap-5">
                <span className="text-2xl font-semibold text-gray-800 ">
                    ${productInfo?.price}
                </span>
                <del className="text-xl font-semibold text-gray-400 ">
                    ${productInfo?.priceOld}
                </del>
                <span className="text-sm font-semibold text-red-500 ">
                    {productInfo?.tag}
                </span>
            </div>
            <hr className="my-5" />
            <div className="flex flex-row items-center justify-start gap-2">
                {productInfo?.options?.length &&
                    productInfo?.options?.map((tag, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 font-medium text-gray-500 border rounded-lg cursor-pointer hover:bg-gray-400 hover:text-white "
                        >
                            {tag}
                        </span>
                    ))}
            </div>
            <div className="flex flex-row items-center justify-start my-3">
                <Button
                    icon={<AiOutlineMinus />}
                    iconPosition="start"
                    className={"bg-white  hover:bg-slate-50 border rounded-sm px-1.5 "}
                    onClick={() => dispatch(inDecrementQuantity(productInfo?.id))}
                    iconClassName="text-gray-600"
                />
                <span className="px-3 py-1 text-xl border-t border-b">{1}</span>
                <Button
                    icon={<AiOutlinePlus />}
                    iconPosition="start"
                    className={"bg-white hover:bg-slate-50 border rounded-sm px-1.5"}
                    onClick={() => dispatch(inCrementQuantity(productInfo?.id))}
                    iconClassName="text-gray-600"
                />
            </div>
            <div className="flex items-center justify-start gap-3">
                <Button
                    icon={<FiShoppingBag />}
                    iconPosition="start"
                    text="Add to cart"
                    className={
                        "bg-green-500 hover:bg-green-600 text-white px-6 flex gap-2 items-center text-sm"
                    }
                    onClick={() => {
                        dispatch(addToCart(productInfo));
                        toast.success("Add to cart success!");
                    }}
                />
                <span className="p-3 rounded-md cursor-pointer bg-slate-100 hover:bg-slate-300">
                    <HiArrowsRightLeft />
                </span>
                <span className="p-3 rounded-md cursor-pointer bg-slate-100 hover:bg-slate-300"
                    onClick={() => {
                        dispatch(addProductToWish(productInfo));
                        toast.success("Add product to wishlist success!");
                    }}
                >
                    <AiOutlineHeart />
                </span>
            </div>

            <hr className="my-5" />
            <div className="flex flex-row items-center justify-start my-2 text-gray-600 ">
                <span className="w-1/3 capitalize ">product code:</span>{" "}
                <span>{productInfo?.code}</span>{" "}
            </div>
            <div className="flex flex-row items-center justify-start my-2 text-gray-600 ">
                <span className="w-1/3 capitalize ">availability:</span>{" "}
                <span>{productInfo?.status}</span>{" "}
            </div>
            <div className="flex flex-row items-center justify-start my-2 text-gray-600 ">
                <span className="w-1/3 capitalize ">type:</span>{" "}
                <span>{productInfo?.category}</span>{" "}
            </div>
            <div className="flex flex-row items-center justify-start my-2 text-gray-600 ">
                <span className="w-1/3 capitalize ">shipping:</span>{" "}
                <span>01 shipping (free pickup today</span>{" "}
            </div>
        </div>
    );
}
