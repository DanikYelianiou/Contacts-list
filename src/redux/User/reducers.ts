import * as constants from './constants';

const initialState = {
  loginState: {},
  loadingLogin: true,
  users: [],
  addedUserDetails: {},
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case constants.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loginState: action.payload,
      };
    case constants.SET_LOGIN_LOADER:
      return {
        ...state,
        loadingLogin: action.payload,
      };
    case constants.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case constants.ADD_USER_SUCCESS:
      return {
        ...state,
        addedUserDetails: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
