import { useState, useRef } from "react";
import PanelCreateTodo from "../PanelCreateTodo/PanelCreateTodo";
import TodoItem from "../TodoItem/TodoItem";
import React from "react";
import "./index.css";

export default function TodoList(props) {
  const [items, setItem] = useState([]);
  const [search, setSearch] = useState("");
  const searchRef = useRef();

  const transformItems = (elements) => {
    return elements.map((el) => {
      return (
        <TodoItem
          key={el.id}
          deleteTodoItem={deleteTodoItem}
          todo={el}
        ></TodoItem>
      );
    });
  };

  const deleteTodoItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItem(newItems);
  };

  let rows = [];
  if (search.length > 0) {
    const filteredRows = items.filter((item) =>
      item.description.toLowerCase().includes(search.toLocaleLowerCase())
    );
    rows = transformItems(filteredRows);
  } else {
    rows = transformItems(items);
  }

  return (
    <main className="container">
      <div className="panel">
        <h4 className="title">Todo-app</h4>
        <PanelCreateTodo addItem={setItem}></PanelCreateTodo>
        <form className="search">
          <input
            className="search-bar"
            ref={searchRef}
            type="text"
            name="search"
            placeholder="Search"
          />
          <button
            className="btn-search"
            onClick={(e) => {
              e.preventDefault();
              const searchValue = searchRef.current.value;
              setSearch(searchValue);
            }}
          >
            Search
          </button>
        </form>
        {rows}
      </div>
    </main>
  );
}
