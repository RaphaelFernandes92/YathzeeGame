import React from 'react';
import refreshImg from '../assets/refresh-page-option.svg'

class RefreshButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

 handleClick(){
        this.props.handleClickParent();
  } 

  render() {
    return (
      <div className="refreshButton"
        onClick={this.handleClick}>
            <img className="refreshButton" src={refreshImg} alt="refresh button" />
      </div>
    );
  }
}

export default RefreshButton;
