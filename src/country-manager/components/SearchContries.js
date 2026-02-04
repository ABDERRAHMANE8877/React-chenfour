import { useEffect, useState } from "react"
import { getAllCountries } from "../services/CountryService"
import CountryList from "./CountryList"

export default function SearchContries()
{
    let [countries , setCountries] = useState([])
    let [keyword , setKeyword] = useState({ name: '', continent: '' })

    let resultat = countries.filter(c => (
        c.name.common.toLowerCase().includes(keyword.name.toLowerCase()) &&
        c.continents[0].toLowerCase().includes(keyword.continent.toLowerCase())
    ))

    useEffect(() => {
        getAllCountries().then(data => setCountries(data));
    }, [])

    function changeHandler(event) {
        setKeyword({
            ...keyword,
            [event.target.name] : event.target.value
        })
    }

    return(
        <div className="search-countries">
            <fieldset>
                <div>
                    <label>Nom du pays : </label>
                    <input type="text" size="30" name="name" onChange={changeHandler} />
                </div>
                <div>
                    <label>Continent : </label>
                    <input type="text" size="30" name="continent" onChange={changeHandler} />
                </div>
            </fieldset>
            <div className="countries-list">
                <CountryList list={resultat} />
            </div>
        </div>
    )
}