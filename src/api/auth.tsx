import instance from './instance';

export const sigin = (data) => {
    const url = `/api/signin`;
    return instance.post(url,data)
}
export const signup = (data) =>{
    const url = `/api/signup`;
    return instance.post(url,data)
}
