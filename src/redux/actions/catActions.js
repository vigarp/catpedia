import axios from "axios";

export const GetCatsRequest = () => {
  return {
    type: "GET_CATS_REQUEST",
  };
};

export const GetCatsSuccess = (data) => {
  return {
    type: "GET_CATS_SUCCESS",
    payload: data,
  };
};

export const GetCatsFailure = (error) => {
  return {
    type: "GET_CATS_FAILURE",
    payload: error,
  };
};

export const GetCatsEnd = () => {
  return {
    type: "GET_CATS_END",
  };
};

export const GetCatByNameRequest = () => {
  return {
    type: "GET_CAT_BY_NAME_REQUEST",
  };
};

export const GetCatByNameSuccess = (data) => {
  return {
    type: "GET_CAT_BY_NAME_SUCCESS",
    payload: data,
  };
};

export const GetCatByNameFail = (error) => {
  return {
    type: "GET_CAT_BY_NAME_FAIL",
    payload: error,
  };
};

export const getAllCats = (page) => {
  return async (dispatch) => {
    dispatch(GetCatsRequest());
    try {
      const res = await axios({
        method: "GET",
        url: `https://api.thecatapi.com/v1/breeds?limit=10&page=${page}`,
      });
      const resultCats = res?.data;
      if (resultCats.length < 1) {
        dispatch(GetCatsEnd());
      } else {
        dispatch(GetCatsSuccess(resultCats));
      }
    } catch (err) {
      console.log(err);
      const message_1 = err.message;
      dispatch(GetCatsFailure(message_1));
    }
  };
};

export const getCatByName = (name) => {
  return async (dispatch) => {
    dispatch(GetCatByNameRequest());
    try {
      const res = await axios({
        method: "GET",
        url: `https://api.thecatapi.com/v1/breeds/search?name=${name}`,
      });
      const resultCatByName = res?.data;
      dispatch(GetCatByNameSuccess(resultCatByName));
    } catch (err) {
      console.log(err);
      const message_2 = err.message;
      dispatch(GetCatByNameFail(message_2));
    }
  };
};
