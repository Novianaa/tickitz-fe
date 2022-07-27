const initialState = {
  loading: false,
  data: {
    result: [],
    page: 0,
    totalPage: 0,
    totalMovie: 0,
  },
  error: null,
  isLogin: false
}

const Fetch = (state = initialState, action = {}) => {
  switch (action.type) {
    case "SCHEDULE_REQUEST":
      return { ...state, loading: true }
    case "SCHEDULE_ERROR":
      return { ...state, loading: false, data: state.data, error: action.payload, isLogin: false }
    case "SCHEDULE_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: null, isLogin: true }
    default:
      return state
  }
}


export default Fetch