import React from 'react';
import GameBoard from './GameBoard.jsx';
import ScoreBoard from './ScoreBoard.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 0,
      blackMoves: 0,
      redMoves: 0,
      winner: null,
      visible: false
    }

  }


  newGame() {
    this.setState({
      player: 0,
      blackMoves: 0,
      redMoves: 0,
      winner: null,
      visible: false
    })

    const wholeBoard = ['1a', '1b', '1c', '1d', '1e', '1f', '1g', '2a', '2b', '2c', '2d', '2e', '2f', '2g', '3a', '3b', '3c', '3d', '3e', '3f', '3g', '4a', '4b', '4c', '4d', '4e', '4f', '4g', '5a', '5b', '5c', '5d', '5e', '5f', '5g', '6a', '6b', '6c', '6d', '6e', '6f', '6g']
    for (var spot in wholeBoard) {
      document.getElementById(wholeBoard[spot]).style.backgroundColor = '';
    }
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  checkTie(board) {
    debugger;
    var tie = true;
    if (this.state.winner !== null) {
      return;
    } else {
      for (var spot in board) {
        debugger;
        if (document.getElementById(board[spot]).style.backgroundColor === '') {
          return;
        }
      }this.setState({
        winner: 'tie'
      })
      this.show()
      return;

    }
  }

  checkDiag(cell) {
    //1a
    let letters = ['x', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'x'];
    let color = document.getElementById(cell).style.backgroundColor;
    if (color === '' || color === null) {
      return;
    }
    let row = cell.slice(0, 1); //1
    let col = cell.slice(1); //a
    let colStart = letters.indexOf(col);
    let count = 0;
    for (var i = row; i < row + 4; i++, colStart--) {
      let temp = i + letters[colStart];


      if (i === 7 || colStart === 0 || i === row + 3) {
        break;
      } else if (document.getElementById(temp).style.backgroundColor !== color) {
        break;
      } else if (document.getElementById(temp).style.backgroundColor === color) {
        count++
        if (count >= 4) {

          this.setState({
            winner: color
          })
          this.show();
          return;
        }
      }
    }
    count = 0;
    colStart = letters.indexOf(col);
    for (var i = row; i > row - 4; i++, colStart++) {
      var temp2 = i + letters[colStart];
      if (i === 7 || colStart === 8 || i === row + 3) {
        break;
      }else if (document.getElementById(temp2).style.backgroundColor !== color) {
        break;
      } else if (document.getElementById(temp2).style.backgroundColor === color) {
        count++
        if (count >= 4) {

          this.setState({
            winner: color
          })
          this.show();
          return;
        }
      }
    }
  }
 //********DONE********//
  checkVert(cell) {
    let color = document.getElementById(cell).style.backgroundColor;
    if (color === '' || color === null) {
      return;
    }
    let row = cell.slice(0, 1); //1
    let col = cell.slice(1); //a

    let count = 0;
    for (var i = row; i < row + 4; i++) {
      let temp = i + col;
      if (i === row + 4 || i === 7) {
        count = 0;
        break;
      } if (document.getElementById(temp).style.backgroundColor === color) {
        count++
        if (count >= 4) {

          this.setState({
            winner: color
          })
          this.show();
          return;
        }
      } else {
        return;
      }
    }

  };


  //********DONE********//
  checkHoriz(cell) {

    let letters = ['x', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'x'];
   // let start = cell.slice(0, 1);
    let color = document.getElementById(cell).style.backgroundColor;
    if (color === '' || color === null) {
      return;
    }
    let row = cell.slice(0, 1);
    let col = cell.slice(1);
    let idx = letters.indexOf(col);
    let count = 0;
    for (var i = idx; i > idx - 4; i--) {
      let temp = row + letters[i];

      if (i === 0 || i === 15 || row === 6 || row === 1) {
        break;
      } else if (document.getElementById(temp).style.backgroundColor === color) {

        count++
      }
    }
    if (count >= 4) {

      this.setState({
        winner: color
      })
      this.show();
      return;
    }
  }

  checkForWinner(cell) {
    const wholeBoard = ['1a', '1b', '1c', '1d', '1e', '1f', '1g', '2a', '2b', '2c', '2d', '2e', '2f', '2g', '3a', '3b', '3c', '3d', '3e', '3f', '3g', '4a', '4b', '4c', '4d', '4e', '4f', '4g', '5a', '5b', '5c', '5d', '5e', '5f', '5g', '6a', '6b', '6c', '6d', '6e', '6f', '6g']


    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'c', 'd', 'e', 'f', 'g'];
    let check = document.getElementById(cell).style.backgroundColor;
    for (var spot in wholeBoard) {

      this.checkHoriz(wholeBoard[spot])
      this.checkVert(wholeBoard[spot])
      this.checkDiag(wholeBoard[[spot]])
      this.checkTie(wholeBoard)
    }



  }

  placePiece (e) {
    if (e.target.id === 'table') {
      return;
    }
    var col = e.target.id.slice(1);
    for (var i = 6; i > 0; i--) {
      var cell = i + col;
      //console.log(cell)
      if (document.getElementById(cell).style.backgroundColor === '') {
        if (this.state.player % 2 === 0) {
          document.getElementById(cell).style.backgroundColor = 'Red';
          let oldRed = this.state.redMoves;
          let newRed = oldRed + 1;
          this.setState({
            redMoves: newRed
          })
        } else {
          document.getElementById(cell).style.backgroundColor = 'Black';
          let oldBlack = this.state.blackMoves;
          let newBlack = oldBlack + 1;
          this.setState({
            blackMoves: newBlack
          })
        }
        var current = this.state.player;
        var newPlayer = current + 1;
        this.checkForWinner(cell);
        this.setState({
          player: newPlayer
        })
        return;
      }
    }



  }

  render () {
    return(
      <div>
        <h2 id="title">Connect Four</h2>
        <ScoreBoard reset={this.newGame.bind(this)} stats={this.state} show={this.show.bind(this)} hide={this.hide.bind(this)}visible={this.state.visible}/>
        <GameBoard placePiece={this.placePiece.bind(this)}/>
      </div>
    )
  }
}

export default App;