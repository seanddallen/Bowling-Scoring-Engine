import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    frame1: '',
    frame2: '',
    frame3: '',
    frame4: '',
    frame5: '',
    frame6: '',
    frame7: '',
    frame8: '',
    frame9: '',
    frame10: '',
    bonus1: '',
    bonus2: ''
  }

  calculateScore = () => {

  }

  handleStart = () => {
    this.setState({
      frame1: '',
      frame2: '',
      frame3: '',
      frame4: '',
      frame5: '',
      frame6: '',
      frame7: '',
      frame8: '',
      frame9: '',
      frame10: '',
      bonus1: '',
      bonus2: ''
    })
  }

  handleScore = () => {
    this.setState(prevState => {
      let {frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10, bonus1, bonus2 } = prevState
      if(frame1 === 'spare'){
        frame1 = frame2 === 'spare' || frame2 === 'strike' ? 10 + 10 : 10 + Number(frame2)
      }
      if(frame1 === 'strike'){
        frame1 = 10 + (frame2 === 'spare' || frame2 === 'strike' ? 10 : Number(frame2)) + (frame3 === 'spare' || frame3 === 'strike' ? 10 : Number(frame3))
      }
      if(frame2 === 'spare'){
        frame2 = frame3 === 'spare' || frame3 === 'strike' ? 10 + 10 : 10 + Number(frame3)
      }
      if(frame2 === 'strike'){
        frame2 = 10 + (frame3 === 'spare' || frame3 === 'strike' ? 10 : Number(frame3)) + (frame4 === 'spare' || frame4 === 'strike' ? 10 : Number(frame4))
      }
      if(frame3 === 'spare'){
        frame3 = frame4 === 'spare' || frame4 === 'strike' ? 10 + 10 : 10 + Number(frame4)
      }
      if(frame3 === 'strike'){
        frame3 = 10 + (frame4 === 'spare' || frame4 === 'strike' ? 10 : Number(frame4)) + (frame5 === 'spare' || frame5 === 'strike' ? 10 : Number(frame5))
      }  
      if(frame4 === 'spare'){
        frame4 = frame5 === 'spare' || frame5 === 'strike' ? 10 + 10 : 10 + Number(frame5)
      }
      if(frame4 === 'strike'){
        frame4 = 10 + (frame5 === 'spare' || frame5 === 'strike' ? 10 : Number(frame5)) + (frame6 === 'spare' || frame6 === 'strike' ? 10 : Number(frame6))
      }  
      if(frame5 === 'spare'){
        frame5 = frame6 === 'spare' || frame6 === 'strike' ? 10 + 10 : 10 + Number(frame6)
      }
      if(frame5 === 'strike'){
        frame5 = 10 + (frame6 === 'spare' || frame6 === 'strike' ? 10 : Number(frame6)) + (frame7 === 'spare' || frame7 === 'strike' ? 10 : Number(frame7))
      }  
      if(frame6 === 'spare'){
        frame6 = frame7 === 'spare' || frame7 === 'strike' ? 10 + 10 : 10 + Number(frame7)
      }
      if(frame6 === 'strike'){
        frame6 = 10 + (frame7 === 'spare' || frame7 === 'strike' ? 10 : Number(frame7)) + (frame8 === 'spare' || frame8 === 'strike' ? 10 : Number(frame8))
      }  
      if(frame7 === 'spare'){
        frame7 = frame8 === 'spare' || frame8 === 'strike' ? 10 + 10 : 10 + Number(frame8)
      }
      if(frame7 === 'strike'){
        frame7 = 10 + (frame8 === 'spare' || frame8 === 'strike' ? 10 : Number(frame8)) + (frame9 === 'spare' || frame9 === 'strike' ? 10 : Number(frame9))
      }  
      if(frame8 === 'spare'){
        frame8 = frame9 === 'spare' || frame9 === 'strike' ? 10 + 10 : 10 + Number(frame9)
      }
      if(frame8 === 'strike'){
        frame8 = 10 + (frame9 === 'spare' || frame9 === 'strike' ? 10 : Number(frame9)) + (frame10 === 'spare' || frame10 === 'strike' ? 10 : Number(frame10))
      }  
      if(frame9 === 'spare'){
        frame9 = frame10 === 'spare' || frame10 === 'strike' ? 10 + 10 : 10 + Number(frame10)
      }
      if(frame9 === 'strike'){
        frame9 = 10 + (frame10 === 'spare' || frame10 === 'strike' ? 10 : Number(frame10)) + (bonus1 === 'strike' ? 10 : Number(bonus1))
      } 
      if(frame10 === 'spare'){
        frame10 = bonus1 === 'strike' ? 10 + 10 : 10 + Number(bonus1)
      }
      if(frame10 === 'strike'){
        frame10 = 10 + (bonus1 === 'strike' ? 10 : Number(bonus1)) + (bonus2 === 'strike' ? 10 : Number(bonus2))
      } 
      if(bonus1.length > 0){
        bonus1 = ''
      } 
      if(bonus2.length > 0){
        bonus2 = ''
      }
      return {
        frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10,
      }
    })
  }
  
  render() {
    let {score, frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10, bonus1, bonus2 } = this.state
    let totalScore = Number(frame1) + Number(frame2) + Number(frame3) + Number(frame4) + Number(frame5) + Number(frame6) + Number(frame7) + Number(frame8) + Number(frame9) + Number(frame10)
    return (
      <div className="App">
        <h2 id="title">Bowling Scoring App</h2>
        <h6>Insert "0-9", "spare", or "strike"</h6>
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
          <label>Bonus 1</label>
          <input id="bonus1" type="text" value={this.state.bonus1} onChange={(e) => this.setState({bonus1: e.target.value})}></input>
        </div>
        <div className="row">
          <label>Bonus 2</label>
          <input id="bonus2" type="text" value={this.state.bonus2} onChange={(e) => this.setState({bonus2: e.target.value})}></input>
        </div>
        <div className="row">
          <button id="score" onClick={this.handleScore}>Score Game</button>
          {!isNaN(totalScore) && totalScore}
        </div>
      </div>
    );
  }
}

export default App;