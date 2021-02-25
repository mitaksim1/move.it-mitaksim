import { createContext, useState, ReactNode } from 'react';

export const ChallengesContext = createContext({});
interface ChallengesProviderProps {
    children: ReactNode;
}

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setlevel] = useState(1);
    // L'expéricence (xp) de l'utilisateur commence toujours à 0
    const [currentExperience, setCurrentExperience] = useState(0);
    // Quantité des défis accomplis par l'utilisateur 
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    function levelUp() {
        setlevel(level +1);
    }
    // Une fois les states déclarés, on purra les récupèrer dans values
    return (
        <ChallengesContext.Provider value={{ level, levelUp, currentExperience, challengesCompleted }}>
            {children}
        </ChallengesContext.Provider>
    );
}




