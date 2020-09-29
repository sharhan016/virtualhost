import axios from "axios";
import * as actionTypes from "./ActionTypes";

export const FirstTimeAppLoaded = () => ({
    type: actionTypes.FIRST_TIME_APP_LOADED,
  });
  
  export const LoginStart = () => {
    return { type: actionTypes.LOGIN_START };
  };

  export const LoginSuccess = (user, profile, token) => {
    localStorage.setItem("token", token);
    axios.defaults.headers["Authorization"] = `Token ${token}`;
  
    return {
      type: actionTypes.LOGIN_SUCCESS,
      user: user,
      profile: profile,
      token: token,
    };
  };

  export const LoginFailed = (error) => ({
    type: actionTypes.LOGIN_FAILED,
    error: error,
  });
  
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
  export const Login = (data) => {
    return (dispatch) => {
      dispatch(LoginStart());
      console.log('Reached Login');
      axios
        .post("/login", data, {
          headers: headers
        })
        .then((res) => {
          dispatch(LoginSuccess(res.data.userDetails.user_id, res.data.userDetails.firstname, res.data.token));
          console.log('axios data in login',res);
        })
        .catch((err) => {
          dispatch(LoginFailed(err.response));
          console.log(err);
        });
    };
  };
  
  //LOGOUT
  
  export const LogoutStart = () => {
    return { type: actionTypes.LOGOUT_START };
  };
  
  export const LogoutSuccess = () => {
    delete axios.defaults.headers["Authorization"];
    // console.log(axios.defaults.headers);
    localStorage.removeItem("token");
    return {
      type: actionTypes.LOGOUT_SUCCESS,
    };
  };
  
  export const LogoutFailed = (error) => ({
    type: actionTypes.LOGOUT_FAILED,
    error: error,
  });

  // Need to create the api for it
  
  export const Logout = (data) => {
    return (dispatch, getState) => {
      dispatch(LogoutStart());
      axios
        .post("/logout/", data)
        .then((res) => {
          dispatch(LogoutSuccess());
        })
        .catch((err) => {
          dispatch(LogoutFailed(err.response.data));
        });
    };
  };
  