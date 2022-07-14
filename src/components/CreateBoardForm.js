import React from "react";

class CreateBoardForm extends React.Component {
  state = {
    title: "",
    background: "#80ccff",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const board = {
      title: this.state.title,
      background: this.state.background,
      createAt: new Date(),
      user: "abc123",
    };
    if (board.title && board.background) {
      this.props.createNewBoard(board);
    }
  };
  render() {
    return (
      <div>
        <form className=" flex mt-1 mx-2" onSubmit={this.handleSubmit}>
          <input
            type={"text"}
            className="w-1/2 py-1 px-2 rounded-md"
            name="name"
            placeholder="Board name"
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <select
            name="background"
            onChange={(e) => this.setState({ background: e.target.value })}
            className="rounded-md mx-2 w-2/12 pl-1"
          >
            <option
              value="#80ccff"
              style={{ backgroundColor: "#80ccff" }}
              className=""
            >
              Blue
            </option>
            <option
              value="#80ffaa"
              style={{ backgroundColor: "#80ffaa" }}
              className=""
            >
              Green
            </option>
            <option
              value="#f94a1e"
              style={{ backgroundColor: "#f94a1e" }}
              className=""
            >
              Red
            </option>
            <option
              value="#ffb3ff"
              style={{ backgroundColor: "#ffb3ff" }}
              className=""
            >
              Pink
            </option>
            <option
              value="#bf00ff"
              style={{ backgroundColor: "#bf00ff" }}
              className=""
            >
              Purple
            </option>
            <option
              value="#ffad33"
              style={{ backgroundColor: "#ffad33" }}
              className=""
            >
              Orange
            </option>
          </select>
          <button
            type="submit"
            className="w-4/12 border-2 rounded-md bg-blue-400 "
          >
            Create new Board
          </button>
        </form>
      </div>
    );
  }
}

export default CreateBoardForm;
