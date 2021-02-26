// Import de useContext et du fichier ChallengesContext
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    // Appel à contexte 
    const { challengesCompleted } = useContext(ChallengesContext);
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Défis complets</span>
            <span>{ challengesCompleted }</span>
        </div>
    );
}