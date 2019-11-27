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

    if (this.props.throws !== 3 && this.props.value === 6) {

        return (
            <div className={this.props.diceState ? "Dice cssDice dice6" : "DiceLocked cssDice dice6"}
                numero={this.props.position}
                onClick={this.handleClick}
            >
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
            </div>
        )

    } else if (this.props.throws === 3 && this.props.value === 6){
        
        return (
            <div className={this.props.diceState ? "Dice cssDice dice6" : "DiceLocked cssDice dice6"}
                numero={this.props.position}
            >
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
            </div>
        )

    } else if (this.props.throws !== 3 && this.props.value === 5) {

            return (
                <div className={this.props.diceState ? "Dice cssDice dice5" : "DiceLocked cssDice dice5"}
                    numero={this.props.position}
                    onClick={this.handleClick}
                >
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                </div>
            )

    } else if (this.props.throws === 3 && this.props.value === 5){

        return (
            <div className={this.props.diceState ? "Dice cssDice dice5" : "DiceLocked cssDice dice5"}
                numero={this.props.position}
            >
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
            </div>
        )

    } else if (this.props.throws !== 3 && this.props.value === 4) {

            return (
                <div className={this.props.diceState ? "Dice cssDice dice4" : "DiceLocked cssDice dice4"}
                    numero={this.props.position}
                    onClick={this.handleClick}
                >
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                </div>
            )

    } else if (this.props.throws === 3 && this.props.value === 4){

        return (
            <div className={this.props.diceState ? "Dice cssDice dice4" : "DiceLocked cssDice dice4"}
                numero={this.props.position}
            >
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
            </div>
        )

    } else if (this.props.throws !== 3 && this.props.value === 3) {

            return (
                <div className={this.props.diceState ? "Dice cssDice dice3" : "DiceLocked cssDice dice3"}
                    numero={this.props.position}
                    onClick={this.handleClick}
                >
                        <div></div>
                        <div></div>
                        <div></div>
                </div>
            )

    } else if (this.props.throws === 3 && this.props.value === 3){
        return (
        <div className={this.props.diceState ? "Dice cssDice dice3" : "DiceLocked cssDice dice3"}
            numero={this.props.position}
        >
                <div></div>
                <div></div>
                <div></div>
        </div>
        )
    } else if (this.props.throws !== 3 && this.props.value === 2) {
            return (
                <div className={this.props.diceState ? "Dice cssDice dice2" : "DiceLocked cssDice dice2"}
                    numero={this.props.position}
                    onClick={this.handleClick}
                >
                        <div></div>
                        <div></div>
                </div>
            )
    } else if (this.props.throws === 3 && this.props.value === 2){
        return (
        <div className={this.props.diceState ? "Dice cssDice dice2" : "DiceLocked cssDice dice2"}
            numero={this.props.position}
        >
                <div></div>
                <div></div>
        </div>
        )
    } else if (this.props.throws !== 3 && this.props.value === 1) {
            return (
                <div className={this.props.diceState ? "Dice cssDice dice1" : "DiceLocked cssDice dice1"}
                    numero={this.props.position}
                    onClick={this.handleClick}
                >
                        <div></div>
                </div>
            )
    } else if (this.props.throws === 3 && this.props.value === 1){
        return (
        <div className={this.props.diceState ? "Dice cssDice dice1" : "DiceLocked cssDice dice1"}
            numero={this.props.position}
        >
                <div></div>
        </div>
        )
    } else {
    return (
      <div className={this.props.diceState ? "Dice" : "DiceLocked"}
        numero={this.props.position}
        onClick={this.handleClick}
      >
          <p className="DiceText">{this.props.value}</p>
      </div>
    )
    }
  }
}


export default Dice;
