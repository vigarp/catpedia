const initialState = {
  data: [],
  loading: false,
  error: null,
};

const CatReducersByName = (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_CAT_BY_NAME_REQUEST":
      return { ...state, loading: true };
    case "GET_CAT_BY_NAME_SUCCESS":
      return { ...state, data: action.payload, loading: false };
    case "GET_CAT_BY_NAME_FAIL":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default CatReducersByName;
