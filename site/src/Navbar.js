import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-brand">
          <a href="/">
            <img src={this.props.logo} width="215px" height="40px" />
          </a>
        </div>
      </div>
    )
  }
}

export default Navbar;