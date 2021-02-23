import Head from 'next/head';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />
      <section>
        {/* Partie gauche */}
        <div>
          <Profile />
        </div>
        {/* Partie droite */}
        <div>

        </div>
      </section>
    </div>
  )
}
