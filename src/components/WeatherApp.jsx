import React, {useState} from 'react'
import Clock from './Clock'

function WeatherApp(){
    
    // used to store and set the weather data
    const [weatherData, setWeatherData] = useState([{}])
    // used to store what we input
    const [city, setCity] = useState("")
    // creating a date object with time info
    

    

    const getWeather = (event) => {
        if (event.key == "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${WeatherAPI}`).then(
                response => response.json()
            ).then(
                data => {
                    setWeatherData(data)
                    setCity("")
                }
            )
            console.log('entered')
        }
    }

    return(
        <div className='bg-blue-600 p-4 rounded-lg flex flex-col gap-0 '> 

        <Clock/>

        <div className=' flex flex-col gap-2 '>
            <input 
            type="text" 
            placeholder='Enter City...' 
            className='rounded-lg p-1 text-white bg-blue-500'
            onChange={inputed => setCity(inputed.target.value)}
            value={city}
            onKeyPress={getWeather}
            />

            {typeof weatherData.main === 'undefined' ? (
                <div>
                    <p className='text-blue-200 text-[34px]' > 
                    Where are we today?
                    </p>
                </div>
            ): (
                <div className='flex flex-col-2 justify-between gap-3 h-[160px]'>
                    <div>
                        <img className='rounded-lg m-5 pl-0 ml-0' src="https://picsum.photos/120" alt="img" />
                    </div>
                    <div>
                        <h1 className='text-blue-200 text-[65px] ml-auto p-0'> {weatherData.name} </h1>

                        <div className='flex flex-col gap-0 text-left p-0'>
                            <h2 className='text-blue-200 text-[18px] font-semibold'> {Math.round(weatherData.main.temp)} °F </h2>
                            <h2 className='text-blue-200 text-[14px] font-semibold'> {weatherData.weather[0].main} </h2>
                        </div>
                    </div>
                </div>
            )
        }
            

        {weatherData.cod === "404" ? (
            <p className='text-red-400 font-bold'> 
                City not found!! Please try again... :( 
            </p>
        ):(
            <div> 
            </div>
        )
        }
        </div>
    </div>
    )
}


export default WeatherApp