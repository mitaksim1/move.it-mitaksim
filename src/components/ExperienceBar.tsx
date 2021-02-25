import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    // 1. On va appler le context dans ce composant aussi
    // 6. On ajoute experienceToNextLevel dans le context 
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
    return (
        /* La façon d'appeler un module.css */
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>  
                {/* On a laissé le style ici, parce que c'est une variable qui va changer, contrairement aux styles dans le fichier css */}
                <div style={{ width: '50%'}}/>
                {/* 2. On change la valeur en dure par la variable currentExperience */}
                <span className={styles.currentExperience} style={{ left: '50%' }}>
                    {currentExperience} xp
                </span>
            </div>
            {/* 7. On change la valeur en dure par la variable experienceToNextLevel */}
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}