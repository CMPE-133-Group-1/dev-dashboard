import React from 'react'
import logo from '../images/logo.svg';



function Banner(){
  // need a hook to change the quote
  const someQuote = 'Lorem ipsum!'
  const author = 'Author Here'
  return (

    <div className="w-full flex justify-between h-16 mb-2">

      <div className="border-2 border-blue-300 bg-blue-400 drop-shadow-lg flex justify-center h-full w-16 rounded-md">
        <a href="https://github.com/" target="_blank" alt="github">
          <img className="w-9/12 drop-shadow-lg" src={logo} alt='logo'/>
        </a>
      </div>
      <div className="border-2 border-blue-300 bg-blue-400 drop-shadow-lg flex justify-center h-full w-16 rounded-md">
        <a href="https://www.linkedin.com/" target="_blank" alt="linkedin">
          <img className="w-9/12 drop-shadow-lg" src={logo} alt='logo'/>
        </a>
      </div>
      <div className="border-2 border-blue-300 bg-blue-400 drop-shadow-lg flex justify-center h-full w-16 rounded-md">
        <a href="https://stackoverflow.com/" target="_blank" alt="stackoverflow">
          <img className="w-9/12 drop-shadow-lg" src={logo} alt='logo'/>
        </a>
      </div>
      <div className="border-2 border-blue-300 bg-blue-400 drop-shadow-lg flex justify-center h-full w-16 rounded-md">
        <a href="https://leetcode.com/" target="_blank" alt="leetcode">
          <img className="w-9/12 drop-shadow-lg" src={logo} alt='logo'/>
        </a>
      </div>
      <div className="w-1/2 border-2 border-blue-300 drop-shadow-lg bg-blue-400 rounded-md flex justify-center align-text-middle pl-3 pr-3 pt-1 pb-1">
        <p className="inline-block font-bold drop-shadow-lg pt-3 m-0"> {'"'+ someQuote +'" -' + author} </p>
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
