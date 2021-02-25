import styles from '../styles/components/ChallengeBox.module.css';

// Après la création de ce composant, l'appeler dans index.tsx
export function ChallengeBox() {
    return (
        <div className={styles.challengeBoxContainer}>
            <div className={styles.challengeNotActive}>
                <strong>Finalisez un cycle pour recevoir un défi</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level up"/>
                    Avancez de niveau à chaque fois que vous complétez les défis. 
                </p>
            </div>
        </div>
    );
}