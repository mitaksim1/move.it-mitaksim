import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ChallengeBox.module.css';

// Après la création de ce composant, l'appeler dans index.tsx
export function ChallengeBox() {
    // Récupération de activeChallenge,
    const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Gagnez{activeChallenge.amount}</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                        <strong>Nouveau défi</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={resetChallenge}
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