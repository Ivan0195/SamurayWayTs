import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '7d0fd936-d507-46da-9b85-084b957dbf02'
    }
})


export const usersAPI = {
    getUsers(selectedPage: number, pageCount: number) {

        return  instance.get(`users?page=${selectedPage}&count=${pageCount}`)
            .then((response) =>{
                return response.data
            } )

    },
    followUser (userID: number) {
        return  instance.post(`follow/${userID}`, {})
            .then((response) =>{
                return response.data
            } )
    },
    unfollowUser (userID: number) {
        return  instance.delete(`follow/${userID}`, {})
            .then((response) =>{
                return response.data
            } )
    },
    authMe () {
        return  instance.get('auth/me')
            .then((response) =>{
                return response.data
            } )
    }
}