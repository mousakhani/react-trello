import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

class BoardPreview extends React.Component {
  constructor(props) {
    super(props);
    this.gotoBoard = this.gotoBoard.bind(this);
  }
  gotoBoard() {
    this.props.navigate(`/board/${this.props.board.id}`, {
      state: {
        background: this.props.board.background,
      },
    });
  }
  render() {
    return (
      <div>
        <button
          onClick={this.gotoBoard}
          style={{ backgroundColor: this.props.board.background }}
        >
          {this.props.board.title}
        </button>
      </div>
    );
  }
}

BoardPreview.propTypes = {
  board: PropTypes.object.isRequired,
};

export default function WithParams(props) {
  return <BoardPreview {...props} navigate={useNavigate()} />;
}
