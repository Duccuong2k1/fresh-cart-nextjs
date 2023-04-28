import { Breadcrumb } from '@/components/shared/common/breadcrumb'
import { useRouter } from 'next/router'
import React from 'react'
import { CategoriesFilter } from './components/categories-filter'
import { CategoriesProductList } from './components/categories-product-list'

type Props = {}

export function CategoriesPage({ }: Props) {
    const router = useRouter()
    return (
        <div className='main-container'>
            <Breadcrumb
                listPathName={[
                    { name: "Shop", href: "/" },
                    { name: "Snack & food", href: "" },
                ]}
            />
            <div className='flex flex-row justify-start gap-8'>
                <CategoriesFilter />
                <CategoriesProductList />
            </div>
        </div>
    )
}

