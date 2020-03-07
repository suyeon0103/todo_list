import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 공부하기',
      checked: true,
    },
    {
      id: 2,
      text: '도서관가서 책 빌리기',
      checked: true,
    },
    {
      id: 3,
      text: '방 정리하기',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onAdd = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current++;
    },
    [todos]
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id)); // 클릭되지 않은 나머지만 추출하여 새로운 배열 생성
    },
    [todos]
  );

  const onCheck = useCallback(
    id => {
      setTodos(
        todos.map(todo => 
          todo.id === id ? { ...todo, checked: !todo.checked } : todo)
      );
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoAdd onAdd={onAdd} />
      <TodoList todos={todos} onRemove={onRemove} onCheck={onCheck} />
    </TodoTemplate>
  );
};

export default App;