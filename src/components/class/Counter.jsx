import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Counter extends Component {
  increment() {
    this.props.increment();
  }

  decrement() {
    this.props.decrement();
  }

  reset() {
    this.props.reset();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div className='title'>
          <h1>Counter</h1>
          <h2>{this.props.counter}</h2>
          <div className='underline'></div>
        </div>
        <div className='btn-container'>
          <button onClick={this.increment.bind(this)}>Increment</button>
          <button onClick={this.decrement.bind(this)}>Decrement</button>
          <button onClick={this.reset.bind(this)}>Reset</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INC' }),
    decrement: () => dispatch({ type: 'DEC' }),
    reset: () => dispatch({ type: 'RESET' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
