import React from "react";
import Board from "./components/Board";
import { boards } from "./components/sampleData";
import Home from "./components/pages/Home";

class App extends React.Component {
  state = {
    boards: [],
  };
  componentDidMount() {
    this.setState({ boards: boards });
  }

  createNewBoard = (board) => {
    this.setState({ boards: [...this.state.boards, board] });
  };
  render() {
    return (
      <div className="flex flex-col  h-screen bg-slate-200">
        <Home boards={this.state.boards} createNewBoard={this.createNewBoard} />
        <Board />
      </div>
    );
  }
}
export default App;
