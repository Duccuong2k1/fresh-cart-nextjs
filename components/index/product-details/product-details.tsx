import { Breadcrumb } from '@/components/shared/common/breadcrumb';
import { ProductViewInfo } from '@/components/shared/common/product/product-view-info';
import { ProductViewSlider } from '@/components/shared/common/product/product-view-slider';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { ProductDetailsInfo } from './components/product-details-info';
import { ProductListRelatedItems } from './components/product-list-related-items';
import { useProductContext } from '@/lib/providers/product-provider';
import { Spinner } from '@/components/shared/utilities/misc';

// Import Swiper styles
// import required modules
type Props = {};


export function ProductDetails({ }: Props) {
    const { productDetail } = useProductContext()
    if (!productDetail) return <Spinner />
    return (
        <div className="py-5 main-container">
            <Breadcrumb
                listPathName={[
                    { name: "Shop", href: "/shop" }
                ]}
            />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
                <ProductViewSlider productSlider={productDetail?.images as any} />
                <ProductViewInfo productInfo={productDetail} />
            </div>
            <ProductDetailsInfo />
            <ProductListRelatedItems />
        </div>
    );
}

