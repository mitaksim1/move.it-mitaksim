import styles from '../styles/components/ChallengeBox.module.css';

// Après la création de ce composant, l'appeler dans index.tsx
export function ChallengeBox() {
    // Initialization d'une variable juste pour pouvoir visualizer le résultat html/JSX de la page dans le cas il y a un défi actif. Voir en bas la condition créée dans le retour de la fonction
    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Gagnez 400 xp</header>
                    <main>
                        <img src="icons/body.svg" alt=""/>
                        <strong>Nouveau défi</strong>
                        <p>Lèvez-vous et marchez pendant 3 minutes.</p>
                    </main>
                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                        >Défaite
                        
                        </button>
                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}
                        >Défi réussi!
                        
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                <strong>Finalisez un cycle pour recevoir un défi</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level up"/>
                    Avancez de niveau à chaque fois que vous complétez les défis. 
                </p>
            </div>
            )}
        </div>
    );
}