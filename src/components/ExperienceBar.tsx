import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    return (
        /* La façon d'appeler un module.css */
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div> 
                {/* On a laissé le style ici, parce que c'est une variable qui va changer, contrairement aux styles dans le fichier css */}
                <div style={{ width: '50%'}}/>

                <span className={styles.currentExperience} style={{ left: '50%' }}>
                    300 xp
                </span>
            </div>
            <span>600 xp</span>
        </header>
    );
}