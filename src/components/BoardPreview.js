import React from "react";
import PropTypes from "prop-types";

class BoardPreview extends React.Component {
  render() {
    return <div>{this.props.board.title}</div>;
  }
}

BoardPreview.propTypes = {
  board: PropTypes.object.isRequired,
};

export default BoardPreview;
