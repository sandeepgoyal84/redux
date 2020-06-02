import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "./components/Navigation/Navbar";
import Login from "./containers/Auth/Login/Login";
import Logout from "./containers/Auth/Logout/Logout";
import Posts from "./containers/Posts/Posts";

class App extends Component {
  render() {
    // let routes = (
    //   <Switch>
    //     <Route path="/auth" component={Auth}></Route>
    //     <Route path="/" exact component={Auth}></Route>
    //     <Redirect to="/"></Redirect>
    //   </Switch>
    // );

    return (
      <React.Fragment>
        <Navbar></Navbar>
        <main className="container">
          <Route path="/auth" exact component={Login}></Route>
          <Route path="/logout" exact component={Logout}></Route>
          <Route path="/" exact component={Posts}></Route>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};
export default withRouter(connect(mapStateToProps)(App));
