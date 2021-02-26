import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/Profile.module.css';

// Après la création de ce composant, on pourra l'appeler dans index.tsx
export function Profile() {
    // Appel à context
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/diego3g.png" alt="Diego Fernandes"/>
            <div>
                <strong>Diego Fernandes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}