import React, { useState } from "react";
import "./../styles/App.css";
import TodosList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn Javascript.", completed: false },
    { id: 2, text: "Learn React.", completed: false },
    { id: 3, text: "Learn Node.", completed: false },
  ]);
  const handleComplete = (id) => {
    setTodos((prev) => {
      return prev.map((item) =>
        id == item.id ? { ...item, completed: true } : item
      );
    });
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <TodosList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
