import Head from 'next/head';

import { ExperienceBar } from '../components/ExperienceBar';
import { ChallengeBox } from '../components/ChallengeBox';
import { Countdown } from '../components/Countdown';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Profile } from '../components/Profile';


import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />
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
    </div>
  )
}
