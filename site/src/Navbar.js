import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar is-fixed-top is-spaced has-shadow has-background-white-ter">
        <div className="navbar-brand">
          <div className="navbar-item">
            <a href="/">
              <img src={this.props.logo} />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;