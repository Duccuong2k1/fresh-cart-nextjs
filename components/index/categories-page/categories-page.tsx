import { Breadcrumb } from "@/components/shared/common/breadcrumb";
import { useRouter } from "next/router";
import React from "react";
import { CategoriesFilter } from "./components/categories-filter";
import { CategoriesProductList } from "./components/categories-product-list";
import { useScreen } from "@/lib/hooks/useScreen";
import { CategoriesProvider } from "./provider/categories-provider";

type Props = {};

export function CategoriesPage({ }: Props) {
    const isMd = useScreen("md");
    return (
        <CategoriesProvider>

            <div className="main-container">
                <Breadcrumb
                    listPathName={[
                        { name: "Shop", href: "/" },
                        { name: "Snack & food", href: "" },
                    ]}
                />
                <div className="flex flex-col justify-start gap-8 md:flex-row lg:flex-row">
                    {isMd && <CategoriesFilter />}
                    <CategoriesProductList />
                </div>
            </div>
        </CategoriesProvider>
    );
}
