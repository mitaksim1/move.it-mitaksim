import { createContext, useState, ReactNode } from 'react';

// Type des données envoyées dans le context
// void: fonction qui ne retourne rien
interface ChallengesContextData {
    level: number; 
    currentExperience: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
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

    function levelUp() {
        setlevel(level +1);
    }

    // Dès que le chronomètre arrive à 0, lance un nouveau challenge (défi)
    function startNewChallenge() {
        console.log('New Challenge');
    }

    // Une fois les states déclarés, on pourra les récupèrer dans values
    // On aura besoin de la fonction startNewChallenge dans le composant Countdown, mais pour qu'on puisse y accèder ce sera bien de créer une nouvelle interface pour "typer" les données envoyées
    return (
        <ChallengesContext.Provider value={{ 
            level, 
            currentExperience, 
            challengesCompleted,
            levelUp, 
            startNewChallenge 
            }}
            >
            {children}
        </ChallengesContext.Provider>
    );
}




