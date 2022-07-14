import React, { useState } from "react";
import Board from "./components/Board";
import data from "./components/sampleData";
import Home from "./components/pages/Home";

class App extends React.Component {
  state = {
    boards: [],
  };
  componentDidMount() {
    this.setState({ boards: data });
  }

  createNewBoard = (board) => {
    this.setState({ boards: [...this.state.boards, board] });
  };
  render() {
    return (
      <div>
        <Home boards={this.state.boards} createNewBoard={this.createNewBoard} />
      </div>
    );
  }
}
export default App;
