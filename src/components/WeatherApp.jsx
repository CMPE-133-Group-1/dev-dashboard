import React, {useState} from 'react'
import { Crosshair2Icon } from '@radix-ui/react-icons'
import Clock from './Clock'

function WeatherApp(){
    
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
    // store the forecasst info
    const [forecastData, setForecastData]= useState([])

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
                    getForecast()
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
                setGeoCity(data[0].name)
            }))
        });
        autoDetect()
    }
    
    const getForecast = () => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&appid=${WeatherAPI}`).then(
            response => response.json()
        ).then(
            data => {
                setForecastData([data.list[4],data.list[12],data.list[20],data.list[28],data.list[36]])
                console.log(forecastData)
            }
        )
    }

    // take the geoCity and fetch the data and set the respective values to display the weather data for that city
    const autoDetect = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${geoCity}&units=imperial&APPID=${WeatherAPI}`).then(
                response => response.json()
            ).then(
                data => {
                    setWeatherData(data)
                    setCity("")
                    setIconCode(weatherData.weather[0].icon)
                    setIconLink("http://openweathermap.org/img/wn/"+iconCode+"@2x.png")
                    getForecast()
                }
            )
    }

    return(
        <div className='border-2 p-4 rounded-lg flex flex-col gap-0 ' style={{background: "#9EB8C7", border: '1px solid #74634F'}}> 

            <Clock/>

            <div className=' flex flex-col gap-2 '>

                <div> 
                    <input 
                    type="text" 
                    placeholder='Enter City...' 
                    className='rounded-lg p-1 text-white' style={{background: "#6C99B2"}} 
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
                        <p className='text-[34px]' style= {{text: "#FFFFFF"}} > 
                            Where are we today?
                        </p>
                    </div>
                ): (
                    <div> 
                        <div className='flex flex-col-2 justify-between h-[160px]'>
                            <div>
                                <img className='rounded-lg mt-5 mb-5 mr-0 pl-0 ml-0' src={iconLink} alt="img" />
                            </div>
                            <div>
                                <h1 className='text-[65px] ml-auto p-0'style={{text: "#FFFFFF"}}> {weatherData.name} </h1>

                                <div className='flex flex-col gap-0 text-left p-0'>
                                    <h2 className='text-[18px] font-semibold' style={{text: "#FFFFFF"}}> {Math.round(weatherData.main.temp)} °F </h2>
                                    <h2 className='text-[14px] font-semibold' style={{text: "#FFFFFF"}}> {weatherData.weather[0].main} </h2>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col-5 gap-1 justify-around'> 
                        {forecastData.map((forecast) => {
                            return (
                                <div className=' mb-1 p-1 rounded-lg text-center w-24' style={{background: "#84A5B8"}}> 
                                    <img className='rounded-lg m-0 p-0' src={"http://openweathermap.org/img/wn/" + forecast.weather[0].icon + "@2x.png"} alt="img" /> 
                                    <div> 
                                        <h1 className='border-solid '> {forecast.dt_txt.slice(5,10)} </h1> 
                                        <p className='font-light rounded-lg '> {forecast.weather[0].main} </p> 
                                    </div> 
                                </div>
                            )
                        })}
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
