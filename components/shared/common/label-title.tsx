import React from 'react'

type Props = {
    text: string
    className?: string | any;
}

export function LabelTitle({ text, className, ...props }: Props) {
    return (
        <div className={`text-2xl font-bold capitalize ${className}`}>
            {text}
        </div>
    )
}