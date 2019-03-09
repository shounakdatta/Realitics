import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Redirect,
} from 'react-router-dom';

import { LOGIN } from '../../constants/Routes';

class PrivateRoute extends Component {
  isLoggedIn() {
    return this.props.UserStore.get('status') === 0;
  }

  render() {
    const {
      component: Component,
      ...rest
    } = this.props;

    return (
      <Route
        {...rest}
        render={routeProps => (
          this.isLoggedIn() === true
            ? <Component {...routeProps} />
            : <Redirect to={{pathname: LOGIN}} />
        )}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    UserStore: state.UserStore
  };
}

export default connect(mapStateToProps)(PrivateRoute);
