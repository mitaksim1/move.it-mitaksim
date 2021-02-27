import { createContext, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';


interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

// NodeJS.Timeout : typage global, juste pour qu'on assigne un type à la variable
let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
    // Grâce au context on peut accèder à la fonction starNewChallenge qu'on avait crée
    const { startNewChallenge } = useContext(ChallengesContext);

    // Initialization du chronometre en secondes
    const [time, setTime] = useState(25 * 60);

    // Ce state vérifie si le countdown est en marche ou arrêté
    // On l'initialise à false, parce qu'il faut le clic de l'utilisateur pour le mettre en marche
    const [isActive, setIsActive] = useState(false);
    
    // state qui vérifie si le chronomètre est allé jusqu'à la fin (s'il est fini)
    const [hasFinished, setHasFinished] = useState(false);


    // Pour trouver les minutes 
    // Math.floor() : arrondi à l'entier plus petit
    const minutes = Math.floor(time / 60);

    const seconds = time % 60;

    // Au clic sur le bouton, on appelle cette fonction
    function startCountdown() {
        // qui va activer le chronometre
        setIsActive(true);
    }

    // Arrête le chronometre 
    function resetCountdown() {
        // Premier chose arrêter le setTimeout 
        clearTimeout(countdownTimeout); 
        // Passer le state isActive à false
        setIsActive(false);
        // Remettre le chronomètre à 0
        setTime(0.1 * 60);
        // Remet la valeur de hasFinished à false
        setHasFinished(false);
    }

    /* 
    * Lance le chronometre
    */
    useEffect(() => {
        // Si le chronometre est actif et s'il est supérieur à 0
        if (isActive && time > 0) {
            // setTimeout se lance 1s après son appel et
            countdownTimeout = setTimeout(() => {
                // change le state du chronometre en enlèvant 1s de sont temps défini (25 min)
                setTime(time - 1);
            }, 1000)
            // sinon s'il est actif mais est arrivé à 0
        } else if (isActive && time === 0) {
            //console.log('Finalizou');
            setHasFinished(true);
            // countdown n'est plus actif, alors il faut changer son state
            setIsActive(false);
            // Après récupération du context, on peut appeler la fonction pour que dès que le chronomètre s'arrête il y ait un nouveau défi
            startNewChallenge();
        }
        // Il faut que le state du chronometre soit activé et que pour que l'heure change à chaque seconde, on doit "surveiller" aussi les changements du state time
    }, [isActive, time]);

    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}