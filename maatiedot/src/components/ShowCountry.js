import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ShowCountry = ({ country }) => {
    console.log('Country: ', country)

    const [ weather, setWeather ] = useState()
    const [isLoading, setLoading] = useState(true);
    //const API_KEY = '5417355920ad2dbdaf1751e2494381cc'
    const API_KEY = process.env.REACT_APP_API_KEY

    useEffect(() => {
        console.log('effect Weather')
        axios
          .get('http://api.weatherstack.com/current',
          { params: {access_key: API_KEY, query: country.capital }} )
          .then(response => {
            console.log('Weather promise fulfilled')
            setWeather(response.data)
            setLoading(false)
          })
    }, [country])

    if(isLoading) {
        return <div className="App">Loading...</div>;
    }

    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population} </p>
            <h2>languages</h2>
            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name} </li>)}
            </ul>
            <img src={country.flag} alt="Flag" width="170"></img>
            <img src={weather.current.weather_icons[0]} alt="Flag" width="170"></img>
        </div>
    )

}

export default ShowCountry