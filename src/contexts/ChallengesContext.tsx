import { createContext, useState, ReactNode } from 'react';

export const ChallengesContext = createContext({});

// On va importer cette fonction dans _app
// On destructure la récéption du paramètre props.children (<Component {...pageProps} />)
export function ChallengesProvider({ children }) {
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




