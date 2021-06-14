import React, { FC } from 'react'
import Item from './Item'
import {Todos} from './Interface'

type ListProps = {
  todos: Todos[],
}
const List: FC<ListProps> = ({todos}) => {

    return (
      <ul>
        {
          todos.map((todo, index) => {
            return (
                <Item content={todo.content} />
            )
          })
        }
      </ul>
    )
}

export default List