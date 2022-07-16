import React from "react";
import BoardPreview from "../BoardPreview";
import PropTypes from "prop-types";
import CreateBoardForm from "../CreateBoardForm";

class Home extends React.Component {
  componentDidMount() {
    // this.setState({ currentLists: lists });
    this.props.getBoards();
  }
  newBoard = () => {
    const board = {
      title: "Trips to take this year",
      background: "#aa338d",
      createdAt: new Date(),
    };
    this.props.createNewBoard(board);
  };

  render() {
    console.log("Render: ", this.props.boards);
    return (
      <div className="flex flex-col w-full justify-around bg-slate-300">
        <CreateBoardForm createNewBoard={this.props.createNewBoard} />
        <div className=" flex justify-start gap-x-32 gap-y-5 flex-wrap">
          {this.props.boards.map((board) => (
            <BoardPreview key={board.id} board={board} />
          ))}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  getBoards: PropTypes.func.isRequired,
  boards: PropTypes.array.isRequired,
  createNewBoard: PropTypes.func.isRequired,
};
export default Home;
