import React, { FC } from 'react'
import Item from './Item'
import {Todos} from './Interface'

type ListProps = {
  todos: Todos[],
  deleteTodo: (id: string) => void;
}
const List: FC<ListProps> = ({todos, deleteTodo}) => {

    return (
      <ul>
        {
          todos.map((todo, index) => {
            return (
                <Item content={todo.content} id={todo.id} key={todo.id} deleteTodo={deleteTodo}/>
            )
          })
        }
      </ul>
    )
}

export default List