import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test'
})

export const todolistAPI = {
    postMessage(body: boolean){
        return instance.post('',{success: body})
    }
}