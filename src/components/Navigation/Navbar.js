import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink} from "react-router-dom";

class Navbar extends Component {
  render() {
    let navbaritems = (
      <ul className="right">
        <li>
          <NavLink to="/">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/myPost">My Posts</NavLink>
        </li>
        <li>
          <NavLink to="/logout">Logout</NavLink>
        </li>
      </ul>
    );
    if (!this.props.isAuthenticated) {
      navbaritems = (
        <ul  className="right">
          <li>
            <NavLink to="/">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/auth">Login</NavLink>
          </li>
        </ul>
      );
    }

    return (
      <React.Fragment>
        <nav className="nav-wrapper">
          <div className="container">
            <NavLink to="/" exact  className="brand-logo">
                  <i className="material-icons">chat</i>
            </NavLink>
            {navbaritems}
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};
export default connect(mapStateToProps)(Navbar);
