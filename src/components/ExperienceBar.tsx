import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    // Gére le pourcentage sur la barre de niveau 
    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        /* La façon d'appeler un module.css */
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>  
                {/* On a laissé le style ici, parce que c'est une variable qui va changer, contrairement aux styles dans le fichier css */}
                <div style={{ width: `${percentToNextLevel}%`}}/>
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}