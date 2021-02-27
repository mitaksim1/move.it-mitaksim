import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/LevelUpModal.module.css';



export function LevelUpModal() {
    // Pour pouvoir accèder aux données de level et pouvoir dynamiser la valeur du header, on appelle le context
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Bravo!</strong>
                <p>Tu as atteint un niveau de plus</p>
                <button type="button">
                    <img src="/icons/close.svg" alt="Fechar modal"/>
                </button>
            </div>
        </div>
        
    )
}