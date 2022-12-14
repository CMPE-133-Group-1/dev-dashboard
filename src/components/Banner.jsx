import React, {useState, useEffect} from 'react'
import logo from '../images/newLogo.svg';



function Banner(){
  const [quote] = useState([
    {name:"Happiness can be found even in the darkest of time, if only one remembers to turn on the light.", author:"Albus Dumbledor"},
    {name:"Don't let anyone ever make you feel like you don't deserve what you want.", author:"Heath Ledger"},
    {name:"Just because someone stumbles and loses their path, doesn't mean they're lost forever.", author:"Professor X"},
    {name:"Life moves pretty fast. IF you don't stop and look around once in awhile, you could miss it.", author:"Ferris Bueller"},
    {name:"Sometimes the right path is not the easiest one.", author:"Grandmother Willow"},
    {name:"The very things that hold you down are going to lift you up.", author:"Timothy Mouse"},
    {name:"All we have to decide is what to do with the time that is given to us.", author:"Gandalf"},
    {name:"Just keep swimming. Just keep swimming. Just keep swimming, swimming, swimming. What do we do? We swim, swim.", author:"Dory"},
    {name:"Everything is possible, even the impossible.", author:"Mary Poppins"},
    {name:"You control your destiny - you don't need magic to do it. And there are no magical shortcuts to solving your problems.", author:"Merida"},
  ])

 
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex(previous => 
        previous + 1 >= quote.length ? 0 : previous + 1
    )

    }, 5000)
    return () => {
      window.clearInterval(timer)
    }
  },[quote])

  const activeQuote = quote[activeIndex]

  return (

    <div className="w-full flex justify-between h-16 mb-2">

      <div className="border-2 flex justify-center h-full w-16 rounded-md" style={{border: "#F5F5F5", fill: "#F5F5F5SS"}}>
        <img className="w-9/12" src={logo} alt='logo'/>
      </div>
    
      <div className="w-1/2 border-2  rounded-md flex justify-center align-text-middle pl-3 pr-3 pt-1 pb-1" style={{border: "1px solid #74634F", color: "#333333"}}>
        <p className="inline-block font-regular  pt-3 m-0"> 
          <span style={{ fontWeight : 'bold'}}>{'"'+ activeQuote.name +'" - ' + activeQuote.author}</span> 
        </p>
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
