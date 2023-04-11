import React from 'react'

type Props = {
    text: string
}

export function LabelTitle({ text, ...props }: Props) {
    return (
        <div className='text-2xl font-bold capitalize'>
            {text}
        </div>
    )
}