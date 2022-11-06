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
            // create a new date object with all the hr/min/day/mnth/year data we are going to need
            let now = new Date()
            // we store the entire string of info under one easy to use variable name
            let currentTime = now.getHours() +":"+now.getMinutes()
            let currentDateInfo = days[now.getDay()]+" "+months[now.getMonth()]+" "+ now.getDate()+", "+ now.getFullYear()
            // set the new values every 1 sec
            setTime(currentTime);
            setCDate(currentDateInfo);
            // run this code every second
          }, 1000);
          return () => clearInterval(interval);
    }, [time, cDate])
    
    // need to implement this to ensure time is displayed with 0 before single values
    //const timerMin = time < 10 ? `0${min}` : min;

    return(
        <div className='Clock '>
            <h1 className='text-[124px] font-black h-[140px]'> {time} </h1>
            <h1 className='text-[24px] p-0 mt-0'> {cDate} </h1>
        </div>
    )
}


export default Clock