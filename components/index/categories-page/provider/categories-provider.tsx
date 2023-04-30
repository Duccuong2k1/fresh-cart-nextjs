import { CategoriesFilterSlideOut } from "@/components/shared/common/categories-filter-slideout";
import { createContext, useContext, useState } from "react";

export const CategoriesFilterContext = createContext<
    Partial<{
        openCategoryFilter: boolean;
        setOpenCategoryFilter: (value: boolean) => any
    }>
>({});

export function CategoriesProvider({ ...props }: { children: React.ReactNode }) {
    const [openCategoryFilter, setOpenCategoryFilter] = useState(false)
    return (
        <CategoriesFilterContext.Provider
            value={{
                openCategoryFilter,
                setOpenCategoryFilter
            }}
        >
            {props.children}

            <CategoriesFilterSlideOut
                isOpen={openCategoryFilter}
                onClose={() => setOpenCategoryFilter(false)}
            />

        </CategoriesFilterContext.Provider>
    );
}

export const useCategoriesFilterContext = () => useContext(CategoriesFilterContext);
