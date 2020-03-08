import React from "react";
import TodoObject from "./TodoObject";
import "./TodoList.scss";

const TodoList = ({ todos, onRemove, onCheck, onImportant }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoObject
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onCheck={onCheck}
          onImportant={onImportant}
        />
      ))}
    </div>
  );
};

export default TodoList;
