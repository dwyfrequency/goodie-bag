import React, { Component } from 'react';
import { connect } from 'react-redux';
import Candy from './Candy';
import { fetchAllCandies } from '../reducers';

class AllCandies extends Component {
  componentDidMount() {
    this.props.fetchAllCandies();
  }

  render() {
    return (
      <div>
        <h1>Look At all my candies</h1>
        {this.props.candies.map(candy => <Candy key={candy.id} {...candy} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  candies: state.candies,
});
const mapDispatchToProps = dispatch => ({
  fetchAllCandies: () => dispatch(fetchAllCandies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllCandies);
