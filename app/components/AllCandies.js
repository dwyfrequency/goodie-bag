import React from 'react';
import { connect } from 'react-redux';
import Candy from './Candy';

const AllCandies = props => {
  return (
    <div>
      <h1>Look At all my candies</h1>
      {props.candies.map(candy => <Candy key={candy.id} {...candy} />)}
    </div>
  );
};

const mapStateToProps = state => ({
  candies: state.candies,
});

export default connect(mapStateToProps, null)(AllCandies);
