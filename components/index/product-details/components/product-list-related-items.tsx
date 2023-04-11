import { LabelTitle } from '@/components/shared/common/label-title'
import { ProductItem } from '@/components/shared/common/product-item'
import React from 'react'

type Props = {}

export function ProductListRelatedItems({ }: Props) {
    return (
        <div className='py-10'>
            <LabelTitle text='related items' />
            <div className='grid grid-cols-2 gap-5 my-8 lg:grid-cols-5 md:grid-cols-3'>
                {
                    [1, 2, 4, 5, 3].map((product, index) => (
                        <ProductItem key={index} />
                    ))
                }
            </div>
        </div>
    )
}