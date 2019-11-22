import React from 'react';


// var random = Math.floor(Math.random() * (7 - 1) + 1);


class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isLocked:this.props.diceState,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  
  handleClick(){
        this.setState({isLocked: !this.state.isLocked})
        this.props.handleClickParent(this.props.position);
  }


  render() {



    return (
      <div className={this.props.diceState ? "Dice" : "DiceLocked"}
        numero={this.props.position}
        onClick={this.handleClick}
      >
          <p className="DiceText">{this.props.value}</p>
      </div>
    );
  }
}


export default Dice;
