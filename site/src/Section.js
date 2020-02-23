import React from 'react';

class Section extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="title margin-below">{this.props.title}</div>
        <div className="subtitle">{this.props.body}</div>
        <img src={this.props.image} />
      </div>
    );
  }
}

export default Section;