import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-brand">
          <img src={this.props.logo} width="215px" height="40px" />
        </div>
      </div>
    )
  }
}

export default Navbar;