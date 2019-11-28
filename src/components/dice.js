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

    switch(this.props.value) {

        case 6 : 
            return (
                <div className={this.props.diceState ? "Dice cssDice dice6" : "DiceLocked cssDice dice6"}
                    number={this.props.position}
                    onClick={this.props.throws === 3 ? null : this.handleClick}
                >
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                </div>
            )

        case 5 : 

            return (
                <div className={this.props.diceState ? "Dice cssDice dice5" : "DiceLocked cssDice dice5"}
                    number={this.props.position}
                    onClick={this.props.throws === 3 ? null : this.handleClick}
                >
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                </div>
            )

        case 4 : 

            return (
                <div className={this.props.diceState ? "Dice cssDice dice4" : "DiceLocked cssDice dice4"}
                    number={this.props.position}
                    onClick={this.props.throws === 3 ? null : this.handleClick}
                >
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                </div>
            )

        case 3 : 

            return (
                <div className={this.props.diceState ? "Dice cssDice dice3" : "DiceLocked cssDice dice3"}
                    number={this.props.position}
                    onClick={this.props.throws === 3 ? null : this.handleClick}
                >
                        <div></div>
                        <div></div>
                        <div></div>
                </div>
            )

        case 2 : 

            return (
                <div className={this.props.diceState ? "Dice cssDice dice2" : "DiceLocked cssDice dice2"}
                    number={this.props.position}
                    onClick={this.props.throws === 3 ? null : this.handleClick}
                >
                        <div></div>
                        <div></div>
                </div>
            )

        case 1 : 

            return (
                <div className={this.props.diceState ? "Dice cssDice dice1" : "DiceLocked cssDice dice1"}
                    number={this.props.position}
                    onClick={ this.props.throws === 3 ? null : this.handleClick}
                >
                        <div></div>
                </div>
            )

        default : 
        
            return (
                <div className={this.props.diceState ? "Dice" : "DiceLocked"}
                    number={this.props.position}
                    onClick={this.handleClick}
                >
                    <p className="DiceText">{this.props.value}</p>
                </div>
            )

    }





  }
}


export default Dice;
