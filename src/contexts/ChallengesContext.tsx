import { createContext, useState, ReactNode, useEffect } from 'react';
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
    completeChallenge: () => void;
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

    // Quand la page sera chargée on va demander l'autorisation de l'utilisateur pour lui envoyer des notifications
    useEffect(() => {
        // Notification : API du navigateur
        Notification.requestPermission();
    }, []);

    function levelUp() {
    }

    // Dès que le chronomètre arrive à 0, lance un nouveau challenge (défi)
    function startNewChallenge() {
        // Prend l'index d'un challenge aleatoirement
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);

        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);

        // Son quand notification
        new Audio('/notification.mp3').play();

        if (Notification.permission === 'granted') {
            new Notification('Nouveau défi 🎉', {
                body: `A gagner ${challenge.amount}xp`
            });
        }
    }

    // Si défaite, remettre le state de activeChallenge à son état initial
    function resetChallenge() {
        setActiveChallenge(null);
    }

    // 
    function completeChallenge() {
        // Si le challenge n'est pas actif, ne fait rien
        if (!activeChallenge) {
            return;
        }
        // On prend le nombre de points du challenge actif
        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

         
        // Si le résultat final est supérieur ou égal aux points calculés dans experienceToNextToLevel
        if (finalExperience >= experienceToNextLevel) {
            // Le résultat final sera ce résultat - le nombre de points maxi attendus
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }
        /*
        Ex: J'ai 80 points, pour changer de niveau selon le calcul de experienceNextToLevel je dois avoir 120 points.
        Je fais un challenge qui vaut 80 points (80 + 80 = 160), alors je dépasse les 120 nécéssaires.
        On fait la soustraction de ces deux valeurs pour prendre juste la différence que c'est la quantité que j'ai besoin pour atteindre le prochain niveau
        */
       // On sette la nouvelle valeur du state
       setCurrentExperience(finalExperience);
       // Une fois le défis accompli, on désactive le challenge
       setActiveChallenge(null);
       // On change le state de ChallengesCompleted
       setChallengesCompleted(challengesCompleted + 1);
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
            resetChallenge, 
            completeChallenge,
            }}
            >
            {children}
        </ChallengesContext.Provider>
    );
}




