import React from 'react';
import Rodal from 'rodal';

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }



  render() {
    if (this.props.stats.winner === 'tie') {

        return (
          <div>

            <Rodal  visible={this.props.visible} onClose={this.props.hide.bind(this)}>
              <div className="result">TIE GAME!!!</div>
              <div>

                <p>Red moves:{this.props.stats.redMoves}</p>
                <p>Black moves:{this.props.stats.blackMoves}</p>
              </div>
              <button onClick={this.props.reset.bind(this)}>Play again!</button>
            </Rodal>
          </div>
        );
    } else {
      return (
      <div>

        <Rodal showCloseButton={false} closeMaskOnClick={false} animation="rotate" visible={this.props.visible} onClose={this.props.hide.bind(this)}>
          <div className="result">GAME OVER!</div>
          <div>
            <span id="span">
              <p className="color" style={{color: this.props.stats.winner}}>{this.props.stats.winner === 'black' ? this.props.stats.playerBlack : this.props.stats.playerRed} wins the game!</p>
            </span>
            {/* <p>{this.props.stats.winner} </p> */}
            <p>Red moves:{this.props.stats.redMoves}</p>
            <p>Black moves:{this.props.stats.blackMoves}</p>
          </div>
          <button onClick={this.props.reset.bind(this)}>Play again!</button>
        </Rodal>
      </div>
    );
    }

  }
}

export default ScoreBoard;
