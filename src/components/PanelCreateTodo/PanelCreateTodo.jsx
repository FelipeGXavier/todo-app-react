import "./index.css";

import { useState } from "react";

export default function PanelCreateTodo(props) {
  const defaultState = {
    id: 0,
    level: "low",
    description: "",
  };
  const [state, setState] = useState(defaultState);

  const invalidInput = () => {
    const validLevels = ["low", "medium", "high"];
    return (
      state.id <= 0 ||
      !validLevels.includes(state.level) ||
      state.description.length <= 3
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (invalidInput()) {
      alert("Campos Inválidos");
      return;
    }
    props.addItem((prevItems) => {
      return [...prevItems, state];
    });
    setState({ ...defaultState });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <form className="todo-panel">
      <div className="form-field">
        <label htmlFor="id">ID:</label>
        <input
          value={state.id === 0 ? "" : state.id}
          onChange={handleChange}
          type="text"
          name="id"
        />
      </div>
      <div className="form-field">
        <label htmlFor="level">Level:</label>
        <select onChange={handleChange} value={state.level} name="level">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="description">Description:</label>
        <input
          value={state.description}
          onChange={handleChange}
          type="text"
          name="description"
        />
      </div>
      <button className="btn" onClick={handleSubmit}>
        Create
      </button>
    </form>
  );
}
