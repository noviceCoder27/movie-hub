import axios from 'axios'
import { useEffect, useState } from 'react'
import { getFromLocal } from '../../localStorage/getLocalValue'
const backend_url = import.meta.env.VITE_BACKEND_URL


interface IUser {
    userName: string,
    email: string,
    notify: boolean,
    profilePicture: string
}

export const useUserInfo = () => {
    const token = getFromLocal();
    const [userInfo,setUserInfo] = useState<IUser | null>(null);

    useEffect(() => {
        const fetchUserData = async() => {
            const options = {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                }
                if(token) {
                    const response = await axios.get(`${backend_url}/user/getUserInfo`,options);
                    setUserInfo(response.data);
                } else {
                    setUserInfo(null);
                }
            }
        fetchUserData();
    },[token])
    return userInfo;
}