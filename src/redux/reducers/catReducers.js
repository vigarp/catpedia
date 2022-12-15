const initialState = {
  loading: false,
  data: [],
  moreLoading: false,
  error: null,
  moreError: null,
  isListEnd: false,
};

const CatReducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_CATS_REQUEST":
      if (action.page === 0) {
        return { ...state, loading: true };
      } else {
        return { ...state, moreLoading: true };
      }
    case "GET_CATS_SUCCESS":
      return {
        ...state,
        data: [...state.data, ...action.payload],
        loading: false,
        moreLoading: false,
      };
    case "GET_CATS_FAIL":
      return {
        ...state,
        error: action.payload,
        loading: false,
        moreLoading: false,
      };
    case "GET_CATS_END":
      return {
        ...state,
        isListEnd: true,
        loading: false,
        moreLoading: false,
      };
    default:
      return state;
  }
};

export default CatReducers;
