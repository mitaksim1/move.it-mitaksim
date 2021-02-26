import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css';

// Après la création de ce composant, l'appeler dans index.tsx
export function ChallengeBox() {
    // Récupération de activeChallenge,
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    
    const { resetCountdown } = useContext(CountdownContext);

    /* 
    Création des deux fonctions qui vont gérer le reset si challenge réussi ou défaite.
    */
    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Gagnez {activeChallenge.amount}</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                        <strong>Nouveau défi</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Défaite
                        
                        </button>
                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Défi réussi!
                        
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