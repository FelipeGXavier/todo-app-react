import { useState } from "react";

export default function PanelCreateTodo(props) {
  const defaultState = {
    id: 0,
    level: "low",
    description: "",
  };
  const [state, setState] = useState(defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <form method="POST">
      <label htmlFor="id">ID:</label>
      <input
        value={state.id === 0 ? "" : state.id}
        onChange={handleChange}
        type="text"
        name="id"
      />
      <label htmlFor="level">Level:</label>
      <select onChange={handleChange} value={state.level} name="level">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <label htmlFor="description">Description:</label>
      <input
        value={state.description}
        onChange={handleChange}
        type="text"
        name="description"
      />
      <button onClick={handleSubmit}>Create</button>
    </form>
  );
}
