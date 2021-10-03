import React, { Component } from 'react';
import './App.css';
import Layout from '../../hoc/Layout/Layout';
import Aux from '../../hoc/Aux/Aux'
import AddBug from '../AddBug/AddBug'
import Bugs from '../Bugs/Bugs';
import { Route,withRouter} from 'react-router-dom';
import Auth from '../Auth/Auth';
import Logout from '../Auth/Logout/Logout';
import {connect} from 'react-redux';
import * as authAction from '../../store/actions/auth'

class App extends Component {
  constructor(props){
      super(props);
      this.props.tryToAutoSignup();
  }

 
  render() {
    return (
      <Aux>
    
        <Layout>
          <Route path="/" exact component={AddBug} />
          <Route path="/" exact component={Bugs} />
          <Route path="/signup" exact component={Auth}/>
          <Route path="/logout" exact component={Logout}/>
        </Layout>
      </Aux>
    );
  }

}
const mapDispatchToProps = dispatch => {
  return {
      tryToAutoSignup: () => dispatch(authAction.authCheckState ())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
