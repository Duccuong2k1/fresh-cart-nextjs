import { Breadcrumb } from '@/components/shared/common/breadcrumb';
import { ProductViewInfo } from '@/components/shared/common/product/product-view-info';
import { ProductViewSlider } from '@/components/shared/common/product/product-view-slider';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { ProductDetailsInfo } from './components/product-details-info';
import { ProductListRelatedItems } from './components/product-list-related-items';

// Import Swiper styles
// import required modules
type Props = {};


export function ProductDetails({ }: Props) {
    const router = useRouter();

    return (
        <div className="py-5 main-container">
            <Breadcrumb />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
                <ProductViewSlider />
                <ProductViewInfo />
            </div>
            <ProductDetailsInfo />
            <ProductListRelatedItems />
        </div>
    );
}

