
import { ProductDetailDialog } from '@/components/shared/common/product/product-detail-dialog';
import { useRouter } from 'next/router';
import React, { createContext, Dispatch, FC, SetStateAction, useContext, useEffect, useState } from 'react';
import { ProductType } from '../res/product';
import productApi from '@/pages/api/product/productApi';

export const ProductContext = createContext<
    Partial<{
        product: ProductType | undefined;
        products: ProductType[]
        setProduct?: (product: ProductType) => void;
    }>
>({});
export function ProductProvider({ ...props }: { children: React.ReactNode }) {
    const [product, setProduct] = useState<ProductType | undefined>(undefined);

    const [products, setProducts] = useState([])
    useEffect(() => {
        const params = {};
        // Fetch products data from productApi
        const fetchingProducts = async () => {
            try {
                const response = await productApi.getAll(params);
                const productsData = response;
                setProducts(productsData as any);
            } catch (error) {
                // Handle error
                console.error(error);
            }
        };
        fetchingProducts();
    }, []);

    return (
        <ProductContext.Provider
            value={{
                product,
                setProduct,
                products,
            }}
        >
            {props.children}

            <ProductDetailDialog
                isOpen={!!product}
                onClose={() => setProduct(undefined)}
            />

        </ProductContext.Provider>
    );
}
export const useProductContext = () => useContext(ProductContext);
