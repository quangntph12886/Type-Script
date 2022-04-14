import instance from './instance';

export const list = () => {
    const url = `/api/products`;
    return instance.get(url)
}
export const remove = (id) =>{
    const url = `/api/products/${id}`;
    const token = localStorage.getItem("token")
    return instance.delete(url,{
        headers:{
            Authorization: `bearer ${token}` 
        }
    });
}
export const add = (data)=>{
    const url = `/api/products`;
    return instance.post(url,data);
}
export const update = (id,data) =>{
    const url = `/api/products/${id}`;
    return instance.patch(url,data);
}
export const getProductById = (id) =>{
    const url = `/api/products/${id}`;
    return instance.get(url)
}