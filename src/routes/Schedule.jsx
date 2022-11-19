import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';

function Schedule({ children }) {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '일정을 작성해보세요!',
      checked : true,
    },
    
  ])

  const nextId = useRef(2);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked : false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  )

  const onRemove = useCallback(
    id=> {
      setTodos(todos.filter(todo => todo.id !== id)); // id 다른 항목만 살림
    },
    [todos]
  )

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo => 
          todo.id === id ? { ...todo, checked: !todo.checked} : todo,
          ),
      );
    },
    [todos],
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
}

export default Schedule;
