import { useEffect, useState } from 'react';

import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    // Initialization du chronometre en secondes
    const [time, setTime] = useState(25 * 60);
    // Ce state vérifie si le countdown est en marche ou arrêté
    // On l'initialise à false, parce qu'il faut le clic de l'utilisateur pour le mettre en marche
    const [active, setActive] = useState(false);

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
        // qui va activer le chronometre et va le lancer
        setActive(true);
    }

    /* useEffect() prend deux paramètres : le premier est toujours une fonction, le deuxième c'est quand je veux que cette fonction soit exécutée.
    Dans cet exemple, si on met le code comme suit, cette fonction sera exécutée à chaque fois qu'il y aura un changement dans la variable active. Elle commence à false, mais si on clique sur le bouton elle passera à true.
    Ce sera ici alors, qu'il faudra mettre le décomptage du chronometre après le clique sur le bouton et l'activation du state du coup.
    */
    useEffect(() => {
        console.log(active)
    }, [active]);

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
            <button 
                type="button" 
                className={styles.countdownButton}
                onClick={startCountdown}
            >
                Lancer un cycle
            </button>
        </div>   
    );
}