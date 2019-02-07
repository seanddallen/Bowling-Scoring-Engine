import React, { Component } from 'react';
import './App.css';
import {Frame} from './Frame'

class App extends Component {
  
  state = {
    score: 0,
    frame1: '0',
    frame2: '0',
    frame3: '0',
    frame4: '0',
    frame5: '0',
    frame6: '0',
    frame7: '0',
    frame8: '0',
    frame9: '0',
    frame10: '0',
    frame11: '0',
    frame12: '0'
  }

  handleStart = () => {
    this.setState({
      score: 0,
      frame1: '0',
      frame2: '0',
      frame3: '0',
      frame4: '0',
      frame5: '0',
      frame6: '0',
      frame7: '0',
      frame8: '0',
      frame9: '0',
      frame10: '0',
      frame11: '0',
      frame12: '0'
    })
  }

  handleScore = () => {
    const {score, frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10, frame11, frame12 } = this.state

    if(frame1 === 'spare'){
      setTimeout(() => console.log(frame2), 500);      
      this.setState({frame1: frame2 === 'spare' ? 10 + 10 : 10 + Number(frame2)})
    }
    if(frame1 === 'strike'){
      this.setState({frame1: 10 + Number(frame2) + Number(frame3)})
    }
    if(frame2 === 'spare'){
      setTimeout(() => console.log(frame3), 500);      
      this.setState({frame2: 10 + Number(frame3)})
    }
    if(frame2 === 'strike'){
      this.setState({frame2: 10 + Number(frame3) + Number(frame4)})
    }

    this.setState({
      score: Number(frame1) + Number(frame2) + Number(frame3) + Number(frame4) + Number(frame5) + Number(frame6) + Number(frame7) + Number(frame8) + Number(frame9) + Number(frame10) + Number(frame11) + Number(frame12)
    })
    setTimeout(() => console.log(score), 500);
  }
  
  render() {
    return (
      <div className="App">
        <h2 id="title">Bowling Scoring App</h2>
        <div className="row">
          <button id="start" onClick={this.handleStart}>Start Game</button>
        </div>
        <div className="row">
          <label>Frame 1</label>
          <input id="input1" type="text" value={this.state.frame1} onChange={(e) => this.setState({frame1: e.target.value})}></input>
        </div>
        <div className="row">
          <label>Frame 2</label>
          <input id="input2" type="text" value={this.state.frame2} onChange={(e) => this.setState({frame2: e.target.value})}></input>
        </div>
        <div className="row">
          <label>Frame 3</label>
          <input id="input3" type="text" value={this.state.frame3} onChange={(e) => this.setState({frame3: e.target.value})}></input>
        </div>
        <div className="row">
          <label>Frame 4</label>
          <input id="input4" type="text" value={this.state.frame4} onChange={(e) => this.setState({frame4: e.target.value})}></input>
        </div>
        <div className="row">
          <label>Frame 5</label>
          <input id="input5" type="text" value={this.state.frame5} onChange={(e) => this.setState({frame5: e.target.value})}></input>
        </div>
        <div className="row">
          <label>Frame 6</label>
          <input id="input6" type="text" value={this.state.frame6} onChange={(e) => this.setState({frame6: e.target.value})}></input>
        </div>
        <div className="row">
          <label>Frame 7</label>
          <input id="input7" type="text" value={this.state.frame7} onChange={(e) => this.setState({frame7: e.target.value})}></input>
        </div>
        <div className="row">
          <label>Frame 8</label>
          <input id="input8" type="text" value={this.state.frame8} onChange={(e) => this.setState({frame8: e.target.value})}></input>
        </div>
        <div className="row">
          <label>Frame 9</label>
          <input id="input9" type="text" value={this.state.frame9} onChange={(e) => this.setState({frame9: e.target.value})}></input>
        </div>
        <div className="row">
          <label>Frame 10</label>
          <input id="input10" type="text" value={this.state.frame10} onChange={(e) => this.setState({frame10: e.target.value})}></input>
        </div>
        <div className="row">
          <label>Frame 11</label>
          <input id="input11" type="text" value={this.state.frame11} onChange={(e) => this.setState({frame11: e.target.value})}></input>
        </div>
        <div className="row">
          <label>Frame 12</label>
          <input id="input12" type="text" value={this.state.frame12} onChange={(e) => this.setState({frame12: e.target.value})}></input>
        </div>
        <div className="row">
          <button id="score" onClick={this.handleScore}>Score Game</button>
          <div>Score: </div>
        </div>
      </div>
    );
  }
}

export default App;



{/* <Frame id="1" frame={this.state.frame}>1</Frame>
<Frame id="2" frame={this.state.frame}>2</Frame>
<Frame id="3" frame={this.state.frame}>3</Frame>
<Frame id="4" frame={this.state.frame}>4</Frame>
<Frame id="5" frame={this.state.frame}>5</Frame>
<Frame id="6" frame={this.state.frame}>6</Frame>
<Frame id="7" frame={this.state.frame}>7</Frame>
<Frame id="8" frame={this.state.frame}>8</Frame>
<Frame id="9" frame={this.state.frame}>9</Frame>
<Frame id="10" frame={this.state.frame}>10</Frame>
<Frame id="11" frame={this.state.frame}>11</Frame>
<Frame id="12"frame={this.state.frame}>12</Frame> */}