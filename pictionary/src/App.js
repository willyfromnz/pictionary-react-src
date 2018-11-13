import React, { Component } from 'react';
import SimpleDrawingBoard from'simple-drawing-board';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null
    }
    this.test = this.test.bind(this);
  }

  componentDidMount() {
    const sdb = new SimpleDrawingBoard(document.getElementById('canvas'), {
      lineColor:    '#000',
      lineSize:     5,
      boardColor:   'transparent',
      historyDepth: 10
    });
    if (!this.state.username) {
      this.setState({ username: prompt("Enter your name", "ElliotIsGay")})
    }
  }

  test() {
    console.log(this.state.username);
  }

  render() {
    return (
      <div>
        <div>
          <canvas id="canvas" width="800" height="800" style={{ border: '1px solid blue' }} />
        </div>
        <div>
          <button onClick={this.test}>test button</button>
        </div>
      </div>
    );
  }
}

export default App;
