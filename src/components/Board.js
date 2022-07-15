import React from "react";
import List from "./List";
import { lists } from "../components/sampleData";
import { Link, useLocation, useParams } from "react-router-dom";

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
      craetedAt: new Date(),
      cards: [],
    };
    if (list.title) {
      this.setState({ currentLists: [...this.state.currentLists, list] });
      this.addBoardInput.current.value = "";
    }
  };
  render() {
    return (
      <div
        className="flex flex-col mt-5 border-4 border-red-300"
        style={{
          backgroundColor: this.props.state
            ? this.props.state.board.background
            : null,
        }}
      >
        <div className="flex justify-between mx-10">
          <h2 className="text-white">
            {this.props.state ? this.props.state.board.title : null}
          </h2>
          <button className="border-2 px-4 py-2 rounded-lg hover:text-white">
            Delete board
          </button>
        </div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
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

/*We use this solution.  because we use useParams() hook in class component */
export default function WithParams(props) {
  /**
useLocation: send state by props
useParams: send params. for example boardId by props
*/
  return <Board {...props} params={useParams()} {...useLocation()} />;
}
