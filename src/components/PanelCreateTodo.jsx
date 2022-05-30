export default function PanelCreateTodo(props) {
  return (
    <form method="POST">
      <label htmlFor="id">ID:</label>
      <input type="text" name="id" />
      <label htmlFor="level">Level:</label>
      <select name="level">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <label htmlFor="description">Description:</label>
      <input type="text" name="description" />
      <button>Create</button>
    </form>
  );
}
