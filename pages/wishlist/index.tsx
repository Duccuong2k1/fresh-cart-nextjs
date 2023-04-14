import { WishlistPage } from '@/components/index/wishlist-page/wishlist-page';
import { DefaultLayout } from '@/layouts/default-layout/default-layout';


export default function Page() {
    return (
        <>
            <WishlistPage />
        </>
    )
}

Page.Layout = DefaultLayout;