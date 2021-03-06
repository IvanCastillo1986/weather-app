import React from 'react'
import capitalize from '../Helper/capitalize'
import translateIconNumber from '../Helper/translateIcon'

// console.log(translateIconNumber)

export default function WeatherCard({ day }) {
    
    let today = new Date(day.Date)
    const options = {weekday: 'short'}
    today = new Intl.DateTimeFormat('en-US', options).format(today)
    
        
        return (
            <div className='WeatherCard'>
                <p className='Day'>{today}</p>
                <div id={translateIconNumber(day.Day.Icon)} role='img' aria-label='weather icon'></div>
                <p>{capitalize(day.Day.IconPhrase)}</p>
                <div className='LoHiDiv'>
                    <div><span>Lo</span><span>{day.Temperature.Maximum.Value}</span></div> 
                    <div><span>Hi</span><span>{day.Temperature.Minimum.Value}</span></div> 
                </div>
        </div>
    )
}
