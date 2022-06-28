import React from 'react';
import CountdownTimer from './CountdownTimer';

import './Timer.css';

const Timer = (props) => {
    const duration = props.duration; // "30-06-2022";

    const Total_days = Math.ceil(new Date(duration).getTime()/(1000*3600*24))* 24 * 60 * 60 * 1000;

    const dateTimeAfterTotalDays = Total_days;

    return (
        <div>
            <CountdownTimer targetDate={dateTimeAfterTotalDays} />
        </div>
    );
}
export default Timer;