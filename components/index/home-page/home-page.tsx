import React from 'react'
import { ToastContainer } from 'react-toastify'
import { HomePageAds } from './components/home-page-ads'
import { HomePageBestSell } from './components/home-page-best-sell'
import { HomePageCategories } from './components/home-page-categories'
import { HomePageInfoProcess } from './components/home-page-info-process'
import { HomePageProducts } from './components/home-page-products'
import { HomePageSlider } from './components/home-page-slider'

type Props = {}

export function HomePage({ }: Props) {
    return (
        <>
            <HomePageSlider />
            <HomePageCategories />
            <HomePageAds />
            <HomePageProducts />
            <HomePageBestSell />
            <HomePageInfoProcess />

        </>
    )
}