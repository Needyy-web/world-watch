import { useState } from 'react';
import type { ClockData } from './types';
import  Clock  from './components/Clock'
import type { NewClockData } from './types'
import AddClockForm from './components/AddClockForm';
import './App.css'
import { MOCK_CLOCKS } from './mockClocks';


function App() {
    const [clocks, setClocks] = useState<ClockData[]>(MOCK_CLOCKS);
    const handleRemove = ((id: string) => {
        setClocks(clocks.filter(clock => clock.id !== id));
    })
    const handleAdd = (data: NewClockData) => {
    setClocks([...clocks, {id: Date.now().toString(), ...data }])
    }
    return (
        <div className='clocks-list'>
            <h1>Мировые часы</h1>
            <AddClockForm onAdd={handleAdd} />
            {clocks.map((clock) => (
                <Clock id={clock.id} key={clock.id} name={clock.name} offset={clock.offset} onRemove={handleRemove} />
            ))}
        </div>
    )
}

export default App;