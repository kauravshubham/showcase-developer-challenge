import {
  LOGIN,
  LOGOUT,
  authReducerInitialStateType,
  authActionTypes,
} from "../actionTypes";
import generateToken from "../utilt";

const initialState: authReducerInitialStateType = {
  user: {
    name: null,
    id: null,
    token: null,
  },
};
const authReducer = (
  state = initialState,
  action: authActionTypes
): authReducerInitialStateType => {
  const tokenData = generateToken();
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("token", tokenData.token);
      return { ...state, user: { ...action.payload, ...tokenData } };
    case LOGOUT:
      localStorage.clear();
      return { ...state, user: { ...initialState.user } };
    default:
      return state;
  }
};
export default authReducer;
