import type { ClockProps } from '../types'
import { useState } from 'react';
import { useEffect } from 'react';
import './Clock.css'

function Clock(props: ClockProps) {
    const [clock, setClock] = useState<Date>(
        new Date()
    )

    useEffect(() => {
        const timerId = setInterval(() => {
            setClock(new Date())
        }, 1000)
        return () => {
            clearInterval(timerId)
        }
    }, [])

    const utc = clock.getTime() + 60 * 60 * 1000 * props.offset + (clock.getTimezoneOffset() * 60 * 1000);
    const cityTime = new Date(utc);

    const hh = String(cityTime.getHours()).padStart(2, '0');
    const mm = String(cityTime.getMinutes()).padStart(2, '0');
    const ss = String(cityTime.getSeconds()).padStart(2, '0');

    return (
        <div className='clock-card'>
            <p className='clock-name'>{props.name}</p>
            <p className='clock-time'>{hh}:{mm}:{ss}</p>
            <button className='clock-remove' onClick={() => props.onRemove(props.id)}>x</button>
        </div>
    )
}

export default Clock;