import * as ActionType from "./constant";
import axios from "axios";
import Swal from "sweetalert2";

export const addUserAPI = (user, history) => {
  return (dispatch) => {
    dispatch(addUserRequest());
    axios({
      url: "http://localhost:3000/add-user",
      method: "POST",
      data: user,
    })
      .then((res) => {
        dispatch(addUserSuccess(res.data));
        Swal.fire({
          icon: "success",
          title: "Register Success",
        }).then((result) => {
          if (result.isConfirmed) {
            history.replace("/login");
          }
        });
      })
      .catch((err) => {
        dispatch(addUserFailed(err));
        Swal.fire({
          icon: "error",
          title: "Register Failed",
          html: `${err.response.data}`,
        });
      });
  };
};

const addUserRequest = () => {
  return {
    type: ActionType.ADD_USER_REQUEST,
  };
};
const addUserSuccess = (data) => {
  return {
    type: ActionType.ADD_USER_SUCCESS,
    payload: data,
  };
};
const addUserFailed = (err) => {
  return {
    type: ActionType.ADD_USER_FAILED,
    payload: err,
  };
};
