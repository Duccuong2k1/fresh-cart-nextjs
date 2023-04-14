
import { ShopCartSlideOut } from '@/components/shared/common/cart/shop-cart-slideout';
import { SlideOut } from '@/components/shared/utilities/form/slide-out';
import { useRouter } from 'next/router';
import React, { createContext, FC, useContext, useEffect, useState } from 'react';

export const DefaultLayoutContext = createContext<
    Partial<{
        openCartSlideOut?: boolean;
        setOpenCartSlideOut?: (isOpen: boolean) => void;
    }>
>({});
export function DefaultLayoutProvider({ ...props }: { children: React.ReactNode }) {

    const [openCartSlideOut, setOpenCartSlideOut] = useState(false)

    return (
        <DefaultLayoutContext.Provider
            value={{
                openCartSlideOut,
                setOpenCartSlideOut,
            }}
        >
            {props.children}
            <ShopCartSlideOut
                isOpen={openCartSlideOut}
                onClose={() => setOpenCartSlideOut(false)}
            />
        </DefaultLayoutContext.Provider>
    );
}
export const useDefaultLayoutContext = () => useContext(DefaultLayoutContext);
