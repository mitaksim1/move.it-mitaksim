import { ExperienceBar } from '../components/ExperienceBar';
import { Countdown } from '../components/Countdown';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Profile } from '../components/Profile';

import Head from 'next/head';

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

        </div>
      </section>
    </div>
  )
}
