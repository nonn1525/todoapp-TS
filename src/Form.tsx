import { useState, FC, FormEvent } from 'react'
import {Todos} from './Interface'

type FormProps = {
    todos: Todos[]
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>
}

const Form: FC<FormProps> = ({todos, setTodos}) => {
    const [value, setValue] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void=> {
        e.preventDefault();
        setTodos([...todos,{content: value}]);
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