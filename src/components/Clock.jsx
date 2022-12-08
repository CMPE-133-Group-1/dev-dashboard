import React, {useEffect, useState} from 'react'


function Clock(){
    // storing the strings for the time and date-info
    const [time, setTime] = useState("")
    const [cDate, setCDate] = useState("")

    // date methods return int values that we can use to index these arrays to provide the day/month in strings
    let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']
    
    // this will run code every second and refresh the info for the time and date 
    useEffect(() => {
        const interval = setInterval(() => {
            // create a new date object with all the hr/min/day/mnth/year data
            let now = new Date()
            // minutes in the time must have a 0 in them if less than 10, this will achieve that
            let timerMin =  now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
            // Store the entire string of info under one easy to use variable name
            let currentTime = now.getHours() +":"+  timerMin
            let currentDateInfo = days[now.getDay()]+" "+months[now.getMonth()]+" "+ now.getDate()+", "+ now.getFullYear()
            // Set the new values for time and cDate
            setTime(currentTime);
            setCDate(currentDateInfo);
            // Run this code every second
          }, 1000);
          return () => clearInterval(interval);
          // Below [time, cDate] means if any change in these values is detected the view will re-render.
    }, [time, cDate])
    
    
    
    return(
        <div className='Clock '>
            <h1 className='text-[124px] font-black h-[140px]'> {time} </h1>
            <h1 className='text-[24px] p-0 mt-0'> {cDate} </h1>
        </div>
    )
}


export default Clock