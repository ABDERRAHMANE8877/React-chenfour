import { useState } from "react"

/* Controlled [input] Components : composants contrôlés */
export default function NewProduct({ handler })
{
    let[product , setProduct] = useState({
        id: 0,
        name: 'Désignation du produit',
        price: 0,
        quantity: 0
    })

    function changeHandler(event) {
        setProduct(
            {
                ...product,
                [event.target.name] : event.target.value
            }
        )
    }

    return(
        <div className="new-product">
            <h2>Nouveau Produit</h2>
            <fieldset>
                <legend>Information Produit : </legend>
                <div>
                    <label>Identificateur : </label>
                    <input type="text" size="15" name="id" value={product.id} onChange={changeHandler}/>
                </div>
                <div>
                    <label>Désignation Produit : </label>
                    <input type="text" size="15" name="name" value={product.name} onChange={changeHandler}/>
                </div>
                <div>
                    <label>Prix unitaire : </label>
                    <input type="text" size="15" name="price" value={product.price} onChange={changeHandler}/>
                </div>
                <div>
                    <label>Quantité : </label>
                    <input type="text" size="15" name="quantity" value={product.quantity} onChange={changeHandler}/>
                </div>
            </fieldset>
            <div>
                <button onClick={() => {
                    if (product.id != 0 ){
                        handler(product);
                        setProduct({ id : 0 , name : 'Désignation du produit' , price : 0 , quantity : 0});    
                    }
                }}>Valider</button>
            </div>
        </div>
    )
}