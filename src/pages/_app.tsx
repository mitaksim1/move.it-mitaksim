// Tout ce qu'est static reste dans ce fichier

import { useState } from 'react';

import '../styles/global.css';



function MyApp({ Component, pageProps }) {
  
  // Rappel: Dans React les éléments entourés par un autre sont les children, que l'on pourra passer à un autre composant avec les props (props.children)
  return (  
    <Component {...pageProps} />   
  )
}

export default MyApp
