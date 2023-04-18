import { LabelTitle } from '@/components/shared/common/label-title'
import { ProductItem } from '@/components/shared/common/product/product-item'
import { Spinner } from '@/components/shared/utilities/misc'
import { useProductContext } from '@/lib/providers/product-provider'
import productApi from '@/pages/api/product/productApi'
import React, { useEffect, useState } from 'react'

type Props = {}

export function ProductListRelatedItems({ }: Props) {
    const { products } = useProductContext()
    if (!products) return <Spinner />
    return (
        <div className='py-0 lg:py-10'>
            <LabelTitle text='related items' />
            <div className='grid grid-cols-2 gap-5 my-8 lg:grid-cols-5 md:grid-cols-3'>
                {
                    products?.slice(0, 5).map((product, index) => (
                        <ProductItem key={index} productItem={product} />
                    ))
                }
            </div>
        </div>
    )
}