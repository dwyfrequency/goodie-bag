import axios from 'axios';

// Actions
const UPDATE_CANDIES = 'UPDATE_CANDIES';
const GET_CANDIES = 'FETCH_CANDIES';

// Action Creators

const updateCandies = (candies = []) => {
  return { type: UPDATE_CANDIES, candies };
};

const getCandies = (candies = []) => {
  return { type: GET_CANDIES, candies };
};

// thunk
export const fetchAllCandies = () => {
  return async dispatch => {
    const response = await axios.get('/api/candies');
    dispatch(getCandies(response.data));
  };
};

const initialState = {
  candies: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CANDIES:
      return { ...state, candies: state.candies.concat(action.candies) };
    case GET_CANDIES:
      return { ...state, candies: action.candies };
    default:
      return state;
  }
};

export default rootReducer;
