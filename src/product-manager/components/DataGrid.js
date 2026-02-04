import { useState, useEffect } from "react";

// Afficher des données dans une table HTML 
// data : un tableau d'objets (n'importe quelle structure)
export default function DataGrid({ title, data }) {

    const [products, setProducts] = useState([]);

    let keys = []
    if (data.length > 0)
    {
        keys =  Object.keys(data[0])
    }
    let thead = keys.map(k=> <th key={k}>{k}</th>)
    let tbody = data.map((obj , index) => <tr key={index}>
        {keys.map(k => <td key={k}>{obj[k]}</td>)}
    </tr>) 

    return (
        <div className="data-grid">
            <h1>{title}</h1>

            <table>

                <thead>
                    <tr>{thead}</tr>
                </thead>
                
                <tbody>{tbody}</tbody>
            
            </table>
        </div>
    );
}
