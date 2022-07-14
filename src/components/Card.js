import React from "react";
import PropTypes from "prop-types";

class Card extends React.Component {
  render() {
    return (
      <div className="border-2 border-green-300">
        <div className="">
          <p>{this.props.data.text}</p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
