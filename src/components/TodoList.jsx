import PanelCreateTodo from "./PanelCreateTodo";
import TodoItem from "./TodoItem";
import TodoSearchbar from "./TodoSearchbar";

export default function TodoList(props) {
  const items = [null, null, null];
  const rows = items.map((el) => {
    return <TodoItem></TodoItem>;
  });
  return (
    <main>
      <div>
        <PanelCreateTodo></PanelCreateTodo>
      </div>
      <div>
        <TodoSearchbar></TodoSearchbar>
        {rows}
      </div>
    </main>
  );
}
