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
      <div className="flex flex-col mt-5 border-4 border-red-300">
        <div className="flex flex-wrap px-5 ">
          {this.state.currentLists.map((list) => (
            <List key={list.id} list={list} />
          ))}
        </div>
        <button
          onClick={this.createNewList}
          className="border-2 border-blue-300 bg-white rounded-xl my-2 ml-2 py-1 shadow-md h-10 w-32 content-center"
        >
          New list
        </button>
      </div>
    );
  }
}

export default Board;
