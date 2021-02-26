import styles from '../styles/components/LevelUpModal.module.css';


export function levelUpModal() {
    return (
        <div className={styles.overlay}>
            <div className={styles.levelUpModalContainer}>
                <header>2</header>

                <strong>Bravo!</strong>
                <p>T'as atteint un niveau</p>
                <button type="button">
                    <img src="/icons/close.svg" alt="Fechar modal"/>
                </button>
            </div>
        </div>
        
    )
}