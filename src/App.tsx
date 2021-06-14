import React from 'react';
import Form from './Form';
import List from './List';

interface Todos {
  content: string;
}
function App() {
  const todos: Todos[] = [
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
    </div>
  );
}

export default App;
