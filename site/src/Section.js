import React from 'react';

class Section extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="columns is-desktop is-vcentered">
          <div className="column">
            <img src={this.props.image} />
          </div>
          <div className="column">
            <div className="title">{this.props.title}</div>
            <div className="subtitle">{this.props.body}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section;