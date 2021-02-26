import Head from 'next/head';

import { ExperienceBar } from '../components/ExperienceBar';
import { ChallengeBox } from '../components/ChallengeBox';
import { Countdown } from '../components/Countdown';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';


import styles from '../styles/pages/Home.module.css';

export default function Home(props) {
  // console.log(props);
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          {/* Partie gauche */}
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          {/* Partie droite */}
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
      
    </div>
  )
}

/* Quand on déclare une fonction dans une page Next, on peut manipuler quelles données peuvent être repassés de Next (Node: back-end) à React (frontend) cf. Exemple */
export const getServerSideProps = async() => {
  { /*Exemple : On fait cette appel à l'API */}
  const user = {
    level: 1,
    currentExperience: 50,
    challengeCompleted: 2,
  }
  {/* 
  On efface le console.log dans la fonction Home() et on le met dans cette fonction, maintenant le résultat du console s'affichera sur le terminal, parce que cette fonction concerne Next, côté backend (Node) du coup.

  Next est née de cette fonctionnalité, ça permet au moteurs de recherche de lire d'abord cette fonction avant de'afficher l'interface de la fonction Home() par exemple...

  Un autre exemple, si on a un blog que va chercher le titre du post et la description dans une bdd et on met la requête à ces données dans la fonction Home() les moteurs d'indexation ne vont pas attendre que la requête soit faite pour afficher l'interface, notre page ne sera donc pas indexée.
  On doit faire la requête à ces informations dans la fonction getServerSideProps(), on passera le titre et la description dans les props que l'on ira récupérer dans Home(props) pour ensuite pouvoir les afficher.
  */}
  console.log(user);
  return {
    props: {user}
  }
}

/* Next est hybride */