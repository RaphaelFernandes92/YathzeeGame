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
            switch (ScoringLine) {

            case 'Aces':
                var score = this.props.allDices.filter( dice => dice === 1).length * 1;
                this.setState({
                    AcesSave : this.props.allDices,
                    AcesPoints : score,
                    Total : this.state.Total + score,
                },  () => {
                    this.setState({
                        BonusPoints:this.state.Total > 63 ? 35 : 0
                    })
                });
                break;

            case 'Twos':
                var score = this.props.allDices.filter( dice => dice === 2).length * 2;
                this.setState({
                    TwosSave : this.props.allDices,
                    TwosPoints : score,
                    Total : this.state.Total + score,
                },  () => {
                    this.setState({
                        BonusPoints:this.state.Total > 63 ? 35 : 0
                    })
                });
                break;

            case 'Threes':
                var score = this.props.allDices.filter( dice => dice === 3).length * 3;
                this.setState({
                    ThreesSave : this.props.allDices,
                    ThreesPoints : score,
                    Total: this.state.Total + score,
                },  () => {
                    this.setState({
                        BonusPoints:this.state.Total > 63 ? 35 : 0
                    })
                });
                break;

            case 'Fours':
                var score = this.props.allDices.filter( dice => dice === 4).length * 4;
                this.setState({
                    FoursSave : this.props.allDices,
                    FoursPoints : score,
                    Total: this.state.Total + score,
                },  () => {
                    this.setState({
                        BonusPoints:this.state.Total > 63 ? 35 : 0
                    })
                });
                break;

            case 'Fives':
                var score = this.props.allDices.filter( dice => dice === 5).length * 5;
                this.setState({
                    FivesSave : this.props.allDices,
                    FivesPoints : score,
                    Total : this.state.Total + score,
                },  () => {
                    this.setState({
                        BonusPoints:this.state.Total > 63 ? 35 : 0
                    })
                });
                break;

            case 'Sixes':
                var score = this.props.allDices.filter( dice => dice === 6).length * 6;
                this.setState({
                    SixesSave : this.props.allDices,
                    SixesPoints : score,
                    Total : this.state.Total + score,
                },  () => {
                    this.setState({
                        BonusPoints:this.state.Total > 63 ? 35 : 0
                    })
                });
                break;

            //User picked Three Of a Kind
            case 'ThreeOfAKind':
                // Save dice in the row : Three of a Kind                
                this.setState({
                    ThreeOfAKindSave : this.props.allDices
                },  () => {
                    // Check & score Three of a kind ( X X X Y Z ), same dice appears 3 times
                    for(var i = 1; i < 7 ; i++){
                        if (this.props.allDices.filter( x => x === i).length >= 3) { 
                            
                            var score = this.props.allDices.reduce((accumulator, currentValue) => accumulator + currentValue)
                            
                            this.setState({
                                ThreeOfAKindPoints : score,
                                Total : this.state.Total+score,
                                BonusPoints : this.state.Total > 63 ? 35 : 0,
                                TotalLowerPoints : this.state.TotalLowerPoints + score,                             
                            });
                            break;
                        }
                    }
                })
                break;

            //User picked Four Of a Kind
            case 'FourOfAKind':
                // Save the dice in the row Four of a kind
                this.setState({FourOfAKindSave : this.props.allDices}, ()=>{

                    // Check & score Four of a kind ( X X X X Y ), same dice appears 4 times
                    for(var i = 1; i < 7 ; i++){
                        if (this.props.allDices.filter( x => x === i).length >= 4) {  
                            var score = this.props.allDices.reduce((accumulator, currentValue) => accumulator + currentValue);            
                            this.setState({
                                FourOfAKindPoints: score,
                                TotalLowerPoints : this.state.TotalLowerPoints + score,
                            });
                            break;
                        }
                    }
                })
                break;

            //User picked Full House
            case 'FullHouse':
                // Save dice in the row : FullHouse
                this.setState({FullHouseSave : this.props.allDices}, ()=>{
                    
                    // Check & score Full House ( X X X Y Y ) or ( Y Y X X X ),  3 + 2
                    var FullHouse = this.state.FullHouseSave;
                    if( FullHouse.filter(x => x === FullHouse[0]).length + FullHouse.filter(x => x === FullHouse[FullHouse.length-1]).length === 5 ){
                        this.setState({
                            FullHousePoints: 25,
                            TotalLowerPoints : this.state.TotalLowerPoints + 25,
                        });
                    }
                })
                break;

            //User picked SmallStraight
            case 'SmallStraight':
                // Save dice in the row : SmallStraight
                this.setState({SmallStraightSave : this.props.allDices}, ()=>{
                    
                    // Check for Small Straight ( 1, 3, 4, 5, 6) or ( 1, 2, 3, 4, 6) a straight of 4 dice
                                        // Set to make a copy of array with no duplicates
                    var SmallStraight = [...new Set(this.state.SmallStraightSave)];
                    var x = 0;
                    for(var i = 0; i < 5; i++ ){
                        if(SmallStraight[i+1] === SmallStraight[i]+1){
                            x++
                            if(x >= 3){    
                            this.setState({
                                SmallStraightPoints : 30,
                                TotalLowerPoints : this.state.TotalLowerPoints + 30,
                            });
                            break; 
                            }
                        }
                    }
                })
                break;

            //User picked Large Straight
            case 'LargeStraight':
                // Save dice in row : Large Straight
                this.setState({LargeStraightSave : this.props.allDices}, ()=>{
                    // Check for large Straight ( 1 2 3 4 5 ) or ( 2 3 4 5 6 ) a straight of 5 dice
                    var LargeStraight = this.state.LargeStraightSave;

                    if (LargeStraight[0] < LargeStraight[1] && LargeStraight[1] < LargeStraight[2] && LargeStraight[2] < LargeStraight[3] && LargeStraight[3] < LargeStraight[4]){
                        this.setState({
                            LargeStraightPoints: 40,
                            TotalLowerPoints : this.state.TotalLowerPoints + 40,
                        });
                    }
                    
                })
                break;

            //User picked Three Of a Kind
            case 'Yahtzee':
                // User picked the row : Yahtzee
                this.setState({YahtzeeSave : this.props.allDices}, ()=> {

                    // Check for YAHTZEE ( X X X X X ), 5 times the same dice
                    var Yahtzee = this.state.YahtzeeSave;
                    if (Yahtzee.filter(x => x === Yahtzee[0]).length === 5 ){
                        this.setState({
                            YahtzeePoints:50,
                            TotalLowerPoints : this.state.TotalLowerPoints + 50,
                        });
                    }
                })
                break;

            //User picked Chance : Sum of 5 dice
            case 'Chance':
                //Save dice in chance row & score
                var score = this.props.allDices.reduce((accumulator, currentValue) => accumulator + currentValue);
                this.setState({
                    ChanceSave : this.props.allDices,
                    ChancePoints: score,
                    TotalLowerPoints : this.state.TotalLowerPoints + score,
                })
                break;

            default:
                console.log('HandleScore default : Error');
            }
          
            console.log('Total avant : ', this.state.Total);
            console.log('Total apres : ', this.state.Total);
            this.props.handleScoreParent('OK');

        } else {
            this.props.handleScoreParent('MMhhhh did you try to cheat ?');
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
                        <td>{this.state.AcesPoints + this.state.TwosPoints + this.state.ThreesPoints + this.state.FoursPoints + this.state.FivesPoints + this.state.SixesPoints }</td>
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
                        <td>{this.state.TotalLowerPoints }</td>
                    </tr>
                    <tr>
                        <th scope="row" colspan="3">Grand total</th>
                        <td>{this.state.AcesPoints + this.state.TwosPoints + this.state.ThreesPoints + this.state.FoursPoints + this.state.FivesPoints + this.state.SixesPoints + this.state.ThreeOfAKindPoints + this.state.FourOfAKindPoints + this.state.FullHousePoints + this.state.SmallStraightPoints + this.state.LargeStraightPoints + this.state.YahtzeePoints + this.state.ChancePoints}</td>
                    </tr>
                </tbody>
            </Table>
      </div>
    );
  }
}

export default ScoringTable;
