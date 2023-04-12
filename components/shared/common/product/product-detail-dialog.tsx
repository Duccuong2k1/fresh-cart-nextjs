import React from 'react'
import { Dialog, DialogProps } from '../../utilities/form/dialog'
import { ProductViewSlider } from './product-view-slider'
import { ProductViewInfo } from './product-view-info'

interface ProductProps extends DialogProps {
    product?: any
}

export function ProductDetailDialog({ product, ...props }: ProductProps) {
    return (
        <>
            <Dialog

                maxWidth={900}
                isOpen={props.isOpen}
                onClose={props.onClose}
            >
                <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 ">
                    <ProductViewSlider />
                    <ProductViewInfo />
                </div>
            </Dialog>
        </>
    )
}