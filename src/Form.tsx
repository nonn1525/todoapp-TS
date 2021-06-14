import React, { useState, FC } from 'react'
// import { onSubmitProps } from './Interface'

// type onSubmitProps = {
//     onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
// }
const Form: FC = () => {
    const [value, setValue] = useState<string | number>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(value);
    }
    return (
        <form onSubmit = {handleSubmit}>
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