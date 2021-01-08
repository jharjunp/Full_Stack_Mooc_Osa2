import React from 'react'
import ShowCountry from './ShowCountry'

const CountriesToShow = ({ countries, filter, handleButton}) => {
    const list = countries.filter(country => country.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1)

    return  list.length > 1 && list.length <= 10    ? 
            (<ul> {list.map(country => 
                <li key={country.name}>{country.name}
                <button 
                    key = {country.name} 
                    onClick={(e) => handleButton(country, e)}
                    >Show</button>
             </li>)} </ul> )
        :   list.length > 10                        ? (<p>Too many matches, spesify another filter</p>)
        :   list.length === 0                        ? (<p></p>)
        :   (<ShowCountry country = {list[0] } />)
   
}

export default CountriesToShow