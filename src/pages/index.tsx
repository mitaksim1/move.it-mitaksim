import Head from 'next/head';

import { ExperienceBar } from '../components/ExperienceBar';
import { ChallengeBox } from '../components/ChallengeBox';
import { Countdown } from '../components/Countdown';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';


import styles from '../styles/pages/Home.module.css';

export default function Home(props) {
  console.log(props);
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

/* Quand on déclare une fonction dans une page Next, on peut manipuler quelles données peuvent être repassé de Next (Node: back-end) à React (frontend) cf. Exemple */
export const getServerSideProps = async() => {
  {/*
  Exemple : On fait cette apel à l'API 

  */}
  const user = {
    level: 1,
    currentExperience: 50,
    challengeCompleted: 2,
  }

  return {
    props: {user}
  }
}

/* Next est hybride */