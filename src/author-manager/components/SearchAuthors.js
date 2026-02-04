import { useEffect, useState } from "react"
import { getAllAuthors } from "../services/authorService"
import AuthorCard from "./AuthorCard"

export default function SearchAuthors()
{
    let [authors , setAuthors] = useState([])
    let[keyword , setKeyword] = useState({name : '' , techno : ''})

    let resultat = authors.filter(
        a => (a.name.toLowerCase().includes(keyword.name.toLowerCase()) &&
        a.technologie.toLowerCase().includes(keyword.techno.toLowerCase())
    ))

    let list = resultat.map(a => <AuthorCard key={a.id} {...a} />)//...author : spread operator permet de passer toutes les propriétés de l'objet author .
    
    useEffect(() => {
        getAllAuthors().then(data => setAuthors(data));
    }, [])

    function changeHandler(event) {
        setKeyword({
            ...keyword,
            [event.target.name] : event.target.value
        })
    }

    return(
        <div className="search-authors">
            <fieldset>
                <div>
                    <label>Nom de l'auteur : </label>
                    <input type="text" size="30" name="name" onChange={changeHandler}/>
                </div>
                <div>
                    <label>technologie : </label>
                    <input type="text" size="30" name="techno" onChange={changeHandler}/>
                </div>
            </fieldset>
            <div className="authors-list">
                {list}
            </div>
        </div>
    )
}