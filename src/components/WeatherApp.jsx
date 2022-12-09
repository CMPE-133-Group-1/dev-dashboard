import React, {useState} from 'react'
import Clock from './Clock'

function getLocationData(API_KEY){
    // https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
    console.log('locating...')
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);

        let locationLat = position.coords.latitude
        let locationLon = position.coords.longitude
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${locationLat}&lon=${locationLon}&exclude=hourly,minutely&appid=${API_KEY}`).then(res => res.json().then(data => {
            console.log(data)
        }))
    });
}

function WeatherApp(){
    const WeatherAPI = 'ba8291294488364e8754a031b9e8b25f'
    // used to store and set the weather data
    const [weatherData, setWeatherData] = useState([{}])
    // used to store what we input
    const [city, setCity] = useState("")
    // creating a date object with time info
    let IconUrl = 'http://openweathermap.org/img/wn/'+ {} +'@2x.png'

    //getLocationData(WeatherAPI)

    const getWeather = (event) => {
        // for custom city
        if (event.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${WeatherAPI}`).then(
                response => response.json()
            ).then(
                data => {
                    setWeatherData(data)
                    setCity("")
                }
            )
            console.log('>>: New City Entered')
        }
    }

    

    return(
        <div className='border-2 p-4 rounded-lg flex flex-col gap-0 ' style={{background: "#9EB8C7", border: '1px solid #74634F'}}> 

        <Clock/>

        <div className=' flex flex-col gap-2 '>
            <input 
            type="text" 
            placeholder='Enter City...' 
            className='rounded-lg p-1 text-white' style={{background: "#6C99B2"}} 
            onChange={inputed => setCity(inputed.target.value)}
            value={city}
            onKeyPress={getWeather}
            />

            {typeof weatherData.main === 'undefined' ? (
                <div>
                    <p className='text-[34px]' style= {{text: "#FFFFFF"}}> 
                    Where are we today?
                    </p>
                </div>
            ): (
                <div className='flex flex-col-2 justify-between h-[160px]'>
                    <div>
                        <img className='rounded-lg mt-5 mb-5 mr-0 pl-0 ml-0' src='http://openweathermap.org/img/wn/10d@2x.png' alt="img" />
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
