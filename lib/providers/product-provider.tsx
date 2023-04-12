
import { useRouter } from 'next/router';
import React, { createContext, FC, useContext, useEffect, useState } from 'react';

export const ProductContext = createContext<
    Partial<{

    }>
>({});
export function ProductProvider({ ...props }: { children: React.ReactNode }) {
    const [openShowProduct, setOpenShowProduct] = useState(false)



    return (
        <ProductContext.Provider
            value={{

            }}
        >
            {props.children}

        </ProductContext.Provider>
    );
}
export const useProductContext = () => useContext(ProductContext);
