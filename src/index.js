import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
/* import App from './App'; */
import AuthorsManager from './author-manager/AuthorManager';
import ProductManager from './product-manager/ProductManager';
import CountryManager from './country-manager/CountryManager';
import Biblio from './biblio/Biblio';
import App from './author-context/App'
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
/* root.render(
    <App />
); */

/* root.render(
  <AuthorsManager />
) */

/* root.render(
  <ProductManager />
) */

/* root.render(
  <CountryManager />
) */

/* root.render(
  <Biblio />
) */

root.render(
  <App />
)

//Solution N°1
//reportWebVitals(console.log);

//Solution N°2
/* reportWebVitals(key =>{
  console.log(key.name + " : " + key.value);
}); */