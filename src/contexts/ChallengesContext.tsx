import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

// Création de l'interface pour typer les données du fichier challenges.json
interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}
// Type des données envoyées dans le context
// void: fonction qui ne retourne rien
interface ChallengesContextData {
    level: number; 
    currentExperience: number;
    experienceToNextLevel: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

// Une fois le typage crée, on le précise dans la création de notre contexte
export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setlevel] = useState(1);
    // L'expéricence (xp) de l'utilisateur commence toujours à 0
    const [currentExperience, setCurrentExperience] = useState(0);
    // Quantité des défis accomplis par l'utilisateur 
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    // Sauvegarder le challenge actif dans un state
    const [activeChallenge, setActiveChallenge] = useState(null);

    // Calcul pour passer au prochain niveau.
    const experienceToNextLevel = Math.pow((level +1) * 4, 2);

    function levelUp() {
        setlevel(level +1);
    }

    // Dès que le chronomètre arrive à 0, lance un nouveau challenge (défi)
    function startNewChallenge() {
        // Prend l'index d'un challenge aleatoirement
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);

        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    // Une fois les states déclarés, on pourra les récupèrer dans values
    return (
        <ChallengesContext.Provider value={{ 
            level, 
            currentExperience, 
            experienceToNextLevel,
            challengesCompleted,
            activeChallenge,
            levelUp, 
            startNewChallenge,
            resetChallenge
            }}
            >
            {children}
        </ChallengesContext.Provider>
    );
}




