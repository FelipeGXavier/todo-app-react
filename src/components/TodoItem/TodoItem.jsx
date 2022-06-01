import "./index.css";

export default function TodoItem(props) {
  return (
    <div className="todo-item">
      <span
        onClick={() => props.deleteTodoItem(props.todo.id)}
        className="delete-btn"
      >
        x
      </span>
      <h4>ID: {props.todo.id}</h4>
      <p className="paragraph">
        Urgency: <span className={props.todo.level}>{props.todo.level}</span>
      </p>
      <p className="paragraph description">{props.todo.description}</p>
    </div>
  );
}
