import { useEffect, useState } from 'react';

import styles from '../styles/components/Countdown.module.css';

// 3. NodeJS.Timeout : typage global, juste pour qu'on assigne un type à la variable
let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    // Initialization du chronometre en secondes
    const [time, setTime] = useState(0.1 * 60);
    // Ce state vérifie si le countdown est en marche ou arrêté
    // On l'initialise à false, parce qu'il faut le clic de l'utilisateur pour le mettre en marche
    const [isActive, setIsActive] = useState(false);
    // state qui vérifie si le chronomètre est allé jusqu'à la fin
    const [hasFinished, setHasFinished] = useState(false);

    // Pour trouver les minutes 
    // Math.floor() : arrondi à l'entier plus petit
    const minutes = Math.floor(time / 60);

    const secondes = time % 60;

    // Comme on nous retourne un array, on peut la destructurer 
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');

    // On fait la même chose avec les secondes 
    const [secondeLeft, secondeRight] = String(secondes).padStart(2, '0').split('');

    // Au clic sur le bouton, on appelle cette fonction
    function startCountdown() {
        // qui va activer le chronometre
        setIsActive(true);
    }

    // Arrête le chronometre 
    function resetCountdown() {
        // Premier chose arrêter le setTimeout 
        clearTimeout(countdownTimeout); 
        // Passer le state isActive à false
        setIsActive(false);
        // Remettre le chronomètre à 0
        setTime(0.1 * 60);
    }

    /* 
    * Lance le chronometre
    */
    useEffect(() => {
        // Si le chronometre est actif et s'il est supérieur à 0
        if (isActive && time > 0) {
            // setTimeout se lance 1s après son appel et
            countdownTimeout = setTimeout(() => {
                // change le state du chronometre en enlèvant 1s de sont temps défini (25 min)
                setTime(time - 1);
            }, 1000)
            // sinon s'il est actif mais est arrivé à 0
        } else if (isActive && time === 0) {
            //console.log('Finalizou');
            setHasFinished(true);
            // countdown n'est plus actif, alors il faut changer son state
            setIsActive(false);
        }
        // Il faut que le state du chronometre soit activé et que pour que l'heure change à chaque seconde, on doit "surveiller" aussi les changements du state time
    }, [isActive, time]);

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