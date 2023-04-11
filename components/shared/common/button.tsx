import Link from "next/link";
import React from "react";

type ButtonPropsType = {
    icon?: JSX.Element;
    text?: string;
    className?: string | any;
    href?: string;
    iconPosition?: "start" | "end" | string;
};

export function Button({
    href,
    text = "",
    icon,
    className = ``,
    iconPosition,
    ...props
}: ButtonPropsType) {
    let buttonStyle = `flex items-center px-4 py-2 font-semibold text-white capitalize bg-gray-900 rounded-md hover:bg-gray-700`;
    return (
        <>
            {href ? (
                <Link href={href}>
                    <button className={`${buttonStyle} ${className}`}>
                        {iconPosition === "start" && (
                            <span className="text-xl">{icon}</span>
                        )}

                        {text}

                        {iconPosition === "end" && (
                            <span className="ml-3 text-xl">{icon}</span>
                        )}
                    </button>
                </Link>
            ) : (
                <button className={`${buttonStyle} ${className}`}>
                    {iconPosition === "start" && (
                        <span className="text-xl ">{icon}</span>
                    )}

                    {text}

                    {iconPosition === "end" && (
                        <span className="ml-3 text-xl">{icon}</span>
                    )}
                </button>
            )}
        </>
    );
}
