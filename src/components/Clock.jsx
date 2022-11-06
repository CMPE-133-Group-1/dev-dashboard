import React, {useEffect, useState} from 'react'


function Clock(){
    // storing the strings for the time and date-info
    const [time, setTime] = useState("")
    const [cDate, setCDate] = useState("")

    // date methods return int values that we can use to index these arrays to provide the day/month in strings
    let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']
    // we store the entire string of info under one easy to use variable name
    
    // this will run code every second and refresh the info for the time and date 
    useEffect(() => {
        const interval = setInterval(() => {
            let now = new Date()
            let currentTime = now.getHours() +":"+now.getMinutes()
            let currentDateInfo = days[now.getDay()]+" "+months[now.getMonth()]+" "+ now.getDate()+", "+ now.getFullYear()

            console.log('This will run every 1 seconds!');
            setTime(currentTime);
            setCDate(currentDateInfo);
            console.log(time)
          }, 1000);
          return () => clearInterval(interval);
    }, [time, cDate])
    

    return(
        <div className='Clock '>
            <h1 className='text-[124px] font-black h-[140px]'> {time} </h1>
            <h1 className='text-[24px] p-0 mt-0'> {cDate} </h1>
        </div>
    )
}


export default Clock