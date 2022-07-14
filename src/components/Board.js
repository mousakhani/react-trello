import React from "react";
import List from "./List";
import { lists } from "../components/sampleData";

class Board extends React.Component {
  state = {
    currentLists: [],
  };
  componentDidMount() {
    this.setState({ currentLists: lists });
  }

  createNewList = () => {
    const list = {
      id: Math.random(),
      title: "My amazing list",
      board: 300,
      cards: [],
      craetedAt: new Date(),
    };
    this.setState({ currentLists: [...this.state.currentLists, list] });
  };
  render() {
    return (
      <div className="list-wrapper">
        <button onClick={this.createNewList}>New list</button>
        {this.state.currentLists.map((list) => (
          <List key={list.id} list={list} />
        ))}
      </div>
    );
  }
}

export default Board;
