export default function AuthorCard({name , photo , country , yearBorn , technologie}){
    return(
        <div className="author-card">
            <img src={'/photos/' + photo} alt={name}/>
            <div>{name}(<span>{country}</span>, <span>{yearBorn})</span></div>
            <div>technologie : <span>{technologie}</span></div>
        </div>
    )
}