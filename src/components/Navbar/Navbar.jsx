import styles from './Navbar.module.css'

// type module
export default function Navbar(){
    return(
        // dentro do retorno de um componente eu so posso escrever html
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>
                <span className={styles.bracket}>&lt;</span>
                Kalel Barboza
                <span className={styles.bracket}>/&gt;</span>
            </h1>
            <ul className={styles.menuItem}>
                <li className={`${styles.menuLink} ${styles.blue}`}>[Home]</li>
                <li className={`${styles.menuLink} ${styles.purple}`}>[Habilidades]</li>
                <li className={`${styles.menuLink} ${styles.green}`}>[Projetos]</li>
                <li className={`${styles.menuLink} ${styles.yellow}`}>[Contato]</li>
            </ul>
        </nav>
    )
}