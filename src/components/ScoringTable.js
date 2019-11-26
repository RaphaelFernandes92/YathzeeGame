import React from 'react';
import { Table, Button } from 'reactstrap';


class ScoringTable extends React.Component {
    constructor(props){
        super(props);
        this.state=({
            AcesSave:[],
            TwosSave:[],
            ThreesSave:[],
            FoursSave:[],
            FivesSave:[],
            SixesSave:[],
            ThreeOfAKindSave:[],
            FourOfAKindSave:[],
            FullHouseSave:[],
            SmallStraightSave:[],
            LargeStraightSave:[],
            YahtzeeSave:[],
            ChanceSave:[],
            AcesPoints:0,
            TwosPoints:0,
            ThreesPoints:0,
            FoursPoints:0,
            FivesPoints:0,
            SixesPoints:0,
            Total:0,
            BonusPoints:0,
            TotalUpperPoints:0,
            ThreeOfAKindPoints:0,
            FourOfAKindPoints:0,
            FullHousePoints:0,
            SmallStraightPoints:0,
            LargeStraightPoints:0,
            YahtzeePoints:0,
            ChancePoints:0,
            TotalLowerPoints:0,
            GrandTotalPoints:0,
        })
    this.handleScore = this.handleScore.bind(this);
    }



  handleScore(ScoringLine, okornot){
        console.log('dés reçu du board : ', this.props.allDices)

        if (this.props.throws !== 3) {
            var score = 0;
            var newTotal = this.state.Total + score;
            var newBonus = newTotal >= 63 ? 35 : 0;
            var newTotalUpperPoints = newTotal + newBonus;
            var newTotalLowerPoints = this.state.TotalLowerPoints + score;
            var newGrandTotalPoints = this.state.GrandTotalPoints + score;

            switch (ScoringLine) {

            case 'Aces':
                score = this.props.allDices.filter( dice => dice === 1).length * 1;
                newTotal = this.state.Total + score;
                newBonus = newTotal >= 63 ? 35 : 0;
                newTotalUpperPoints = newTotal + newBonus;
                newGrandTotalPoints = this.state.GrandTotalPoints + score;
                this.setState({
                    AcesSave : this.props.allDices,
                    AcesPoints : score,
                    Total : newTotal,
                    BonusPoints: newBonus,
                    TotalUpperPoints:newTotalUpperPoints,
                    GrandTotalPoints:newGrandTotalPoints,
                });
                break;

            case 'Twos':
                score = this.props.allDices.filter( dice => dice === 2).length * 2;
                newTotal = this.state.Total + score;
                newBonus = newTotal >= 63 ? 35 : 0;
                newTotalUpperPoints = newTotal + newBonus;
                newGrandTotalPoints = this.state.GrandTotalPoints + score;
                this.setState({
                    TwosSave : this.props.allDices,
                    TwosPoints : score,
                    Total : newTotal,
                    BonusPoints: newBonus,
                    TotalUpperPoints:newTotalUpperPoints,
                    GrandTotalPoints:newGrandTotalPoints,
                });
                break;

            case 'Threes':
                score = this.props.allDices.filter( dice => dice === 3).length * 3;
                newTotal = this.state.Total + score;
                newBonus = newTotal >= 63 ? 35 : 0;
                newTotalUpperPoints = newTotal + newBonus;
                newGrandTotalPoints = this.state.GrandTotalPoints + score;
                this.setState({
                    ThreesSave : this.props.allDices,
                    ThreesPoints : score,
                    Total : newTotal,
                    BonusPoints: newBonus,
                    TotalUpperPoints:newTotalUpperPoints,
                    GrandTotalPoints:newGrandTotalPoints,
                });
                break;

            case 'Fours':
                score = this.props.allDices.filter( dice => dice === 4).length * 4;
                newTotal = this.state.Total + score;
                newBonus = newTotal >= 63 ? 35 : 0;
                newTotalUpperPoints = newTotal + newBonus;
                newGrandTotalPoints = this.state.GrandTotalPoints + score;
                this.setState({
                    FoursSave : this.props.allDices,
                    FoursPoints : score,
                    Total : newTotal,
                    BonusPoints: newBonus,
                    TotalUpperPoints:newTotalUpperPoints,
                    GrandTotalPoints:newGrandTotalPoints,
                });
                break;

            case 'Fives':
                score = this.props.allDices.filter( dice => dice === 5).length * 5;
                newTotal = this.state.Total + score;
                newBonus = newTotal >= 63 ? 35 : 0;
                newTotalUpperPoints = newTotal + newBonus;
                newGrandTotalPoints = this.state.GrandTotalPoints + score;
                this.setState({
                    FivesSave : this.props.allDices,
                    FivesPoints : score,
                    Total : newTotal,
                    BonusPoints: newBonus,
                    TotalUpperPoints:newTotalUpperPoints,
                    GrandTotalPoints:newGrandTotalPoints,
                });
                break;

            case 'Sixes':
                score = this.props.allDices.filter( dice => dice === 6).length * 6;
                newTotal = this.state.Total + score;
                newBonus = newTotal >= 63 ? 35 : 0;
                newTotalUpperPoints = newTotal + newBonus;
                newGrandTotalPoints = this.state.GrandTotalPoints + score;
                this.setState({
                    SixesSave : this.props.allDices,
                    SixesPoints : score,
                    Total : newTotal,
                    BonusPoints: newBonus,
                    TotalUpperPoints:newTotalUpperPoints,
                    GrandTotalPoints:newGrandTotalPoints,
                });
                break;

            //User picked Three Of a Kind
            case 'ThreeOfAKind':
                    // Check & score Three of a kind ( X X X Y Z ), same dice appears 3 times
                    for(var i = 1; i < 7 ; i++){
                        if (this.props.allDices.filter( x => x === i).length >= 3) { 
                            score = this.props.allDices.reduce((accumulator, currentValue) => accumulator + currentValue)
                            break;
                        }
                    }
                    
                    newTotalLowerPoints = this.state.TotalLowerPoints + score;
                    newGrandTotalPoints = this.state.GrandTotalPoints + score
                    // Save dice in the row : Three of a Kind 
                    this.setState({
                        ThreeOfAKindSave : this.props.allDices,
                        ThreeOfAKindPoints : score,
                        TotalLowerPoints : newTotalLowerPoints,
                        GrandTotalPoints: newGrandTotalPoints                          
                    });

                break;

            //User picked Four Of a Kind
            case 'FourOfAKind':
                
                // Check & score Four of a kind ( X X X X Y ), same dice appears 4 times
                for(var i = 1; i < 7 ; i++){
                    if (this.props.allDices.filter( x => x === i).length >= 4) {  
                        score = this.props.allDices.reduce((accumulator, currentValue) => accumulator + currentValue);
                        break;
                    }
                }
                
                newTotalLowerPoints = this.state.TotalLowerPoints + score;
                newGrandTotalPoints = this.state.GrandTotalPoints + score;
                // Save the dice in the row Four of a kind && update scores
                        this.setState({
                            FourOfAKindSave : this.props.allDices,
                            FourOfAKindPoints: score,
                            TotalLowerPoints : newTotalLowerPoints,  
                            GrandTotalPoints: newGrandTotalPoints
                        });
                break;

            //User picked Full House
            case 'FullHouse':

                    // Check & score Full House ( X X X Y Y ) or ( Y Y X X X ),  3 + 2
                    var FullHouse = this.props.allDices.sort();
                    if( FullHouse.filter(x => x === FullHouse[0]).length + FullHouse.filter(x => x === FullHouse[FullHouse.length-1]).length === 5 ){
                        score = 25;
                    }

                    newTotalLowerPoints = this.state.TotalLowerPoints + score;
                    newGrandTotalPoints = this.state.GrandTotalPoints + score;
                    // Save dice in the row : FullHouse
                    this.setState({
                        FullHouseSave : this.props.allDices,
                        FullHousePoints: score,
                        TotalLowerPoints : newTotalLowerPoints,
                        GrandTotalPoints: newGrandTotalPoints
                    });
                        
                break;

            //User picked SmallStraight
            case 'SmallStraight':
                    
                    // Check for Small Straight ( 1, 3, 4, 5, 6) or ( 1, 2, 3, 4, 6) a straight of 4 dice
                                        // Set to make a copy of array with no duplicates
                    var SmallStraight = [...new Set(this.props.allDices.sort())];
                    var x = 0;
                    for(var i = 0; i < 5; i++ ){
                        if(SmallStraight[i+1] === SmallStraight[i]+1){
                            x++
                            if(x >= 3){ 
                                score = 30;
                            }
                        }
                    }   

                newTotalLowerPoints = this.state.TotalLowerPoints + score;
                newGrandTotalPoints = this.state.GrandTotalPoints + score;
                // Save dice in the row : SmallStraight & update scores
                    this.setState({
                        SmallStraightSave : this.props.allDices,
                        SmallStraightPoints : score,
                        TotalLowerPoints : newTotalLowerPoints,
                        GrandTotalPoints: newGrandTotalPoints   
                        
                    });
                break;

            //User picked Large Straight
            case 'LargeStraight':
                    // Check for large Straight ( 1 2 3 4 5 ) or ( 2 3 4 5 6 ) a straight of 5 dice
                    var LargeStraight = this.props.allDices.sort();
                                                                                           //  3 4 5 6 6
                    if (LargeStraight[0] === LargeStraight[1]-1 && LargeStraight[1] === LargeStraight[2]-1 && LargeStraight[2] === LargeStraight[3]-1 && LargeStraight[3] === LargeStraight[4]-1){
                        score = 40;
                    }

                    newTotalLowerPoints = this.state.TotalLowerPoints + score;
                    newGrandTotalPoints = this.state.GrandTotalPoints + score;
                    
                    // Save dice in row : Large Straight & update scores
                    this.setState({
                        LargeStraightSave : this.props.allDices,
                        LargeStraightPoints: score,
                        TotalLowerPoints : newTotalLowerPoints,
                        GrandTotalPoints: newGrandTotalPoints  
                    });
                break;

            //User picked Three Of a Kind
            case 'Yahtzee':
                    // Check for YAHTZEE ( X X X X X ), 5 times the same dice
                    var Yahtzee = this.props.allDices;
                    if (Yahtzee.filter(x => x === Yahtzee[0]).length === 5 ){
                        console.log('dans le yahtzee : ', Yahtzee, Yahtzee.filter(x => x === Yahtzee[0]).length)
                        score = 50;
                    }
                    
                    newTotalLowerPoints = this.state.TotalLowerPoints + score;
                    newGrandTotalPoints = this.state.GrandTotalPoints + score;
                    // User picked the row : Yahtzee & update scores
                    this.setState({
                        YahtzeeSave : this.props.allDices,
                        YahtzeePoints: score,
                        TotalLowerPoints : newTotalLowerPoints,
                        GrandTotalPoints: newGrandTotalPoints    
                    });
                break;

            //User picked Chance : Sum of 5 dice
            case 'Chance':
                score = this.props.allDices.reduce((accumulator, currentValue) => accumulator + currentValue);

                newTotalLowerPoints = this.state.TotalLowerPoints + score;
                newGrandTotalPoints = this.state.GrandTotalPoints + score;

                //Save dice in chance row & update scores
                this.setState({
                    ChanceSave : this.props.allDices,
                    ChancePoints: score,
                    TotalLowerPoints : newTotalLowerPoints,
                    GrandTotalPoints: newGrandTotalPoints                   
                })
                break;

            default:
                console.log('HandleScore default : Error');
            }
            this.props.handleScoreParent('OK', newGrandTotalPoints);

        } else {
            this.props.handleScoreParent('MMhhhh did you try to cheat ?', newGrandTotalPoints);
        }
  } 


