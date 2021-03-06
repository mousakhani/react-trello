import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import { cardsRef } from "../firebase";
import { addDoc } from "firebase/firestore";
class List extends React.Component {
  state = {
    currentCards: [],
  };

  nameInput = React.createRef();

  createNewCard = async (e) => {
    e.preventDefault();
    try {
      let newCard = {
        text: this.nameInput.current.value,
        listId: this.props.list.id,
        labels: [],
        createdAt: new Date(),
      };

      if (newCard.text && newCard.listId) {
        const card = await addDoc(cardsRef, {
          newCard,
        });
        newCard = {
          id: card.id,
          ...newCard,
        };
        this.setState({
          currentCards: [...this.state.currentCards, newCard],
        });
        this.nameInput.current.value = "";
      }
    } catch (error) {
      console.error("Error creating new card ", error);
    }
  };

  render() {
    return (
      <div className="flex flex-col bg-slate-50 mr-5 px-3 py-2 my-1 w-44 shadow-md rounded-xl">
        <div className="">
          <p>{this.props.list.title}</p>
        </div>
        {this.state.currentCards.map((card) => (
          <div>
            <Card key={card.id} data={card} />
          </div>
        ))}
        <form onSubmit={this.createNewCard}>
          <input
            type={"text"}
            name="name"
            ref={this.nameInput}
            placeholder=" + New Card"
            className="w-36"
          />
        </form>
      </div>
    );
  }
}

List.propTypes = {
  list: PropTypes.object.isRequired,
};

export default List;
