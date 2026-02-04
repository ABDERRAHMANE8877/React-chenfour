import { useEffect, useState } from "react";
import DataGrid from "./components/DataGrid";
import NewProduct from "./components/NewProduct";
import { getAllProducts } from "./services/ProductService";  
import { getAllAuthors } from "../author-manager/services/authorService";
import "./css/ProductManager.css"

export default function ProductManager() {

    let [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getAllProducts();
            setProducts(data);
        }
        fetchData();
    }, []);


    function addProductHandler(product) {
        //console.log('handler, product = ' , product)
        setProducts([...products , product]);
    }

    return(
        <div className="product-manager">
            <h2>Gestion de Stock</h2>
            <NewProduct handler={addProductHandler} />
            <DataGrid 
                title="Produits en Stock"
                data={products}
            />
        </div>
    );
}
