import { LabelTitle } from '@/components/shared/common/label-title';
import { ProductItem } from '@/components/shared/common/product-item';
import React from 'react';

type Props = {};

export function HomePageProducts({ }: Props) {
    return (
        <div className="py-5 my-10 main-container">
            <LabelTitle text="Popular products" />
            <div className="grid grid-cols-2 gap-4 mt-5 lg:grid-cols-5 md:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((product, index) => (
                    <ProductItem key={index} />
                ))}
            </div>
        </div>
    );
}

