import Head from 'next/head';
import { GetServerSideProps } from 'next';

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

/* Une fois importé, on précise que la fonction est du type : GetServerSideProps, comme ça il comprendra que la variable ctx est de ce type */
export const getServerSideProps: GetServerSideProps = async(ctx) => {
  // const cookies = ctx.req.cookies;
  const { level, currentExperience, challengesCompleted} = ctx.req.cookies;
    
  return {
    props:  {
      level,
      currentExperience,
      challengesCompleted
    }
  }
}

/* Next est hybride */