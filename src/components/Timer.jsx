import React from 'react'
import { PlayIcon, StopIcon } from '@radix-ui/react-icons'


function Timer(){
  return(
    <div className="bg-purple-300 border-2 border-purple-200 rounded-md pt-4 pb-4 flex flex-col gap-6">

      <h1 className="text-XXL"> {'0'+':'+'00'} </h1>

      <div className="flex flex-row justify-around">
        <button className="shadow-lg bg-orange-500 hover:bg-orange-600 rounded-md p-1 pl-3 pr-3"> 15 min </button>
        <button className="shadow-lg bg-orange-500 hover:bg-orange-600 rounded-md p-1 pl-3 pr-3"> 30 min </button>
        <button className="shadow-lg bg-orange-500 hover:bg-orange-600 rounded-md p-1 pl-3 pr-3"> 60 min </button>
        <button className="shadow-lg bg-orange-500 hover:bg-orange-600 rounded-md p-1 pl-3 pr-3"> custom </button>
      </div>

      <div className="flex flex-row justify-around w-1/2 ml-auto mr-auto ">
        <button className="shadow-lg bg-orange-500 hover:bg-orange-600 rounded-full p-1 pl-3 pr-3">
          <PlayIcon/>
         </button>
        <button className="shadow-lg bg-orange-500 hover:bg-orange-600 rounded-full p-1 pl-3 pr-3">
          <StopIcon/>
        </button>
      </div>

    </div>
  )
}



export default Timer;
