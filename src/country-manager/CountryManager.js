import { useEffect, useState } from "react";
import { getAllCountries } from "./services/CountryService";
import './css/CountryManager.css'
import CountryList from "./components/CountryList";
import SearchCountries from "./components/SearchContries";

export default function CountryManager()
{
    let[countries, setCountries] = useState([])

    useEffect(() => {
        getAllCountries()
        .then(data => {
            setCountries(data)
        })
    }, [])

    

    return(
        <div>
            {/* <CountryList list={countries}/> */}
            <SearchCountries />
        </div>
    )
}