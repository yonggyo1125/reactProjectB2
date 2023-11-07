import { Component } from 'react';

class LifeCycle extends Component {
  state = {
    color: 'black',
    number: 0,
  };

  changeColor = (e) => {
    const color = e.currentTarget.value;
    this.setState({ ...this.state, color }); // color: color
  };

  render() {
    const { color, number } = this.state;
    return (
      <div>
        <div
          style={{
            width: 310,
            height: 300,
            background: color,
          }}
        ></div>
        <input type="color" onChange={this.changeColor} />
        <hr />
        <h1>{number}</h1>
        <button
          type="button"
          onClick={() => this.setState({ ...this.state, number: number + 1 })}
        >
          +1
        </button>
        <button
          type="button"
          onClick={() => this.setState({ ...this.state, number: number - 1 })}
        >
          -1
        </button>
      </div>
    );
  }
}

export default LifeCycle;
