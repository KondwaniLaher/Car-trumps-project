import React, { Component } from "react";

class Game extends Component {
  state = {
    cards: null, //the players current card is the one at index 0 of each hand
    currPlayer: 0,
  };

  calculateRoundWinner = (category, cards) => {
    let roundWinner = 0;
    let draw = false;
    for (let i = 1; i < cards.length; i++) {
      const currCardRating = parseInt(cards[i][0].ratings[category], 10);
      const currOpponentRating = parseInt(
        cards[roundWinner][0].ratings[category],
        10
      );
      if (currCardRating > currOpponentRating) {
        roundWinner = i;
      } else if (currCardRating === currOpponentRating) {
        draw = true;
      }

      return draw ? false : roundWinner;
    }
  };

  render() {
    // check if the cards have been loaded
    // if (!this.state.cards) {
    //   return <p>One moment please...</p>;
    // }
    // check if game is over
    // const gameOver = this.checkIfGameOver(
    //   this.state.currPlayer,
    //   this.state.cards
    // );
    // if (gameOver) {
    //   return (
    //     <h1>
    //       Player {this.state.currPlayer + 1} is the winner! Refresh the page to
    //       start again.
    //     </h1>
    //   );
    // }
    // otherwise render game
    return (
      <div className="Game">
        <h1>Current Player: {this.state.currPlayer + 1}</h1>

        <div className="players-hand players-hand--first-player">
          <h2>Player 1:</h2>
          <p> Cards: </p>
        </div>

        <div className="players-hand players-hand--second-player">
          <h2>Player 2:</h2>
          <p> Cards: </p>
        </div>
      </div>
    );
  }
}

export default Game;
