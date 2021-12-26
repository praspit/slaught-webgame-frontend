import React from 'react'
import { useState } from 'react'
import RoundSlider from './RoundSlider'
import TimeSlider from './TimeSlider'
import Button from './Button'

const Lobby = () => {
    const [round,setRound] = useState(1)
    const [time,setTime] = useState(15)

    const onRoundChange = (event)=>{
        setRound(event.target.valueAsNumber);
    }

    const onTimeChange = (event)=>{
        setTime(event.target.valueAsNumber);
    }

    const onClickStartGame = ()=>{
        console.log(`start game for ${round} rounds and time per turn is ${time} seconds`)
    }
    
    return (
        <div className='lobby'>
            <div className='list-player'>
                <h2>Room : 3114</h2>
                <ul>
                    <li>Sam</li>
                    <li>Brad</li>
                    <li>Susy</li>
                    <li>Aligo</li>
                </ul>
            </div>
            <div className='game-option'>
                <RoundSlider value={round} onTypeChange={onRoundChange}></RoundSlider>
                <TimeSlider value={time} onTypeChange={onTimeChange}></TimeSlider>
                <Button type='start' text='Start the game' onClick={onClickStartGame}></Button>
            </div>
        </div>
    )
}

export default Lobby
