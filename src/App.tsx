import { useState } from 'react';
import type { ClockData } from './types';
import  Clock  from './components/Clock'
import type { NewClockData } from './types'
import AddClockForm from './components/AddClockForm';
import './App.css'

function App() {
    const [clocks, setClocks] = useState<ClockData[]>([
        {id: '1', name: 'Moscow', offset: 3},
        {id: '2', name: 'New York', offset: -4},
    ]);
    const handleRemove = ((id: string) => {
        setClocks(clocks.filter(clock => clock.id !== id));
    })
    const handleAdd = (data: NewClockData) => {
    setClocks([...clocks, {id: Date.now().toString(), ...data }])
    }
    return (
        <div>
            <h1>Мировые часы</h1>
            <AddClockForm onAdd={handleAdd} />
            {clocks.map((clock) => (
                <Clock id={clock.id} key={clock.id} name={clock.name} offset={clock.offset} onRemove={handleRemove} />
            ))}
        </div>
    )
}

export default App;