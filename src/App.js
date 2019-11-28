import React from 'react';
import './App.css';
import Board from './components/board';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Dice from './components/dice';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      gameStarted:false,
    })
  }

  componentDidUpdate(){
    window.scrollTo(0, 0);
  };

  
  render() {
   if ( this.state.gameStarted ) {
    return (
       <Container>
                  <Row className="justify-content-center">
                    <Col xs="10">
                      <Row  className="justify-content-center">
                          <h1>YAHTZEE</h1>
                      </Row>
                      <Row  className="justify-content-center">
                          <Board />
                      </Row>
                    </Col>
                  </Row>
      </Container>
    );
   } else {
     return (
       <Container>
          <Row className="App">
              <Col>
                  <Row className="justify-content-center">
                    <h1>YAHTZEE</h1>
                  </Row>
                  <Row className="justify-content-center">
                    <Col className="rules" xs="8" >
                        <h2>Rules :</h2>
                        <p>
                          The object of Yahtzee is to obtain the highest score from throwing 5 dice.
                          The game consists of 13 rounds. In each round, you roll the dice and then score the roll in one of 13 categories. You must score once in each category. The score is determined by a different rule for each category.
                          The game ends once all 13 categories have been scored.
                        </p>

                        <Row className="justify-content-center">
                          <Dice home={true} throws={3} value={1} diceState={false} position={1} key={1} />
                          <Dice home={true}  throws={3} value={1} diceState={false} position={2} key={2} />
                          <Dice home={true}  throws={3} value={3} diceState={true} position={3} key={3} />
                          <Dice home={true}  throws={3} value={4} diceState={true} position={4} key={4} />
                          <Dice home={true}  throws={3} value={5} diceState={true} position={5} key={5} />
                        </Row>
                        <h2>Scoring :</h2>
                        <p>
                          To score your combination of 5 dice, you click one of the 13 boxes, or write it on the scorecard (scoresheet). There are two sections to the score table - the Upper Section and the Lower Section. Once a box has been scored, it cannot be scored again for the rest of the game
                        </p>
                        
                        <h4>Upper Section Scoring :</h4>
                        <ul>
                          <li>
                            If you score in the upper section of the table, your score is the total of the specified die face.
                            So if you roll:
                            5 - 2 - 5 - 6 - 5 and score in the Fives category, your total for the category would be 15, because there are three fives, which are added together.
                            If the One, Three or Four Categories were selected for scoring with this roll, you would score a zero.
                            If placed in the Two or Six category, you would score 2 and 6 respectively.
                          </li>
                          <li>
                            <b>Bonus : </b>If the total of Upper scores is 63 or more, add a bonus of 35. Note that 63 is the total of three each of 1s, 2s, 3s, 4s, 5s and 6s.
                          </li>
                        </ul>

                        <h4>Lower Section Scoring :</h4>
                        <ul>
                            In the lower scores, you score either a set amount, or zero if you don't satisfy the category requirements.
                            <li>
                              <b>3 and 4 of a kind : </b>For 3 of a kind you must have at least 3 of the same die faces. You score the total of all the dice.<br/> For 4 of a kind you would need 4 die faces the same.
                            </li>
                            <li>
                              <b>Small and Large Straight : </b>A Straight is a sequence of consecutive die faces, where a small straight is 4 consecutive faces, and a large straight 5 consecutive faces.
                              Small straights score 30 and a large 40 points.
                              So if you rolled: 2 - 3 - 2 - 5 - 4
                              you could score 30 in small straight or 0 in large straight.
                            </li>
                            <li>
                              <b>Full House : </b>is where you have 3 of a kind and 2 of a kind. Full houses score 25 points.
                              i.e.: 3 - 3 - 2 - 3 - 2
                              would score 25 in the Full House category.
                            </li>
                            <li>
                              <b>Yahtzee : </b>is 5 of a kind and scores 50 points.
                            </li>
                            <li>
                              <b>Chance : </b>You can roll anything and be able to put it in the Chance category. You score the total of the die faces.
                            </li>
                        </ul>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <button onClick={()=>this.setState({gameStarted:!this.state.gameStarted})}>Start Playing</button>
                  </Row>
              </Col>
          </Row>
      </Container>
     );
   }
  }
}

export default App;
