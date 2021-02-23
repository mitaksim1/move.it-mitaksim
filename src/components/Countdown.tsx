import { useState } from 'react';

import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    // Initialization du chronometre en secondes
    const [time, setTime] = useState(25 * 60);

    // Pour trouver les minutes 
    // Math.floor() : arrondi à l'entier plus petit
    const minutes = Math.floor(time / 60);

    // 
    const secondes = time % 60;

    /* String(minutes) : transforme la valeur de minutes en string. Ex : 25 = '25' 
    .padStart(2, '0') : on veut deux strings, s'il n'y qu'un on ajoute un 0 à gauche. Ex: On a que 5 minutes, alors la fonction padStart() va ajouter un 0 à 5 et on va se retrouver avec 05 comme ça on pourra faire un split.
    .split('') : sépare la string en deux parties et nous retourne un array avec ces deux parties. Ex: 25 -> devient '2' '5' -> ['2', '5'] 

    const minuteLeftRight = String(minutes).padStart(2, '0').split('');
    */ 

    // Comme on nous retourne un array, on peut la destructurer 
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');

    // On fait la même chose avec les secondes 
    const [secondeLeft, secondeRight] = String(secondes).padStart(2, '0').split('');

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
            <button type="button" className={styles.countdownButton}>
                Lancer un cycle
            </button>
        </div>   
    );
}