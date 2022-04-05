import React, { useState, useEffect } from "react";
import { getCountries } from "../../services/CountriesServices";
import { Link } from "react-router-dom";
import './CountriesList.scss'
import { useTheme } from "../../contexts/ThemeContext";


const CountriesList = () => {
    
    const [countries, setCountries] = useState([])
    const { theme } = useTheme();
    
    useEffect(() => {
        getCountries()
        .then((countries) => {
            setCountries(countries)
        })
    },[])
    
    return (
            <>
            <div className={`bg-${theme}`}>
        <div className='CountriesList'>
        {countries.map(country => {
            return (
                <Link className={`list-container`} to={`/${country.alpha3Code}`}>
                    <div className='countries-list' key={country._id}>
                        <img className='country-flag' src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={ country.name.common } />
                        <p>{ country.name.common }</p>
                    </div>
                    </Link> 
                       )
                    })}
                 </div>
                 </div>
                 </>
        )
}



export default CountriesList