import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown 
    } = useContext(CountdownContext);

    // Comme on nous retourne un array, on peut la destructurer 
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');

    // On fait la même chose avec les secondes 
    const [secondeLeft, secondeRight] = String(seconds).padStart(2, '0').split('');

    
    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    {/* On a séparé le chiffre 25 en deux span pour faciliter la stylisation */}
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondeLeft}</span>
                    <span>{secondeRight}</span>
                </div>
            </div>
            {/* Si le chronomètre est fini, afficher le bouton avec le message sinon afficher les autres boutons selon si actif ou pas */}
            {/* disabled parce qu'on ne veut pas que le bouton soit cliquable, on veut juste afficher le message */}
            { hasFinished ? (
                <button 
                    disabled
                    className={styles.countdownButton}
                >
                    Cycle fini 
                </button>
            ) : (
                <>
                { isActive ? (
                    <button 
                    type="button" 
                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick={resetCountdown}
                >
                  Abandonner le cycle 
                </button>
                )  : (
                    <button 
                    type="button" 
                    className={styles.countdownButton}
                    onClick={startCountdown}
                >
                    Lancer le cycle
                </button>
                )}
                </> 
            )}      
        </div>
    );
}