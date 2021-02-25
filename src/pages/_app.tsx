// Tout ce qu'est static reste dans ce fichier

import '../styles/global.css';

import { ChallengesContext } from '../contexts/ChallengesContext';

/* React nous permet d'accèder à une propriété de l'objet comme suit. Tous les éléments qui sont englobés par le Provider auront accès aux données contenus dans ce contexte. Comme ce fichier englobe toute l'application, toute l'appli aura accès aux diverses données y contenues */
function MyApp({ Component, pageProps }) {
  
  return (  
    <ChallengesContext.Provider value={'teste'}>
      <Component {...pageProps} />
    </ChallengesContext.Provider>
    
  )
}

export default MyApp
