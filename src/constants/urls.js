const baseURL = process.env.REACT_APP_API

const cars = '/cars'
const auth = '/auth'
const urls = {
    cars:{
        base:cars,
        byId:(id)=>`${cars}/${id}`
    },
    auth:{
        login:auth,
        refresh:`${auth}/refresh`,
        me:`${auth}/me`
    }
}

export {
    baseURL,
    urls
}