import products from '../data/products'

export function getAllProducts() {
    return new Promise((resolve , reject) => {
        resolve(products);
    })
}