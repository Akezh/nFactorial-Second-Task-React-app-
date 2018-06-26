import React, { Component } from 'react';
import './App.css';
import ReactCountdownClock from 'react-countdown-clock';

class App extends Component {   
  state = {
     arrOfWords: [
       {index: 1, word: "Yellow"},
       {index: 2, word: "Green"},
       {index: 3, word: "Blue"},
       {index: 4, word: "Black"},
       {index: 5, word: "Purple"},
       {index: 6, word: "Brown"},
       {index: 7, word: "Red"},
       {index: 8, word: "Orange"},
       {index: 9, word: "Indigo"},
       {index: 10, word: "Bright Green"},
       {index: 11, word: null}
      ],
      arrOfColors: [
       {styling: 'yellow'},
       {styling: 'green'},
       {styling: 'yellow'},
       {styling: 'green'},
       {styling: 'purple'},
       {styling: 'black'},
       {styling: 'red'},
       {styling: 'orange'},
       {styling: 'orange'},
       {styling: 'black'},
       { styling: 'yellow'},
       { styling: null}
      ],
      count: Math.floor(Math.random() * 10),
      life: 3,
      point: 0,
      second: 5
  };

  checkTrue = () => {
    this.setState ({
      second: this.state.second + 0.01
    })


      if (this.state.count === 0 || this.state.count === 1 || this.state.count === 4 || this.state.count === 6 || this.state.count === 7) {
        this.setState({
          point: this.state.point + 1
        })
      }

      if (this.state.count === 2 || this.state.count === 3 || this.state.count === 5 || this.state.count === 8 || this.state.count === 9) {
        this.setState({
          life: this.state.life - 1
        })

      if (this.state.point > 0) {
        this.setState({
          point: this.state.point - 1
        })
      }
      }

    this.setState ({
      count: Math.floor(Math.random() * 10)
    })
  }

  checkFalse = () => {  
    this.setState ({
      second: this.state.second + 0.01
    })

    if (this.state.count === 2 || this.state.count === 3 || this.state.count === 5 || this.state.count === 8 || this.state.count === 9) {
      this.setState({
        point: this.state.point + 1
      })
    }

    if (this.state.count === 0 || this.state.count === 1 || this.state.count === 4 || this.state.count === 6 || this.state.count === 7) {
      this.setState({
        life: this.state.life - 1
      })

      if (this.state.point > 0) {
        this.setState({
          point: this.state.point - 1
        })
      }

      }
    
    this.setState ({
      count: Math.floor(Math.random() * 9)
    })
  }

  timeLimit = () => {
    this.setState ({
      life: this.state.life - 1
    })  
    this.setState ({
      second: this.state.second+0.01
    })
  }

  render() {

    if (this.state.count < 10 && this.state.life != 0 && this.state.point != 10) {
      return (
        <div className="App">
          <h1>Best Game</h1>

        <div className="Timer"
          style = {{
            marginLeft: "42%",
            marginBottom: "20px"
          }}
          >
          <ReactCountdownClock seconds={this.state.second}
                     color="#000"
                     alpha={0.9}
                     size={100}  
                     onComplete={this.timeLimit}
          />
          
        </div>
                      
              <div style={{
                alignItems: 'center',
                justifyContent: 'center', 
                width: "180px",
                height: "120px",
                marginLeft: "42.5%",
                marginBottom: "20px",
                backgroundColor: this.state.arrOfColors[this.state.count].styling,
              }}></div>

              <p>{this.state.arrOfWords[this.state.count].word}</p>  

          
          <button style={{
              backgroundColor: "white",
              width: "70px",
              height: "30px",
              marginRight: "50px",
              borderRadius: "10px"
          }} 
          onClick={this.checkTrue}>True</button>
          
          <button style={{
              backgroundColor: "white",
              width: "70px",
              height: "30px",
              borderRadius: "10px"
          }}
          
          onClick={this.checkFalse}>False</button>
          <h2>Score: {this.state.point}</h2>
          <h2>Lives: {this.state.life}</h2>
        </div>
      );
    } else if (this.state.point === 10) {
      return (
        <div className="App">
          <h1>True False Game</h1>
          <h2>Score: {this.state.point}</h2>
          <h2>You win this game. You are awesome!!!</h2>
        </div>
      )
    } else if (this.state.life === 0) {
      return (
        <div className="App">
          <h1>True False Game</h1>
          <h2>Score: {this.state.point}</h2>
          <h2>You loose this game. You will win next time!!!</h2>
        </div>
      )      
    }


  }
}

export default App;