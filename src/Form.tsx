import React, { useState, FC } from 'react'
import {Todos} from './Interface'

type FormProps = {
    todos: Todos[]
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>
}

const Form: FC<FormProps> = ({todos, setTodos}) => {
    const [value, setValue] = useState<string>('');
    // React.FormEvent<HTMLFormElement>
    const handleSubmit = (e: any): void => {
        e.preventDefault();
        setTodos({
            ...todos,
            {
                content: value,
                // 1 個の引数が必要ですが、2 個指定されました。
            }
        });
        console.log(value)
    }
    return (
        <form onSubmit = {(handleSubmit())}>
            <input type='text' 
                onChange={e => {
                    setValue(e.target.value);
                }}
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form