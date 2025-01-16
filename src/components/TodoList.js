import React from "react";

const TodosList = ({ todos, handleComplete }) => {
  return (
    <>
      <h2>Child Component</h2>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.text}
            {!item.completed && (
              <button onClick={() => handleComplete(item.id)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodosList;
