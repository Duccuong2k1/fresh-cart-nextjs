import axiosClient from "../axiosClient";


const productApi = {
    getAll(params: any) {
        const url = '/products';
        return axiosClient.get(url, { params })
    },
    getOne(id: string | number) {
        const url = `/products/${id}`;
        return axiosClient.get(url)
    },
    add(data: any) {
        const url = `/products`;
        return axiosClient.post(url, data)
    },
    update(data: any) {
        const url = `/products/${data.id}`;
        return axiosClient.patch(url, data)
    },
    remove(id: string | number) {
        const url = `/products/${id}`;
        return axiosClient.delete(url)
    }
}

export default productApi;