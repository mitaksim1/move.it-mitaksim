import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ExperienceBar } from '../components/ExperienceBar';
import { ChallengeBox } from '../components/ChallengeBox';
import { Countdown } from '../components/Countdown';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { LevelUpModal } from '../components/LevelUpModal';
import { Profile } from '../components/Profile';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';


import styles from '../styles/pages/Home.module.css';

// Interface qui va définir les types attendus des props suivants
interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  console.log(props);
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />
      <LevelUpModal />

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
    </ChallengesProvider> 
  )
}

/* Une fois importé, on précise que la fonction est du type : GetServerSideProps, comme ça il comprendra que la variable ctx est de ce type */
export const getServerSideProps: GetServerSideProps = async(ctx) => {
  // const cookies = ctx.req.cookies;
  const { level, currentExperience, challengesCompleted} = ctx.req.cookies;
   
  {/* On convertit les données reçus des cookies de string à Number */}
  return { 
    props:  {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

/* Next est hybride */