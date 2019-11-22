import React from 'react';
import './App.css';
import Board from './components/board';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      gameStarted:false,
    })
  }

  render() {
   if ( this.state.gameStarted ) {
    return (
      <div className="App">
            <h1>YAHTZEE</h1>
            <Board />
      </div>
    );
   } else {
     return (
      <div className="App">
            <h1>YAHTZEE</h1>
        <button onClick={()=>this.setState({gameStarted:!this.state.gameStarted})}>Start Playing</button>
      </div>
     );
   }
  }
}

export default App;
