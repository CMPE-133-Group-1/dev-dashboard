import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import logo from '../images/logo.svg';

function Banner(){
  // need a hook to change the quote
  const [quote] = useState([
    {name:"Quote 1", author:"Author 1"},
    {name:"Quote 2", author:"Author 2"},
    {name:"Quote 3", author:"Author 3"},
    {name:"Quote 4", author:"Author 4"},
    {name:"Quote 5", author:"Author 5"},
    {name:"Quote 6", author:"Author 6"},
    {name:"Quote 7", author:"Author 7"},
    {name:"Quote 8", author:"Author 8"},
    {name:"Quote 9", author:"Author 9"},
    {name:"Quote 0", author:"Author 0"},
  ])

 
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex(previous => 
        previous + 1 >= quote.length ? 0 : previous + 1
      )
    }, 1000)

    return () => {
      window.clearInterval(timer)
    }
  },[quote])

  const activeQuote = quote[activeIndex]

  return (

    <div className="w-full flex justify-between h-16 mb-2">

      <div className="border-2 border-blue-300 bg-blue-400 drop-shadow-lg flex justify-center h-full w-16 rounded-md">
        <img className="w-9/12 drop-shadow-lg" src={logo} alt='logo'/>
      </div>

      <div className="w-1/2 border-2 border-blue-300 drop-shadow-lg bg-blue-400 rounded-md flex justify-center align-text-middle pl-3 pr-3 pt-1 pb-1">
        <p className="inline-block font-bold drop-shadow-lg pt-3 m-0"> {'"'+ activeQuote.name +'" - ' + activeQuote.author} </p>
      </div>

      <div className="opacity-0 flex justify-center h-full w-16 rounded-md">
        <img className="w-9/12" src={logo} alt='logo'/>
      </div>

    </div>

  )
}


export default Banner






/* : Zen quotes Api, if we ever want to include
const api_url ="https://zenquotes.io/api/quotes/";

async function getapi(url)
{
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
}

getapi(api_url);

*/
