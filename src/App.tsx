import React, { FC, useState } from 'react';
import Form from './Form';
import List from './List';
import {Todos} from './Interface'

const App: FC = () => {
  const [todos, setTodos] = useState<Todos[]>([])
  return (
    <div className="App">
      <h1>hello</h1>
      <Form 
        todos={todos} 
        setTodos={setTodos}
      />
      <List todos={todos} />

      {/* Type '{ todos: Todos[]; }' is not assignable to type 'IntrinsicAttributes & { children?: ReactNode; }'.
  Property 'todos' does not exist on type 'IntrinsicAttributes & { children?: ReactNode; }' */}

    </div>
  );
}

export default App;