  render() {
    return (
      <div className="scoringTable">
             <Table >
                <thead>
                    <tr>
                        <th>Upper Section</th>
                        <th>How to score</th>
                        <th>Game 1</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Aces</th>
                        <td>Count and add only Aces</td>
                        <td>
                            {this.state.AcesSave.length === 0 ?
                            <Button color="success" onClick={()=>this.handleScore('Aces')}>Pick</Button> :
                            this.state.AcesSave.sort()}
                        </td>
                        <td>{this.state.AcesPoints !== 0 ? this.state.AcesPoints : 0 }</td>
                    </tr>
                    <tr>
                        <th scope="row">Twos</th>
                        <td>Count and add only Twos</td>
                        <td>
                            {this.state.TwosSave.length === 0 ?
                            <Button color="success" onClick={()=>this.handleScore('Twos')}>Pick</Button> :
                            this.state.TwosSave.sort()}
                        </td>
                        <td>{this.state.TwosPoints !== 0 ? this.state.TwosPoints : 0 }</td>
                    </tr>
                   <tr>
                        <th scope="row">Threes</th>
                        <td>Count and add only Threes</td>
                        <td>
                            {this.state.ThreesSave.length === 0 ?
                            <Button color="success" onClick={()=>this.handleScore('Threes')}>Pick</Button> :
                            this.state.ThreesSave.sort()}
                        </td>
                        <td>{this.state.ThreesPoints !== 0 ? this.state.ThreesPoints : 0 }</td>
                    </tr>                    
                    <tr>
                        <th scope="row">Fours</th>
                        <td>Count and add only Fours</td>
                        <td>
                            {this.state.FoursSave.length === 0 ?
                            <Button color="success" onClick={()=>this.handleScore('Fours')}>Pick</Button> :
                            this.state.FoursSave.sort()}
                        </td>
                        <td>{this.state.FoursPoints !== 0 ? this.state.FoursPoints : 0 }</td>
                    </tr>
                   <tr>
                        <th scope="row">Fives</th>
                        <td>Count and add only Fives</td>
                        <td>
                            {this.state.FivesSave.length === 0 ?
                            <Button color="success" onClick={()=>this.handleScore('Fives')}>Pick</Button> :
                            this.state.FivesSave.sort()}
                        </td>
                        <td>{this.state.FivesPoints !== 0 ? this.state.FivesPoints : 0 }</td>
                    </tr>
                    <tr>
                        <th scope="row">Sixes</th>
                        <td>Count and add only Sixes</td>
                        <td>
                            {this.state.SixesSave.length === 0 ?
                            <Button color="success" onClick={()=>this.handleScore('Sixes')}>Pick</Button> :
                            this.state.SixesSave.sort()}
                        </td>
                        <td>{this.state.SixesPoints !== 0 ? this.state.SixesPoints : 0 }</td>
                    </tr>
                    <tr>
                        <th scope="row"colspan="3">Total of upper section</th>
                        <td>{this.state.TotalUpperPoints}</td>
                    </tr>
                    <tr>
                        <th scope="row" colspan="3">Bonus : If total score is 63 or over : 35 points</th>
                        <td>{this.state.BonusPoints}</td>
                    </tr>
                    <tr>
                        <th scope="row" colspan="4">lower Section</th>
                    </tr>
                    <tr>
                        <th scope="row">3 of a kind</th>
                        <td>Add total of all dice</td>
                        <td>
                            {this.state.ThreeOfAKindSave.length === 0 ?
                            <Button color="success" onClick={()=>this.handleScore('ThreeOfAKind')}>Pick</Button> :
                            this.state.ThreeOfAKindSave.sort()}
                        </td>
                        <td>{this.state.ThreeOfAKindPoints}</td>
                    </tr>
                    <tr>
                        <th scope="row">4 of a kind</th>
                        <td>Add total of all dice</td>
                        <td>
                            {this.state.FourOfAKindSave.length === 0 ?
                            <Button color="success" onClick={()=>this.handleScore('FourOfAKind')}>Pick</Button> :
                            this.state.FourOfAKindSave.sort()}
                        </td>
                        <td>{this.state.FourOfAKindPoints}</td>
                    </tr>
                    <tr>
                        <th scope="row">Full House</th>
                        <td>Score 25</td>
                        <td>
                            {this.state.FullHouseSave.length === 0 ?
                            <Button color="success" onClick={()=>this.handleScore('FullHouse')}>Pick</Button> :
                            this.state.FullHouseSave.sort()}
                        </td>
                        <td>{this.state.FullHousePoints}</td>
                    </tr>
                    <tr>
                        <th scope="row">Small Straight</th>
                        <td>Score 30</td>
                        <td>
                            {this.state.SmallStraightSave.length === 0 ?
                            <Button color="success" onClick={()=>this.handleScore('SmallStraight')}>Pick</Button> :
                            this.state.SmallStraightSave.sort()}
                        </td>
                        <td>{this.state.SmallStraightPoints}</td>
                    </tr>
                    <tr>
                        <th scope="row">Large Straight</th>
                        <td>Score 40</td>
                        <td>
                            {this.state.LargeStraightSave.length === 0 ?
                            <Button color="success" onClick={()=>this.handleScore('LargeStraight')}>Pick</Button> :
                            this.state.LargeStraightSave.sort()}
                        </td>
                        <td>{this.state.LargeStraightPoints}</td>
                    </tr>
                    <tr>
                        <th scope="row">YAHTZEE</th>
                        <td>Score 50</td>
                        <td>
                            {this.state.YahtzeeSave.length === 0 ?
                            <Button color="success" onClick={()=>this.handleScore('Yahtzee')}>Pick</Button> :
                            this.state.YahtzeeSave.sort()}
                        </td>
                        <td>{this.state.YahtzeePoints}</td>
                    </tr>
                    <tr>
                        <th scope="row">Chance</th>
                        <td>Score total of all 5 dice</td>
                        <td>
                            {this.state.ChanceSave.length === 0 ?
                            <Button color="success" onClick={()=>this.handleScore('Chance')}>Pick</Button> :
                            this.state.ChanceSave.sort()}
                        </td>
                        <td>{this.state.ChancePoints}</td>
                    </tr>
                    <tr>
                        <th scope="row" colspan="3">Total of lower section</th>
                        <td>{this.state.TotalLowerPoints}</td>
                    </tr>
                    <tr>
                        <th scope="row" colspan="3">Grand total</th>
                        <td>{this.state.GrandTotalPoints}</td>
                    </tr>
                </tbody>
            </Table>
      </div>
    );
  }
}

export default ScoringTable;
