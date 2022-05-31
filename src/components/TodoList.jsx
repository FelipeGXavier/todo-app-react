import { useState, useRef } from "react";
import PanelCreateTodo from "./PanelCreateTodo";
import TodoItem from "./TodoItem";
import React from "react";

export default function TodoList(props) {
  const [items, setItem] = useState([]);
  const [search, setSearch] = useState("");
  const searchRef = useRef();

  const transformItems = (elements) => {
    return elements.map((el) => {
      return <TodoItem todo={el}></TodoItem>;
    });
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
    <main>
      <div>
        <PanelCreateTodo addItem={setItem}></PanelCreateTodo>
      </div>
      <div>
        <form>
          <input
            ref={searchRef}
            type="text"
            name="search"
            placeholder="Search"
          />
          <button
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
