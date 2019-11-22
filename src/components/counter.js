import React from 'react';

class Counter extends React.Component {

  render() {
    return (
      <div className="counter">
          <p>{this.props.score}</p>
      </div>
    );
  }
}

export default Counter;
