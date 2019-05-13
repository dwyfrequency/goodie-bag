import React from 'react';
import Candy from './Candy';
import { connect } from 'react-redux';
import { decrementQuantity, incrementQuantity } from '../store';

const SingleCandy = ({ id, quantity }) => {
  return (
    <div className="candy">
      <Candy />
      {/* <p>{props.match.params}</p> */}
      <button onClick={() => props.incrementQuantity(id, quantity)}>+</button>
      <button onClick={() => props.decrementQuantity(id, quantity)}>-</button>
    </div>
  );
};

const mapStateToProps = state => ({
  hello: 'world',
});

const mapDipatchToProps = dispatch => ({
  decrementQuantity: () => {
    dispatch(decrementQuantity(id, quantity));
  },
  incrementQuantity: () => {
    dispatch(incrementQuantity(id, quantity));
  },
});

export default SingleCandy;
