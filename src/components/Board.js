import React from "react";
import List from "./List";
import { lists } from "../components/sampleData";
import { Link, useLocation, useParams } from "react-router-dom";
import { listsRef } from "../firebase";
import { addDoc } from "firebase/firestore";
class Board extends React.Component {
  state = {
    currentLists: [],
  };
  componentDidMount() {
    this.setState({ currentLists: lists });
  }
  addBoardInput = React.createRef();

  createNewList = async (e) => {
    e.preventDefault();
    let list = {
      title: this.addBoardInput.current.value,
      board: this.props.state.board.id,
      createdAt: new Date(),
      cards: [],
    };
    if (list.title) {
      try {
        const newList = await addDoc(listsRef, { list });
        list = {
          id: newList.id,
          ...list,
        };
        this.setState({ currentLists: [...this.state.currentLists, list] });
        this.addBoardInput.current.value = "";
      } catch (error) {
        console.error("Error creating new list ", error);
      }
    } else console.error("List title is empty");
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
