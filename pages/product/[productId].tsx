import { HomePage } from '@/components/index/home-page/home-page';
import { DefaultLayout } from '@/layouts/default-layout/default-layout';


export default function Page() {
    return (
        <>
            <HomePage />
        </>
    )
}

Page.Layout = DefaultLayout;