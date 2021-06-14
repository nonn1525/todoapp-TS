import React from 'react'
import Item from './Item'

const List = ({todos}: string) => {
    return (
        <ul>
          <Item content = {todos} />
        </ul>
    )
}

export default List