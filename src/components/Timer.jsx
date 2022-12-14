import React, {useEffect, useState} from 'react'
import { PlayIcon, ReloadIcon, StopIcon } from '@radix-ui/react-icons'

function Timer(){
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  //const [displayMsg, setDisplayMsg] = useState(false)
  const [pause, setPause] = useState(1)

    useEffect(()=> {
        if(pause===0){
        let interval = setInterval( () => {
            clearInterval(interval)
              if(sec === 0){
                if(min !== 0){ // dealing will loop from 59:0 to 59 agian
                  setSec(59)
                  setMin(min-1)
                }else{ // alert once interval has reached end
                  alert("Time for a break!")
                }
              } else { // decrement if not at 0 
                setSec(sec-1)
              }
              // repeat every second
        },1000)
      }
    }, [sec,pause])
  
    // formatting to ensure minute or hour have a zero before the min if less thatn 10
  const timerMin = min < 10 ? `0${min}` : min;
  const timerSec = sec < 10 ? `0${sec}` : sec;

  return(
    <div className="bg-Timer border-2 border-blue-300 rounded-md pt-4 pb-4 flex flex-col gap-6">

      <h1 className="text-XXL"> {timerMin+':'+timerSec} </h1>

      <div className="flex flex-row justify-around">
        <button className="shadow-lg bg-TimerButton hover:bg-blue-600 rounded-md p-1 pl-3 pr-3"
        onClick={() => { setMin(15);}}> 15 min </button>

        <button className="shadow-lg bg-TimerButton hover:bg-blue-600 rounded-md p-1 pl-3 pr-3"
        onClick={() => { setMin(30);}}> 30 min </button>

        <button className="shadow-lg bg-TimerButton hover:bg-blue-600 rounded-md p-1 pl-3 pr-3"
        onClick={() => { setMin(60);}}> 60 min </button>

        <div className=' shadow-lg bg-TimerButton hover:bg-blue-600 rounded-md p-1 pl-3 pr-3'> 
          <input 
          type="number" 
          id="min" name="min" 
          min="1"  
          placeholder='Mins'
          className=' bg-TimerButton pl-2'
          onChange={(event) => {setMin(event.target.value)}}
          />
        </div>
      </div>

      <div className="flex flex-row justify-around w-1/2 ml-auto mr-auto ">
        <button
            className='shadow-lg bg-green-500 hover:bg-green-600 rounded-md p-1 pl-3 pr-3'
            onClick={() => { 
              setPause(0)
              console.log("Start"+pause);
              }}>
            <PlayIcon/>  
        </button>
        <button
            className='shadow-lg bg-red-500 hover:bg-red-600 rounded-md p-1 pl-3 pr-3'
            onClick={() => { 
              setPause(1)
              console.log("Stop"+pause); 
              }}>
            <StopIcon/>  
        </button>
        <button
            className='shadow-lg bg-TimerButton hover:bg-blue-600 rounded-md p-1 pl-3 pr-3'
            onClick={() => { 
              setPause(1)
              setMin(0)
              setSec(0)
              console.log("reset"+pause); 
              
              }}>
            <ReloadIcon/>  
        </button>
      </div>
    </div>
  )
}

export default Timer;
