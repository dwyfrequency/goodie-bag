import React from 'react';
import Main from './Main';
import AllCandies from './AllCandies';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllCandies } from '../reducers';

class Root extends React.Component {
  componentDidMount() {
    this.props.fetchAllCandies();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <NavLink to="/">Goodie bag</NavLink>
            <NavLink to="/candies">All Candies</NavLink>
          </nav>
          <Route path="/" exact component={Main} />
          <Route
            path="/candies"
            exact
            render={() => <AllCandies candies={[]} />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllCandies: () => dispatch(fetchAllCandies()),
});

export default connect(null, mapDispatchToProps)(Root);
