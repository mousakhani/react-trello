import React from "react";
import BoardPreview from "../BoardPreview";
import PropTypes from "prop-types";

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
        {this.props.boards.map((board) => (
          <BoardPreview key={board.id} board={board} />
        ))}
      </div>
    );
  }
}

Home.propTypes = {
  boards: PropTypes.array.isRequired,
  createNewBoard: PropTypes.func.isRequired,
};
export default Home;
