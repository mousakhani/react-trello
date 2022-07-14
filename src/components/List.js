import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <div className="list-header">
          <p>{this.props.list.title}</p>
        </div>
        {this.props.list.cards.map((card) => (
          <div>
            <Card key={card.id} data={card} />
          </div>
        ))}
      </div>
    );
  }
}

List.propTypes = {
  list: PropTypes.object.isRequired,
};

export default List;
