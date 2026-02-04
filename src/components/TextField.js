export default function TextField({label,size}) { //ES6 Destructuring
    return(
        <div className="text-field">
            <label labelfor={label} >{label} : </label>
            <input type="text" size={size} id={label} />
        </div>
    )
}