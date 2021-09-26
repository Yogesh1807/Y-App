const initialState = {
  userData: {},
  loading: false,
};
export default function Auth(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_LOADING": {
      return { ...state, loading: true };
    }

    case "LOGIN_SUCCESS": {
      return {
        ...state,
        loading: false,
        userData: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
