import React, { FC } from 'react';
import Form from './Form';
import List from './List';
import {Todos} from './Interface'

const App: FC = () => {
  const todos: Todos [] = [
    {
      content: '課題をする'
    },
    {
      content: 'モンハンをする'
    },
    {
      content: '洗濯をする'
    },
  ]
  return (
    <div className="App">
      <h1>hello</h1>
      <Form />
      <List todos={todos} />

      {/* Type '{ todos: Todos[]; }' is not assignable to type 'IntrinsicAttributes & { children?: ReactNode; }'.
  Property 'todos' does not exist on type 'IntrinsicAttributes & { children?: ReactNode; }' */}

    </div>
  );
}

export default App;
