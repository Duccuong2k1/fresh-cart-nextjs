import { CategoriesPage } from '@/components/index/categories-page/categories-page';
import { DefaultLayout } from '@/layouts/default-layout/default-layout';


export default function Page() {
    return (
        <>
            <CategoriesPage />
        </>
    )
}

Page.Layout = DefaultLayout;