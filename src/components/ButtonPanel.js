export default function ButtonPanel({labels}) { 
    let list  = labels.map((label , index) => <button key={index}>{label}</button>)// On doit toujour ajouter une clef unique 
    return(
        <div className="button-panel" > 
            {list}
        </div>
    )
}