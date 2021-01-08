import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import CountriesToShow from './components/CountriesToShow'
import ShowCountry from './components/ShowCountry'

const App = () => {
    
    const [ countries, setCountries ] = useState([])
    const [ filter, setFilter ] = useState('')
    const [ CountryToShow, setCountryToShow ] = useState('')

    useEffect(() => {
        console.log('effect Countries')
        axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response => {
            console.log('Countries promise fulfilled')
            setCountries(response.data)
          })
    }, [])

    console.log('render', countries.length, 'countries')

    const handleFilterChange = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        setFilter(event.target.value)
        setCountryToShow('')
    }

    const handleButton = (event) => {
        console.log('Country To Show: ',event )
        setCountryToShow(event)
    }

    return (
          
        CountryToShow !== '' ? (
            <div>
            <Filter text = 'find countries ' filter = {filter} handler = {handleFilterChange} />
            <ShowCountry country = {CountryToShow} /> 
            </div> )
        : (
            <div>
            <Filter text = 'find countries ' filter = {filter} handler = {handleFilterChange} />
            <CountriesToShow countries = {countries} filter = {filter} handleButton = {handleButton} />
            </div> )
    )  
}

export default App