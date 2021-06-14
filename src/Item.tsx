import React, { useState } from 'react'

interface ItemProps {content: string};
const Item = ({content}: ItemProps) => {
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