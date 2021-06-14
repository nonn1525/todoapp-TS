import React, { useState, FC } from 'react'
import {Todos} from './Interface';

type ItemProps = {
    content: string;
};
const Item: FC<ItemProps> = ({content}) => {
    const [isDone, setIsDone] = useState<boolean>(false);
    return (
        <li>
            <input type='checkbox' onChange={() => {
                setIsDone(!isDone);
            }}/>
            <span style={
                 {textDecoration: isDone ? 'line-through' : 'none'}
            }>{content}</span>
        </li>
    )
}

export default Item