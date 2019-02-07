import React, { Component } from 'react';
import './App.css';

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
      this.setState({frame1: frame2 === 'spare' || frame2 === 'strike' ? 10 + 10 : 10 + Number(frame2)})
    }
    if(frame1 === 'strike'){
      this.setState({frame1: 10 + (frame2 === 'spare' || frame2 === 'strike' ? 10 : Number(frame2)) + (frame3 === 'spare' || frame3 === 'strike' ? 10 : Number(frame3))})
    }
    if(frame2 === 'spare'){
      this.setState({frame2: frame3 === 'spare' || frame3 === 'strike' ? 10 + 10 : 10 + Number(frame3)})
    }
    if(frame2 === 'strike'){
      this.setState({frame2: 10 + (frame3 === 'spare' || frame3 === 'strike' ? 10 : Number(frame3)) + (frame4 === 'spare' || frame4 === 'strike' ? 10 : Number(frame4))})
    }
    if(frame3 === 'spare'){
      this.setState({frame3: frame4 === 'spare' || frame4 === 'strike' ? 10 + 10 : 10 + Number(frame4)})
    }
    if(frame3 === 'strike'){
      this.setState({frame3: 10 + (frame4 === 'spare' || frame4 === 'strike' ? 10 : Number(frame4)) + (frame5 === 'spare' || frame5 === 'strike' ? 10 : Number(frame5))})
    }  
    if(frame4 === 'spare'){
      this.setState({frame4: frame5 === 'spare' || frame5 === 'strike' ? 10 + 10 : 10 + Number(frame5)})
    }
    if(frame4 === 'strike'){
      this.setState({frame4: 10 + (frame5 === 'spare' || frame5 === 'strike' ? 10 : Number(frame5)) + (frame6 === 'spare' || frame6 === 'strike' ? 10 : Number(frame6))})
    }  
    if(frame5 === 'spare'){
      this.setState({frame5: frame6 === 'spare' || frame6 === 'strike' ? 10 + 10 : 10 + Number(frame6)})
    }
    if(frame5 === 'strike'){
      this.setState({frame5: 10 + (frame6 === 'spare' || frame6 === 'strike' ? 10 : Number(frame6)) + (frame7 === 'spare' || frame7 === 'strike' ? 10 : Number(frame7))})
    }  
    if(frame6 === 'spare'){
      this.setState({frame6: frame7 === 'spare' || frame7 === 'strike' ? 10 + 10 : 10 + Number(frame7)})
    }
    if(frame6 === 'strike'){
      this.setState({frame6: 10 + (frame7 === 'spare' || frame7 === 'strike' ? 10 : Number(frame7)) + (frame8 === 'spare' || frame8 === 'strike' ? 10 : Number(frame8))})
    }  
    if(frame7 === 'spare'){
      this.setState({frame7: frame8 === 'spare' || frame8 === 'strike' ? 10 + 10 : 10 + Number(frame8)})
    }
    if(frame7 === 'strike'){
      this.setState({frame7: 10 + (frame8 === 'spare' || frame8 === 'strike' ? 10 : Number(frame8)) + (frame9 === 'spare' || frame9 === 'strike' ? 10 : Number(frame9))})
    }  
    if(frame8 === 'spare'){
      this.setState({frame8: frame9 === 'spare' || frame9 === 'strike' ? 10 + 10 : 10 + Number(frame9)})
    }
    if(frame8 === 'strike'){
      this.setState({frame8: 10 + (frame9 === 'spare' || frame9 === 'strike' ? 10 : Number(frame9)) + (frame10 === 'spare' || frame10 === 'strike' ? 10 : Number(frame10))})
    }  
    if(frame9 === 'spare'){
      this.setState({frame9: frame10 === 'spare' || frame10 === 'strike' ? 10 + 10 : 10 + Number(frame10)})
    }
    if(frame9 === 'strike'){
      this.setState({frame9: 10 + (frame10 === 'spare' || frame10 === 'strike' ? 10 : Number(frame10)) + (frame11 === 'strike' ? 10 : Number(frame11))})
    } 
    if(frame10 === 'spare'){
      this.setState({frame10: frame11 === 'strike' ? 10 + 10 : 10 + Number(frame11)})
    }
    if(frame10 === 'strike'){
      this.setState({frame10: 10 + (frame11 === 'strike' ? 10 : Number(frame11)) + (frame12 === 'strike' ? 10 : Number(frame12))})
    } 
    if(frame11 === 'strike'){
      this.setState({frame11: '0'})
    } 
    if(frame12 === 'strike'){
      this.setState({frame12: '0'})
    } 

    this.setState({
      score: Number(frame1) + Number(frame2) + Number(frame3) + Number(frame4) + Number(frame5) + Number(frame6) + Number(frame7) + Number(frame8) + Number(frame9) + Number(frame10)
    })
    setTimeout(() => alert(`Score: ${score}`), 1000);
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
        </div>
      </div>
    );
  }
}

export default App;