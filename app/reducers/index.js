import axios from 'axios';

// Actions
const UPDATE_CANDIES = 'UPDATE_CANDIES';

const GET_CANDIES = 'FETCH_CANDIES';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';

// Action Creators

const updateCandies = (candies = []) => {
  return { type: UPDATE_CANDIES, candies };
};

const updateQuantity = (id, quantity) => {
  return { type: UPDATE_QUANTITY, id, quantity };
};

export const decrementQuantity = (id, quantity) => {
  return { type: DECREMENT_QUANTITY, id, quantity };
};

export const incrementQuantity = (id, quantity) => {
  return { type: INCREMENT_QUANTITY, id, quantity };
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

export const fetchSingleCandy = () => {
  return async dispatch => {
    const response = await axios.get('/api/candies');
  };
};

const initialState = {
  candies: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CANDIES:
      return { ...state, candies: state.candies.concat(action.candies) };
    case DECREMENT_QUANTITY:
      return {
        ...state,
        candies: state.candies.map(candy => {
          const { id, quantity } = action;
          if (candy.id === id) {
            return { ...candy, id, quantity: quantity - 1 };
          }
          return candy;
        }),
      };
    case INCREMENT_QUANTITY:
      return {
        ...state,
        candies: state.candies.map(candy => {
          const { id, quantity } = action;
          if (candy.id === id) {
            return { ...candy, id, quantity: quantity + 1 };
          }
          return candy;
        }),
      };
    case GET_CANDIES:
      return { ...state, candies: action.candies };
    default:
      return state;
  }
};

export default rootReducer;
