import { useContext } from "react"
import { AuthorContext } from "../context/AuthorContext"

export default function AuthorCard(){

    let {selectedAuthor} = useContext(AuthorContext)
    if (!selectedAuthor) return null

    let {name , photo , country , yearBorn , technologie} = selectedAuthor

    return(
        <div className="author-card">
            <img src={'/photos/' + photo} alt={name}/>
            <div>{name}(<span>{country}</span>, <span>{yearBorn})</span></div>
            <div>technologie : <span>{technologie}</span></div>
        </div>
    )
}