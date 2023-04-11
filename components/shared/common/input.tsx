import React from "react";

type InputProps = {
    label?: string;
    name: string;
    placeholder?: string;
    inputClassName?: string | any;
    type?: "number" | "text" | "phone" | string;
};

export function Input({
    label,
    name,
    placeholder,
    inputClassName,
    type = "text",
    ...props
}: InputProps) {
    return (
        <div>
            <label htmlFor="" className="block font-semibold text-gray-800">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className={`w-full p-2 my-3 border rounded ${inputClassName}`}
            />
        </div>
    );
}
