import { ErrorCatcher } from '@/components/shared/error'
import React from 'react'
import { DefaultHead } from '../default-head'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { DefaultLayoutProvider } from './provider/default-layout-provider'
import { ProductProvider } from '@/lib/providers/product-provider'

interface PropsType extends ReactProps { }
export function DefaultLayout({ ...props }: PropsType) {
    return (
        <DefaultLayoutProvider  >
            <ProductProvider>
                <DefaultLayoutContent {...props}>{props.children}</DefaultLayoutContent>
            </ProductProvider>
        </DefaultLayoutProvider>
    )
}


function DefaultLayoutContent({ ...props }) {
    return (
        <>
            <DefaultHead />

            <div className="w-full min-h-screen mx-auto bg-white">
                <Header {...props} />
                <div className="min-h-screen">
                    <ErrorCatcher  >{props.children}</ErrorCatcher>

                </div>
                <Footer />
            </div>

        </>
    )
}