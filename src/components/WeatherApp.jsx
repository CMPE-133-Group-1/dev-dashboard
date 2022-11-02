import React, {useState} from 'react'



function WeatherApp(){
    
    // used to store and set the weather data
    const [weatherData, setWeatherData] = useState([{}])
    // used to store what we input
    const [city, setCity] = useState("")

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
        <div className='bg-blue-600 flex flex-col gap-2 p-2 rounded-lg'>
            <h1> Weather App </h1>
            <input 
            type="text" 
            placeholder='Enter City...' 
            className='rounded-lg p-1 text-blue-900'
            onChange={inputed => setCity(inputed.target.value)}
            value={city}
            onKeyPress={getWeather}
            />

            {typeof weatherData.main === 'undefined' ? (
                <div>
                    <p className='text-blue-200 text-[65px]' > Welcome </p>
                </div>
            ): (
                <div className='flex flex-col gap-3'>
                    <h1 className='text-blue-200 text-[65px]'> {weatherData.name} </h1>
                    <div className='flex flex-col gap-0'>
                        <h2> {Math.round(weatherData.main.temp)} °F </h2>
                        <h2> {weatherData.weather[0].main} </h2>
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
    )
}


export default WeatherApp