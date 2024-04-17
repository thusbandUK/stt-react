import React from 'react';
import './makeCalendarTest.css';

const Calendar = () => {

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const start = 16;
    const end = 21;
    const hours = (start, end) => {
        let array = [];
        for (let x = start; x <= end; x++){
            const string = x.toString();
            array.push(`${string}:00`);
            array.push(`${string}:30`);
        }
        return array;
    }
    const hoursToMap = hours(start, end);

    const redTest = document.getElementById("Mon16:00");

    return (
        <div>
            <p>I will be a calendar</p>
            <div class="container text-center position-relative">
              <div class="test-lesson"></div>
              <div class="row row-cols-8">
                <div class="col">Time</div>
                {days.map((day) => (
                    <div class="col">{day}</div>
                ))}
              </div>
              {hoursToMap.map((hour) => (
                <div class="row row-cols-8">
                    <div class="col">{hour}
                    </div>
                    {days.map((day) => (
                        <div class="col" id={`${day}${hour}`}>
                        </div>
                    ))}
                </div>
              ))}
              
            </div>
            
        </div>
    )
}

export default Calendar;

/*
<div class="row row-cols-8">
                <div class="col">Time</div>
                <div class="col">Monday</div>
                <div class="col">Tuesday</div>
                <div class="col">Wednesday</div>
                <div class="col">Thursday</div>
                <div class="col">Friday</div>
                <div class="col">Saturday</div>
                <div class="col">Sunday</div>
              </div>
*/