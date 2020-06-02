import axios from "axios";

import * as actionTypes from "./actionTypes";
const loginSuccess = (res) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: res.data.idToken,
    userId: res.data.localId,
  };
};


export const auth = (email, password, isSignup) => {
  return (dispatch) => {
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC2Ly1lsTh6FmJdLlO9sid1yETAP1lKIhI";
    if (isSignup) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC2Ly1lsTh6FmJdLlO9sid1yETAP1lKIhI";
    }

    let data = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        dispatch(loginSuccess(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};
