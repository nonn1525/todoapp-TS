import React, { useState, FC } from 'react'

type ItemProps = {
    content: string;
    id: string;
    key: string;
    deleteTodo: (id: string) => void;
};

const Item: FC<ItemProps> = ({content, id, deleteTodo}) => {
    const [isDone, setIsDone] = useState<boolean>(false);
    const handleDelete = () => {
        deleteTodo(id)
    }
    return (
        <li>
            <input type='checkbox' onChange={() => {
                setIsDone(!isDone);
            }}/>
            <span style={
                 {textDecoration: isDone ? 'line-through' : 'none'}
            }>{content}</span>
            <button onClick={handleDelete}>削除</button>
        </li>
    )
}

export default Item