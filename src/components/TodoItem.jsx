export default function TodoItem(props) {
  return (
    <div>
      <h4>ID: {props.todo.id}</h4>
      <p>
        Urgency: <span>{props.todo.level}</span>
      </p>
      <p>{props.todo.description}</p>
    </div>
  );
}
