// Tout ce qu'est static reste dans ce fichier

import { useState } from 'react';

import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  
  // Rappel: Dans React les éléments entourés par un autre sont les children, que l'on pourra passer à un autre composant avec les props (props.children)
  return (  
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
    
  )
}

export default MyApp
