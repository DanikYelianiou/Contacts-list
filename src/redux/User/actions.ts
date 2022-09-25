import * as ActionTypes from './constants';

interface Payload {
    payload: Object
}

export const userLogin = (payload: Payload) => ({
  type: ActionTypes.USER_LOGIN,
  payload,
});

export const userLoginSuccess = (payload: Payload) => ({
  type: ActionTypes.USER_LOGIN_SUCCESS,
  payload,
});

export const setLoginLoader = (payload: Boolean) => ({
  type: ActionTypes.SET_LOGIN_LOADER,
  payload,
});

export const getUsers = (payload: Payload) => ({
  type: ActionTypes.GET_USERS,
  payload,
});

export const getUsersSuccess = (payload: Payload) => ({
  type: ActionTypes.GET_USERS_SUCCESS,
  payload,
});

export const deleteUser = (payload: Payload) => ({
  type: ActionTypes.DELETE_USER,
  payload,
});

export const deleteUserSuccess = (payload: Payload) => ({
  type: ActionTypes.DELETE_USER_SUCCESS,
  payload,
});

export const updateUser = (payload: Payload) => ({
  type: ActionTypes.UPDATE_USER,
  payload,
});

export const updateUserSuccess = (payload: Payload) => ({
  type: ActionTypes.UPDATE_USER_SUCCESS,
  payload,
});

export const addUser = (payload: Payload) => ({
  type: ActionTypes.ADD_USER,
  payload,
});

export const addUserSuccess = (payload: Payload) => ({
  type: ActionTypes.ADD_USER_SUCCESS,
  payload,
});
