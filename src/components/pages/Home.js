import React from "react";
import BoardPreview from "../BoardPreview";

class Home extends React.Component {
  newBoard = () => {
    const board = {
      title: "Trips to take this year",
      background: "#aa338d",
      createdAt: new Date(),
    };
    this.props.createNewBoard(board);
  };
  render() {
    return (
      <div>
        <button onClick={this.newBoard}>New Board</button>
        {this.props.boards.map((board, index) => (
          <BoardPreview key={index} board={board} />
        ))}
      </div>
    );
  }
}

export default Home;
