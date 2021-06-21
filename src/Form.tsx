import { useState, FC, FormEvent } from 'react'
import {Todos} from './Interface'

type FormProps = {
   addTodo: (content: string) => void;
}

const Form: FC<FormProps> = ({addTodo}) => {
    const [value, setValue] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void=> {
        e.preventDefault();
        addTodo(value);
    }
    return (
        <form onSubmit = {(e)=>handleSubmit(e)}>
            <input type='text' 
                onChange={e => {
                    setValue(e.target.value);
                }}
            />
            <button type='submit'>Submit</button>
            {/* <input type='submit'/> */}
        </form>
    )
}

export default Form