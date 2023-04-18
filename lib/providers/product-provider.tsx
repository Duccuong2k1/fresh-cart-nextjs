
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
        productDetail: ProductType | undefined;
        setProductDetail?: (product: ProductType) => void;

    }>
>({});
export function ProductProvider({ ...props }: { children: React.ReactNode }) {
    const [product, setProduct] = useState<ProductType | undefined>(undefined);
    const [productDetail, setProductDetail] = useState<ProductType | undefined>(undefined);

    const [products, setProducts] = useState([])
    const router = useRouter()
    const { productId } = router.query;
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
    useEffect(() => {

        const fetchingProducts = async () => {
            try {
                const response = await productApi.getOne(productId as string);
                const productsData = response;
                setProductDetail(productsData as any);
            } catch (error) {
                // Handle error
                console.error(error);
            }
        };
        fetchingProducts();
    }, [productId]);
    return (
        <ProductContext.Provider
            value={{
                product,
                setProduct,
                products,
                productDetail,
            }}
        >
            {props.children}

            <ProductDetailDialog
                isOpen={!!product}
                onClose={() => setProduct(undefined)}
                product={product}
            />

        </ProductContext.Provider>
    );
}
export const useProductContext = () => useContext(ProductContext);
