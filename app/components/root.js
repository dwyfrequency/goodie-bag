import React from 'react';
import Main from './Main';
import AllCandies from './AllCandies';
import SingleCandy from './SingleCandy';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

const Root = props => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <NavLink to="/">Goodie bag</NavLink>
          <NavLink to="/candies">All Candies</NavLink>
        </nav>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/candies" exact component={AllCandies} />
          <Route
            path="/candies/:id"
            exact
            render={() => <SingleCandy candy={{}} />}
          />
          <Route render={() => <h2>Not Found</h2>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Root;
