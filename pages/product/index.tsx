import { ProductDetails } from '@/components/index/product-details/product-details';
import { DefaultLayout } from '@/layouts/default-layout/default-layout';


export default function Page() {
    return (
        <>
            <ProductDetails />
        </>
    )
}

Page.Layout = DefaultLayout;