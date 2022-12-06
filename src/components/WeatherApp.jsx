import React, {useState} from 'react'
import { Crosshair2Icon } from '@radix-ui/react-icons'
import Clock from './Clock'



function WeatherApp(){
    const WeatherAPI = 'ba8291294488364e8754a031b9e8b25f'
    // used to store and set the weather data
    const [weatherData, setWeatherData] = useState([{}])
    // used to store what we input
    const [city, setCity] = useState("")
    // creating a date object with time info
    let IconUrl = 'http://openweathermap.org/img/wn/'+ {} +'@2x.png'
    // save the city that is found using the geolocation functionality 
    const [geoCity, setGeoCity] = useState("")
    // stores the code for the weather icon
    const [iconCode,setIconCode] = useState("")
    // stores the link to the weathe icon image that will be used to source the image
    const [iconLink, setIconLink] = useState("")

    //getLocationData(WeatherAPI)
    const getWeather = (event) => {
        // on "enter" key press take what the user inputted and find the data for that input
        if (event.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${WeatherAPI}`).then(
                response => response.json()
            ).then(
                data => {
                    setWeatherData(data)
                    setCity("")
                    setIconCode(weatherData.weather[0].icon)
                    setIconLink("http://openweathermap.org/img/wn/"+iconCode+"@2x.png")
                }
            )
        }
    }

    // Get the Lon and Lat of the user presntly and provide a city Name
    const getGeoLocationWeather = () => {
        // find the users geolocation 
        navigator.geolocation.getCurrentPosition(function(position) {
            let locationLat = position.coords.latitude
            let locationLon = position.coords.longitude
            // fetch the data for the lon and lat of the users position and set the geoCity to that value
            fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${locationLat}&lon=${locationLon}&limit=${1}&appid=${WeatherAPI}`).then(res => res.json().then(data => {
                console.log(" getGeoLocationWeather >> : " + data[0].name)
                setGeoCity(data[0].name)
            }))
        });
        autoDetect()
    }

    // take the geoCity and fetch the data and set the respective values to display the weather data for that city
    const autoDetect = () => {
        console.log("autoDetect >> : " + geoCity)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${geoCity}&units=imperial&APPID=${WeatherAPI}`).then(
                response => response.json()
            ).then(
                data => {
                    setWeatherData(data)
                    setCity("")
                    setIconCode(weatherData.weather[0].icon)
                    setIconLink("http://openweathermap.org/img/wn/"+iconCode+"@2x.png")
                }
            )
    }

    return(
        <div className='bg-blue-600 p-4 rounded-lg flex flex-col gap-0 '> 

            <Clock/>

            <div className=' flex flex-col gap-2 '>

                <div> 
                    <input 
                    type="text" 
                    placeholder='Enter City...' 
                    className='rounded-lg p-1 text-white bg-blue-500'
                    onChange={inputed => setCity(inputed.target.value)}
                    value={city}
                    onKeyPress={getWeather}
                    />

                    <button 
                    className='bg-slate-700 rounded-xl p-1 mt-auto mb-auto'
                    onClick={()=>{
                        getGeoLocationWeather()
                    }}
                    > 
                        <Crosshair2Icon/> 
                    </button>
                </div>
                
                {typeof weatherData.main === 'undefined' ? (
                    <div>
                        <p className='text-blue-200 text-[34px]' > 
                            Where are we today?
                        </p>
                    </div>
                ): (
                    <div className='flex flex-col-2 justify-between h-[160px]'>
                        <div>
                            <img className='rounded-lg mt-5 mb-5 mr-0 pl-0 ml-0' src={iconLink} alt="img" />
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