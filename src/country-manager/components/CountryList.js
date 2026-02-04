import Country from "./Country";    
export default function CountryList({list})
{
    let countryList = list.map( (c, index) => <Country key={index} {...c} />)//...c : spread operator permet de passer toutes les propriétés de l'objet c .
    return(
        <div className="country-list">
            <h1>Liste des pays du monde ({list.length}) : </h1>
            <div>
                {countryList}
            </div>
        </div>
    )
}