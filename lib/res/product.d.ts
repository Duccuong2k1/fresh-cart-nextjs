export interface ProductType {
    id?: string,
    name?: string,
    price?: number,
    priceOld?: number,
    description?: string,
    thumbnail?: string,
    image?: [string]
    category?: string,
    tag?: string,
    rate?: number,
    code?: string,
    options?: string[],
    status?: string,
}