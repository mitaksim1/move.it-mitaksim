import { createContext, useState, ReactNode } from 'react';

export const ChallengesContext = createContext({});

// On va préciser le type attendu pour le children 
// Comme le children n'est pas juste un text mais aussi un composant React, on utilise ReactNode qui nous permettra d'accepter n'importe quel type de données comme children (texte, html, composant)
interface ChallengesProviderProps {
    children: ReactNode;
}

// On va importer cette fonction dans _app
// On destructure la récéption du paramètre props.children (<Component {...pageProps} />)
// Après la création du type attendue dans children : 
export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setlevel] = useState(1);

    function levelUp() {
        setlevel(level +1);
    }

    return (
        <ChallengesContext.Provider value={{ level, levelUp }}>
            {children}
        </ChallengesContext.Provider>
    );
}




