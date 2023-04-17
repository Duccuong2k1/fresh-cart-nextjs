import { LabelTitle } from '@/components/shared/common/label-title';
import { ProductItem } from '@/components/shared/common/product/product-item';
import { Spinner } from '@/components/shared/utilities/misc';
import { useProductContext } from '@/lib/providers/product-provider';
import { ProductType } from '@/lib/res/product';
import productApi from '@/pages/api/product/productApi';
import React, { useEffect, useState } from 'react';

type Props = {};

export function HomePageProducts({ }: Props) {
    const { products } = useProductContext();
    if (!products) return <Spinner />
    return (
        <div className="py-5 my-10 main-container">
            <LabelTitle text="Popular products" />
            <div className="grid grid-cols-2 gap-4 mt-5 lg:grid-cols-5 md:grid-cols-3">
                {products.map((product, index) => (
                    <ProductItem key={index} productItem={product} />
                ))}
            </div>
        </div>
    );
}

