import USER_ACTION_TYPES from "./user.types";

import { setError } from "../error/error.action";
import * as api from "../../api";

const { AUTH, AUTH_FAIL, GET_PROFILE, UPDATE_PROFILE, START_AUTH } =
  USER_ACTION_TYPES;

export const signIn = (formFields) => async (dispatch) => {
  try {
    dispatch({ type: START_AUTH });
    const { data } = await api.signIn(formFields);
    const {
      token,
      user: { name },
    } = data;
    dispatch({ type: AUTH, payload: { token, user: { name } } });
  } catch (error) {
    console.log(error);
    const errors = error.response.data.errors;
    if (errors) {
      dispatch({ type: AUTH_FAIL });
      errors.forEach((error) => dispatch(setError(error.message)));
    }
  }
};

export const signUp = (formFields) => async (dispatch) => {
  try {
    dispatch({ type: START_AUTH });
    const { data } = await api.signUp(formFields);
    const {
      token,
      user: { name },
    } = data;
    dispatch({ type: AUTH, payload: { token, user: { name } } });
  } catch (error) {
    console.log(error);
    dispatch({ type: AUTH_FAIL });
    const errors = error.response.data.errors;
    const errorMessage = error.response.data;
    if (errors) {
      errors.forEach((error) => dispatch(setError(error.message)));
    } else if (errorMessage) dispatch(setError(errorMessage));
  }
};

export const getProfile = () => async (dispatch) => {
  try {
    dispatch({ type: START_AUTH });
    const { data } = await api.getProfile();
    dispatch({ type: GET_PROFILE, payload: data });
  } catch (error) {
    console.log(error);
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setError(error.message)));
    }
  }
};

export const updateProfile = (formFields) => async (dispatch) => {
  try {
    dispatch({ type: START_AUTH });
    const { data } = await api.updateProfile(formFields);
    dispatch({ type: UPDATE_PROFILE, payload: data });
  } catch (error) {
    console.log(error);
    dispatch(setError(error.response.data.message));
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setError(error.message)));
    }
  }
};

export const deleteProfile = () => async (dispatch) => {
  try {
    await api.deleteProfile();
  } catch (error) {
    console.log(error);
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setError(error.message)));
    }
  }
};

export const signOut = () => async (dispatch) => {
  try {
    await api.signOut();
  } catch (error) {
    console.log(error);
  }
};
