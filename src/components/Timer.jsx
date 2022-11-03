import React, {useEffect, useState} from 'react'
import { PlayIcon, ReloadIcon, StopIcon } from '@radix-ui/react-icons'



function Timer(){
  const [min, setMin] = useState(1)
  const [sec, setSec] = useState(0)
  //const [displayMsg, setDisplayMsg] = useState(false)
  const [pause, setPause] = useState(1)
  
  
    useEffect(()=> {
        if(pause===0){
        let interval = setInterval( () => {
            clearInterval(interval)
              if(sec === 0){
                if(min !== 0){
                  setSec(59)
                  setMin(min-1)
                }else{
                  //let minutes = displayMsg ? min : 4;
                  //let seconds = 59;
        
                  //setSec(seconds)
                  //setMin(minutes)
                  //setDisplayMsg(!displayMsg)
                }
              } else {
                setSec(sec-1)
              }
        },1000)
      }
    }, [sec,pause])
  
  
  const timerMin = min < 10 ? `0${min}` : min;
  const timerSec = sec < 10 ? `0${sec}` : sec;

  return(
    <div className="bg-blue-400 border-2 border-blue-300 rounded-md pt-4 pb-4 flex flex-col gap-6">

      <h1 className="text-XXL"> {timerMin+':'+timerSec} </h1>

      <div className="flex flex-row justify-around">
        <button className="shadow-lg bg-blue-500 hover:bg-blue-600 rounded-md p-1 pl-3 pr-3"
        onClick={() => { setMin(15);}}> 15 min </button>

        <button className="shadow-lg bg-blue-500 hover:bg-blue-600 rounded-md p-1 pl-3 pr-3"
        onClick={() => { setMin(30);}}> 30 min </button>

        <button className="shadow-lg bg-blue-500 hover:bg-blue-600 rounded-md p-1 pl-3 pr-3"
        onClick={() => { setMin(60);}}> 60 min </button>

        <button className="shadow-lg bg-blue-500 hover:bg-blue-600 rounded-md p-1 pl-3 pr-3"
        onClick={() => { console.log("Custom");}}> custom </button>
      </div>

      <div className="flex flex-row justify-around w-1/2 ml-auto mr-auto ">
        <button
            onClick={() => { 
              setPause(0)
              console.log("Start"+pause);
               
              }}>
            <PlayIcon/>  
        </button>
        <button
            onClick={() => { 
              setPause(1)
              console.log("Stop"+pause); 
              
              }}>
            <StopIcon/>  
        </button>
        <button
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



/*
<button className="shadow-lg bg-green-500 hover:bg-green-600 rounded-full p-1 pl-3 pr-3" onClick={startTimer()}/>
        <button className="shadow-lg bg-red-500 hover:bg-red-600 rounded-full p-1 pl-3 pr-3">
          <StopIcon/>
        </button>
*/