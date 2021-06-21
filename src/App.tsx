import React, { FC, useState } from 'react';
import Form from './Form';
import List from './List';
import {Todos} from './Interface'

type AppProps = {
  // todos: Todos[]
  // setTodos: React.Dispatch<React.SetStateAction<Todos[]>>
}

const App: FC<AppProps> = () => {
  const [todos, setTodos] = useState<Todos[]>([])
  const nanoid = require("nanoid");
  const addTodo = (content: string) => {
    setTodos([
      ...todos,
      {
        content: content,
        id: nanoid,
      }
    ])
  }
  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  return (
    <div className="App">
      <h1>hello</h1>
      <Form 
        addTodo={addTodo}
      />
      <List todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;