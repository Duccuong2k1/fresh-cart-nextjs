
import { ProductDetailDialog } from '@/components/shared/common/product/product-detail-dialog';
import { useRouter } from 'next/router';
import React, { createContext, Dispatch, FC, SetStateAction, useContext, useEffect, useState } from 'react';
interface Product {
    id?: number | string;
    name?: string;
    images?: string[]
}
export const ProductContext = createContext<
    Partial<{
        product: Product | null;
        setProduct?: Dispatch<SetStateAction<Product | null>>
    }>
>({});
export function ProductProvider({ ...props }: { children: React.ReactNode }) {
    const [product, setProduct] = useState<Product | null>(null);
    console.log("🚀 ~ file: product-provider.tsx:14 ~ ProductProvider ~ product:", product)



    return (
        <ProductContext.Provider
            value={{
                product,
                setProduct
            }}
        >
            {props.children}

            <ProductDetailDialog
                isOpen={!!product}
                onClose={() => setProduct(null)}
            />

        </ProductContext.Provider>
    );
}
export const useProductContext = () => useContext(ProductContext);
