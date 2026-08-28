import type { AddClockFormProps } from '../types';
import { useState } from 'react';
import './AddClockForm.css';

function AddClockForm(props: AddClockFormProps) {
    const [name, setName] = useState<string>('');
    const [offset, setOffset] = useState<number>(0);
    return (
        <div className='form-container'>
            <div className='form-name'>
            <label>Название</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='form-timezone'>
            <label>Временная зона</label>
            <input type='number' value={offset} onChange={(e) => setOffset(Number(e.target.value))} />
            </div>
            <button onClick={() => {
            props.onAdd({name, offset})
            setName('')
            setOffset(0)}}
            >Добавить</button>
        </div>
    )
}

export default AddClockForm;
