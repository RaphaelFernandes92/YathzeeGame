import React from 'react';
import Dice from './dice';
import RefreshButton from './refreshbutton';
import ScoringTable from './ScoringTable';


// var random = Math.floor(Math.random() * (7 - 1) + 1);

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
        round:0,
        diceValues:[6, 6, 6, 6, 6],
        diceStatus:[true, true, true, true, true],
        throws:3,
        errorMessage:'',
    });
    this.handleClick = this.handleClick.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleScore = this.handleScore.bind(this);
}



  handleRefresh(){ 


    this.setState({errorMessage:''});  
    if (this.state.throws !== 0){
        // var diceValuesRoundsFullCopy = [...this.state.diceValuesRounds];
        var diceValuesCopy = [...this.state.diceValues];
        
        this.state.diceStatus.map((status, i)=> {
            return (status === true ? diceValuesCopy[i] = Math.floor(Math.random() * (7 - 1) + 1) : diceValuesCopy[i] )
        })
        // console.log('dans le refresh : ', diceValuesCopy);
        // diceValuesRoundsFullCopy[this.state.round] = diceValuesRoundsCopy;
        this.setState({
            diceValues:diceValuesCopy,
            throws:this.state.throws-1
            }, ()=> {
              //Inutile ce score, pas comme ça qu'on calcule celon les règles.
              this.setState({totalScore:this.state.diceValues.reduce((accumulator, currentValue) => accumulator + currentValue)
                })
            })
    }else {
          console.log('Number of throws exceded, you must pick a lane to score');
    }

  }

  handleClick(position){
      var diceStatusCopy = [...this.state.diceStatus];
      diceStatusCopy[position] = !diceStatusCopy[position]
      this.setState({ diceStatus: diceStatusCopy })

  }

  handleScore(okOrNot){
      // console.log('what\'s in here : ', okOrNot);
      // okOrNot !== 'OK' ? this.setState({errorMessage: 'Eh, nice try ! You must throw the dice first.' }) : (this.state.errorMessage);
      if (okOrNot !== 'OK') {  this.setState({errorMessage: 'Eh, nice try ! You must throw the dice first.' }) }
      this.setState({throws:3}, ()=>{this.setState({diceStatus:[true, true, true, true,true]}, ()=>{this.setState({round:this.state.round+1, diceValues:[6, 6, 6, 6, 6]})})});
  }

  render() {

      var listDices = this.state.diceValues.map((dice, i)=>{
          return (<Dice handleClickParent={this.handleClick} refresh={this.state.refresh} value={dice} diceState={this.state.diceStatus[i]} position={i} key={i} />)
      })
    
    var Message = this.state.throws === 0 ? <p> &#8595; Please pick a score line &#8595;</p> : <p>Throws left : {this.state.throws} !</p>
    return (
      <div className="Board">
          <div className="Diceplacement">
            {listDices}
            <RefreshButton handleClickParent={this.handleRefresh} />
          </div>

            {Message}
            {this.state.errorMessage ? <p className="errorMessage" > {this.state.errorMessage} </p> : ''}

          <ScoringTable handleScoreParent={this.handleScore} allDices={this.state.diceValues} throws={this.state.throws} round={this.state.round} />
      </div>
    );
  }
}


export default Board;
