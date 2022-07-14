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
  addBoardInput = React.createRef();

  createNewList = (e) => {
    e.preventDefault();
    const list = {
      id: Math.random(),
      title: this.addBoardInput.current.value,
      board: 300,
      cards: [],
      craetedAt: new Date(),
      cards: [
        {
          id: 1,
          text: "Card 1",
        },
        {
          id: 2,
          text: "Card 2",
        },
      ],
    };
    if (list.title) { 
      this.setState({ currentLists: [...this.state.currentLists, list] });
      this.addBoardInput.current.value = "";
    }
  };
  render() {
    return (
      <div className="flex flex-col mt-5 border-4 border-red-300">
        <div className="flex flex-wrap px-5 ">
          {this.state.currentLists.map((list) => (
            <List key={list.id} list={list} />
          ))}
        </div>
        <form onSubmit={this.createNewList}>
          <input
            type={"text"}
            ref={this.addBoardInput}
            name="name"
            placeholder=" + New List"
          />
        </form>
      </div>
    );
  }
}

export default Board;
