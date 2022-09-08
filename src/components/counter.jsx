import React, { Component } from 'react';

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log('Counter - UnMount');
  }

  render() {
    console.log('Counter - Rendered');

    return (
      <div className='row'>
        <div className='col-1 m-2'>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className='col'>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className='btn btn-secondary btn-sm'
          >
            +
          </button>

          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className='btn btn-secondary btn-sm m-2'
            disabled={this.props.counter.value === 0 ? true : null}
          >
            -
          </button>

          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className='btn btn-danger btn-sm'
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    return (classes += this.props.counter.value === 0 ? 'warning' : 'primary');
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
