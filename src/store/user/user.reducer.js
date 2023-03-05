import USER_ACTION_TYPES from "./user.types";

const {
  AUTH,
  AUTH_FAIL,
  LOGOUT,
  GET_PROFILE,
  UPDATE_PROFILE,
  DELETE_PROFILE,
  UPLOAD_AVATAR,
  START_AUTH,
} = USER_ACTION_TYPES;

const USER_INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
  isLoading: false,
  isAuthenticated: false,
};

export const userReducer = (state = USER_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case START_AUTH:
      return { ...state, isLoading: true };
    case AUTH:
      localStorage.setItem("user", JSON.stringify(payload));
      return {
        ...state,
        currentUser: payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_FAIL:
    case LOGOUT:
    case DELETE_PROFILE:
      localStorage.removeItem("user");
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case GET_PROFILE:
      return {
        ...state,
        currentUser: payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        currentUser: payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case UPLOAD_AVATAR:
      return { ...state, currentUser: { ...state.user, avatar: payload } };
    default:
      return state;
  }
};
