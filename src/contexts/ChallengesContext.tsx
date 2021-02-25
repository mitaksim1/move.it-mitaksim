import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

// 8. Création de l'interface pour typer les données du fichier challenges.json
interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}
// Type des données envoyées dans le context
// void: fonction qui ne retourne rien
// 7. Mettre le type de données de activeChallenge, c'est un objet (activeChallenge: objet;), mais comme il y a plusieurs informations dans le fichier, on va créer une nouvelle interface pour préciser le type de chaque propriété pour ainsi récupérer cette nouvelle interface comme type de activeChallenge
interface ChallengesContextData {
    level: number; 
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
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

    // 4. Sauvegarder le challenge actif dans un state
    const [activeChallenge, setActiveChallenge] = useState(null);

    function levelUp() {
        setlevel(level +1);
    }

    // Dès que le chronomètre arrive à 0, lance un nouveau challenge (défi)
    function startNewChallenge() {
        // 1. Prend l'index d'un challenge aleatoirement
        // Math.random * challenges.length retourne un nombre à virgule, alors 
        // 2. Math.floor va l'arrondir au plus petit
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);

        // 3. challange prendra comme valeur la valeur contenue dans l'index
        const challenge = challenges[randomChallengeIndex];

        // 5. Le state de activeChallenge est null, on va le changer par le challenge obtenu dans le random
        setActiveChallenge(challenge);
    }

    // Une fois les states déclarés, on pourra les récupèrer dans values
    // 6. Passer le nouveau state au Provider
    return (
        <ChallengesContext.Provider value={{ 
            level, 
            currentExperience, 
            challengesCompleted,
            activeChallenge,
            levelUp, 
            startNewChallenge 
            }}
            >
            {children}
        </ChallengesContext.Provider>
    );
}




