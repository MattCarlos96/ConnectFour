import React from 'react';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return(

      <div id="board">
        <table id="table" onClick={this.props.placePiece.bind(this)} className="table">
          <tr>
            <th id="1a"></th>
            <th id="1b"></th>
            <th id="1c"></th>
            <th id="1d"></th>
            <th id="1e"></th>
            <th id="1f"></th>
            <th id="1g"></th>
          </tr>
          <tr>
            <th id="2a"></th>
            <th id="2b"></th>
            <th id="2c"></th>
            <th id="2d"></th>
            <th id="2e"></th>
            <th id="2f"></th>
            <th id="2g"></th>
          </tr>
          <tr>
            <th id="3a"></th>
            <th id="3b"></th>
            <th id="3c"></th>
            <th id="3d"></th>
            <th id="3e"></th>
            <th id="3f"></th>
            <th id="3g"></th>
          </tr>
          <tr>
            <th id="4a"></th>
            <th id="4b"></th>
            <th id="4c"></th>
            <th id="4d"></th>
            <th id="4e"></th>
            <th id="4f"></th>
            <th id="4g"></th>
          </tr>
          <tr>
            <th id="5a"></th>
            <th id="5b"></th>
            <th id="5c"></th>
            <th id="5d"></th>
            <th id="5e"></th>
            <th id="5f"></th>
            <th id="5g"></th>
          </tr>
          <tr>
            <th id="6a"></th>
            <th id="6b"></th>
            <th id="6c"></th>
            <th id="6d"></th>
            <th id="6e"></th>
            <th id="6f"></th>
            <th id="6g"></th>
          </tr>
        </table>
      </div>
    )
  }
}

export default GameBoard;