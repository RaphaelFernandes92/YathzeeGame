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
            TotalScorePoints:0,
            BonusPoints:0,
            TotalPoints:0,
            ThreeOfAKindPoints:0,
            FourOfAKindPoints:0,
            FullHousePoints:0,
            SmallStraightPoints:0,
            LargeStraightPoints:0,
            YahtzeePoints:0,
            ChancePoints:0,
            TotalLowerSectionPoints:0,
            TotalUpperSectionPoints:0,
            GrandTotalPoints:0,
        })
    this.handleScore = this.handleScore.bind(this);
    }



  handleScore(ScoringLine, okornot){
        console.log('dés reçu du board : ', this.props.allDices)
        // var scoreCopy = {...this.state.score};
        // var lowerSectionCopy = {...this.state.lowerSectionPoints}
        // var upperSectionCopy = {...this.state.upperSectionPoints};

        if (this.props.throws !== 3) {
            switch (ScoringLine) {
            case 'Aces':
                this.setState({AcesSave : this.props.allDices, AcesPoints: this.props.allDices.filter( result => result === 1).length * 1})
                break;
            case 'Twos':
                this.setState({TwosSave : this.props.allDices, TwosPoints: this.props.allDices.filter( result => result === 2).length * 2})
                break;
            case 'Threes':
                this.setState({ThreesSave : this.props.allDices, ThreesPoints: this.props.allDices.filter( result => result === 3).length * 3})
                break;
            case 'Fours':
                this.setState({FoursSave : this.props.allDices, FoursPoints: this.props.allDices.filter( result => result === 4).length * 4})
                break;
            case 'Fives':
                this.setState({FivesSave : this.props.allDices, FivesPoints: this.props.allDices.filter( result => result === 5).length * 5})
                break;
            case 'Sixes':
                this.setState({SixesSave : this.props.allDices, SixesPoints : this.props.allDices.filter( result => result === 6).length * 6})
                break;

            // //User picked Three Of a Kind
            case 'ThreeOfAKind':
                // Save dice in the row : Three of a Kind                
                this.setState({ThreeOfAKindSave : this.props.allDices}, ()=>{

                    // Check & score 3 of a kind ( X X X Y Z ), same dice appears 3 times
                    
                    //If 3 dice are the same, points = the amount of all dice
                    for(var i = 1; i < 7 ; i++){
                        if (this.props.allDices.filter( x => x === i).length >= 3) { 
                            this.setState({ThreeOfAKindPoints:this.props.allDices.reduce((accumulator, currentValue) => accumulator + currentValue)});
                            break;
                        }
                    }
                })
                break;

            case 'FourOfAKind':
                // Save the dice in the row Four of a kind
                this.setState({FourOfAKindSave : this.props.allDices}, ()=>{

                    // Check & score 4 of a kind ( X X X X Y )
                    for(var i = 1; i < 7 ; i++){
                        if (this.props.allDices.filter( x => x === i).length >= 4) {              
                            this.setState({FourOfAKindPoints: this.props.allDices.reduce((accumulator, currentValue) => accumulator + currentValue)  });
                            break;
                        }
                    }
                })
                break;

            case 'FullHouse':
                // Save dice in the row : FullHouse
                this.setState({FullHouseSave : this.props.allDices}, ()=>{

                    // Check & score Full House ( X X X Y Y ) or ( Y Y X X X ),  3 + 2
                    var FullHouse = this.state.FullHouseSave;
                    if( FullHouse.filter(x => x === FullHouse[0]).length + FullHouse.filter(x => x === FullHouse[FullHouse.length-1]).length === 5 ){
                        this.setState({FullHousePoints: 25});
                    }
                    

                })
                break;

            case 'SmallStraight':
                // User picked the row : Small Straight
                this.setState({SmallStraightSave : this.props.allDices}, ()=>{
                    
                    // Check for Small Straight ( 1, 3, 4, 5, 6) or ( 1, 2, 3, 4, 6) a straight of 4 dice
                                        // Set to make a copy of array with no duplicates
                    var SmallStraight = [...new Set(this.state.SmallStraightSave)];
                    var x = 0;
                    for(var i = 0; i < 5; i++ ){
                        if(SmallStraight[i+1] === SmallStraight[i]+1){
                            x++
                            if(x >= 3){    
                            this.setState({SmallStraightPoints:30});
                            break; 
                            }
                        }
                    }
                })
                break;

            case 'LargeStraight':
                // User picked the row : Large Straight
                this.setState({LargeStraightSave : this.props.allDices}, ()=>{
                    // Check for large Straight ( 1 2 3 4 5 ) or ( 2 3 4 5 6 ) a straight of 5 dice
                    var LargeStraight = this.state.LargeStraightSave;

                    if (LargeStraight[0] < LargeStraight[1] && LargeStraight[1] < LargeStraight[2] && LargeStraight[2] < LargeStraight[3] && LargeStraight[3] < LargeStraight[4]){
                        this.setState({LargeStraightPoints: 40});
                    }
                    
                })
                break;

                case 'Yahtzee':
                    // User picked the row : Yahtzee
                    this.setState({YahtzeeSave : this.props.allDices}, ()=> {

                        // Check for YAHTZEE ( X X X X X )
                        var Yahtzee = this.state.score.Yahtzee;
                        if (Yahtzee.filter(x => x === Yahtzee[0]).length === 5 ){
                            this.setState({YahtzeePoints:50});
                        }
                    })
                    break;

            case 'Chance':
                // User picked the row : Chance
                this.setState({ChanceSave : this.props.allDices, ChangePoints: this.props.allDices.reduce((accumulator, currentValue) => accumulator + currentValue)})
                break;
            default:
                console.log('default du switch');
            }
            this.props.handleScoreParent('OK');
        } else {
            this.props.handleScoreParent('Errrr You tried to cheat');
        }
  } 


  render() {
    
    // var totalScore = this.state.upperSectionPoints.Aces + this.state.upperSectionPoints.Twos + this.state.upperSectionPoints.Threes + this.state.upperSectionPoints.Fours + this.state.upperSectionPoints.Fives + this.state.upperSectionPoints.Sixes

    return (
      <div className="scoringTable">
             <Table bordered >
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
                        <th scope="row">Total Score</th>
                        <td>=></td>
                        <td></td>
                        <td>{this.state.TotalPoints}</td>
                    </tr>
                    <tr>
                        <th scope="row">Bonus</th>
                        <td>If total score is 63 or over : 35 points</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Total</th>
                        <td>Of upper section =></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">lower Section</th>
                        <td></td>
                        <td></td>
                        <td></td>
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
                        <td>{this.state.ChancePoints.Chance}</td>
                    </tr>
                    {/* <tr>
                        <th scope="row">Total</th>
                        <td>of lower section</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Total</th>
                        <td>of upper section</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Grand total</th>
                        <td>=></td>
                        <td></td>
                        <td></td>
                    </tr> */}
                </tbody>
            </Table>
      </div>
    );
  }
}

export default ScoringTable;
