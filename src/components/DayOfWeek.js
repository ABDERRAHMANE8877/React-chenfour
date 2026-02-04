import { useState } from "react";

const DAYS = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]

export default function DayOfWeek({}) { 
    
    let [day , setDay ] = useState( 1 ) // destructering du tableau retourné
    /*
        une variable dont depend l'affichage d'un composant React s'appelle variable état ou état du composant
        Si cet état change de valeur il sera necessaire d'aviser React pour que celui-ci rend (ou affiche) de nouveau
        composant avec la nouvelle valeur de l'état ; on parle du Re-rendering 
        
    */

    function clickHandler() {
        setDay(ps =>ps < 6 ? ps +1 : 0) // ps : previous state
    }

    return(
        <div className="day-of-week"  > 
            <p>Jour de la semaine : {DAYS[day]}</p>
            <button onClick={clickHandler}>Suivant</button>
        </div>
    )
}