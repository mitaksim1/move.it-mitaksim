// Tout ce qu'est static reste dans ce fichier

import { useState } from 'react';

import '../styles/global.css';

import { ChallengesContext } from '../contexts/ChallengesContext';

/* React nous permet d'accèder à une propriété de l'objet comme suit. Tous les éléments qui sont englobés par le Provider auront accès aux données contenus dans ce contexte. Comme ce fichier englobe toute l'application, toute l'appli aura accès aux diverses données y contenues */
function MyApp({ Component, pageProps }) {
  const [level, setLevel] = useState(1);

  /*
  Maintenant, les choses commecent à devenir intéressantes, parce qu'avec context on a accès aux informations et on peut créer des fonctions qui pourront changer ces informations conforme nos besoins
  */

  function levelUp() {
    setLevel(level + 1);
  }
  
  return (  
    <ChallengesContext.Provider value={{ Level: 1, levelUp }}>
      <Component {...pageProps} />
    </ChallengesContext.Provider>
    
  )
}

export default MyApp
