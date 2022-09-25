import axios from 'axios';
import { Config } from '../../api';

interface UserLoginPayload {
    email: string
    password: string
    callback: Function
} 

export const userLogin = async ({email, password, callback}: UserLoginPayload) => {
    await axios.post(
        `${Config.API_URL}/login`, {email, password}
    ).then((res) => {
        localStorage.setItem("token", res.data.accessToken)
        callback()
    })

    return null;
};

export const getUsers = async () => {
    const { data } = await axios.get(`${Config.API_URL}/contacts`)

    return data;
};

export const deleteUser = async (id: Number) => {
    await axios.delete(`${Config.API_URL}/contacts/${id}`);
};

export const updateUser = async (payload: any) => {
    const { id } = payload;
    const newData = {
        ...payload,
    };
  
    await axios.put(`${Config.API_URL}/contacts/${id}`, newData);
};
  
export const addUser = async (payload: any) => {

    const newData = {
        ...payload,
    };

    const { data } = await axios.post(`${Config.API_URL}/contacts`, newData);
  
    const addedUserDetails = {
        ...data,
    };
  
    return addedUserDetails;
};
  