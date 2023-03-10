import { loginStart, loginFailure, loginSuccess, registerStart, registerSuccess, registerFailure } from "./userRedux";
import { publicRequest } from "../requestMethod";


export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);

        dispatch(loginSuccess(res.data));
    } catch(err) {
        dispatch(loginFailure())
        console.log(err)
    }
}

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);

    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
    console.log(err);
  }
};