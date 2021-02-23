import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    {/* On a séparé le chiffre 25 en deux span pour faciliter la stylisation */}
                    <span>2</span>
                    <span>5</span>
                </div>
                <span>:</span>
                <div>
                    <span>0</span>
                    <span>0</span>
                </div>
            </div>
            <button type="button" className={styles.countdownButton}>
                Lancer un cycle
            </button>
        </div>   
    );
}