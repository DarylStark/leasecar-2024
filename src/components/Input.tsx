import { ChangeEventHandler } from 'react';
import './Input.scss';

function Input({ placeholder = '', onChange }: {
    placeholder: string,
    onChange: ChangeEventHandler<HTMLInputElement>
}) {
    return (
        <input onChange={onChange} type='text' placeholder={placeholder} />
    )
}

export default Input;