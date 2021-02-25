import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    // 1. Gére le pourcentage sur la barre de niveau 
    // Selon le calcul fait, les points maxi sont de 64 xp, alors les points du milieu de la barre :
    // On a ajouté Math.round pour avoir un chiffre rond et ne pas avoir des soucis au nivaeu des styles
    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        /* La façon d'appeler un module.css */
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>  
                {/* On a laissé le style ici, parce que c'est une variable qui va changer, contrairement aux styles dans le fichier css */}
                {/* 2. On dynamise les valeurs mis en brut par la nouvelle variable */}
                <div style={{ width: `${percentToNextLevel}%`}}/>
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}