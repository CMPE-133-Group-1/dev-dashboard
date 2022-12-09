import React, {useEffect, useState} from 'react'
import { PlayIcon, ReloadIcon, StopIcon } from '@radix-ui/react-icons'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


//progress bar from https://www.npmjs.com/package/react-circular-progressbar
function Timer(){
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  const [selectedTime, setSelectedTime] = useState(0);
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
                  alert("Time for a break!")
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

    let getTotalTime = (min, sec, selected) => {
      return (((min * 60) + sec) / (selected)) * 100;
    }
    
    let updateSelectedTime = (newMin) => {
      setSelectedTime((newMin * 60) + sec);
    }
  
  const timerMin = min < 10 ? `0${min}` : min;
  const timerSec = sec < 10 ? `0${sec}` : sec;

  return(
    <div className="rounded-md pt-4 pb-4 flex flex-col gap-6" style={{background: "#D2CADD", border: '1px solid #74634F'}}>
      <div style={{ width: "30%", margin: "auto"}}>
        <CircularProgressbar 
          value={getTotalTime(min, sec, selectedTime)} 
          text={timerMin+':'+timerSec}
          //below code is from  https://www.npmjs.com/package/react-circular-progressbar 
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 25,
        
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'round',
        
            // Text size
            textSize: '16px',
        
            // How long animation takes to go from one second to another, in seconds
            pathTransitionDuration: 0.1,
        
            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',
        
            // Colors
            pathColor: '#F1D0A8',
            trailColor: '#D2CADD',
            textColor: '#74634F',
            backgroundColor: '#F1D0A8',
          })}
        />
      </div>
      
      <h1 className="text-XXL">  </h1>

      <div className="flex flex-row justify-around">
        <button className="bg-TimerButton rounded-md p-1 pl-3 pr-3" style={{background: "#F1D0A8", hover: "#E8AF6C"}}
        onClick={() => { 
          setMin(15); 
          updateSelectedTime(15);
        }}> 15 min </button>

        <button className=" bg-TimerButton rounded-md p-1 pl-3 pr-3" style={{background: "#F1D0A8", hover: "#E8AF6C"}}
        onClick={() => { 
          setMin(30); 
          updateSelectedTime(30);
        }}> 30 min </button>

        <button className="bg-TimerButton rounded-md p-1 pl-3 pr-3" style={{background: "#F1D0A8", hover: "#E8AF6C"}}
        onClick={() => { 
          setMin(60);
          updateSelectedTime(60);
        }}> 60 min </button>

        <div className='bg-TimerButton rounded-md p-1 pl-3 pr-3' style={{background: "#F1D0A8", hover: "#E8AF6C"}}> 
          <input 
          type="number" 
          id="min" name="min" 
          min="1"  
          placeholder='Mins'
          className=' bg-TimerButton pl-2'
          onChange={(event) => {
            setMin(event.target.value);
            updateSelectedTime(event.target.value);
          }}
          />
        </div>
      </div>

      <div className="flex flex-row justify-around w-1/2 ml-auto mr-auto ">
        <button
            className='rounded-md p-1 pl-3 pr-3' style={{background: "#A7BF93"}}
            onClick={() => { 
              setPause(0)
              console.log("Start"+pause);
              }}>
            <PlayIcon/>  
        </button>
        <button
            className='rounded-md p-1 pl-3 pr-3' style={{background: "#C7807B"}}
            onClick={() => { 
              setPause(1)
              console.log("Stop"+pause); 
              }}>
            <StopIcon/>  
        </button>
        <button
            className='bg-TimerButton rounded-md p-1 pl-3 pr-3' style={{background: "#F1D0A8", hover: "#E8AF6C"}}
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
