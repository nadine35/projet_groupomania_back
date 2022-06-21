import React from 'react';
import  ReactDOM from 'react-dom';


import {createRoot}from "react-dom/client";

import App from './App';
import './styles/index.scss';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(

    <App />

);


// ReactDOM.render( 
//           <App />, //composant le + haut de l'appli   
//     document.getElementById('root')
//   );

 