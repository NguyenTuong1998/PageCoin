import axios from "axios";
import * as actionTypes from "./constant";
import Swal from "sweetalert2";

export const fetchLogin = (user, history) => {
  console.log(user);
  return (dispatch) => {
    dispatch(actAuthRequest());
    axios({
      url: "/login",
      method: "GET",
      data: user,
      
    })
      .then((res) => {
        dispatch(actAuthSuccess(res));
        console.log(res);
        localStorage.setItem("User", JSON.stringify(res));
        Swal.fire({
          icon: "success",
          title: "Login success",
        }).then((reuslt) => {
          if (reuslt.isConfirmed) {
            history.replace("/dashboard");
          }
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login failed",
          
        });
      });
  };
};

const actAuthRequest = () => {
  return {
    type: actionTypes.LOGIN_REQUEST,
  };
};

const actAuthSuccess = (data) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: data,
  };
};

const actAuthFailed = (err) => {
  return {
    type: actionTypes.LOGIN_FAILED,
    payload: err,
  };
};
