import styles from '../styles/components/Profile.module.css';

// Après la création de ce composant, on pourra l'appeler dans index.tsx
export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/diego3g.png" alt="Diego Fernandes"/>
            <div>
                <strong>Diego Fernandes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}