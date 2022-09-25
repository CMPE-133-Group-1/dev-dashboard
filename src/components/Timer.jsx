import React from 'react'


function Timer(){
  return(
    <div className="bg-blue-400 border-2 border-blue-300 rounded-md pt-4 pb-4 flex flex-col gap-6">

      <h1 className="text-XXL"> {'0'+':'+'00'} </h1>

      <div className="flex flex-row justify-around">
        <button className="shadow-lg bg-blue-500 rounded-md p-1 pl-3 pr-3"> 15 min </button>
        <button className="shadow-lg bg-blue-500 rounded-md p-1 pl-3 pr-3"> 30 min </button>
        <button className="shadow-lg bg-blue-500 rounded-md p-1 pl-3 pr-3"> 60 min </button>
        <button className="shadow-lg bg-blue-500 rounded-md p-1 pl-3 pr-3"> custom </button>
      </div>

      <div className="flex flex-row justify-around w-1/2 ml-auto mr-auto ">
        <button className="shadow-lg bg-green-500 rounded-full p-1 pl-3 pr-3"> start </button>
        <button className="shadow-lg bg-red-500 rounded-full p-1 pl-3 pr-3"> stop </button>
      </div>

    </div>
  )
}



export default Timer;
