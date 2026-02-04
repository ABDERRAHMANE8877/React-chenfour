import { useState, useEffect } from "react";

export default function Timer() { 
    let [time, setTime]  = useState(getTime())

    function getTime()
    {
        let date = new Date();
        return {
            hour : date.getHours(),
            minute : date.getMinutes(),
            second : date.getSeconds()
        }
    }

    console.log("Re-rendering");

    useEffect(() => {
        setInterval(() => {
            setTime(getTime());
        }, 1000);
    }, []);

    /* useEffect(() => {
        setInterval(() => {
            setTime(getTime());
        }, 1000);
    }, [a , b]); */  // la fonction useEffect se lance uniquement au debut et quand a ou b change

    return(
        <div className="timer" > 
            <span>Heure Actuelle : </span>
            <span>{time.hour}:{time.minute}:{time.second}</span>
        </div>
    )
}