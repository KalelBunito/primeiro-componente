import styles from './Navbar.module.css'

// type module
export default function Navbar(){
    return(
        // dentro do retorno de um componente eu so posso escrever html
        <nav className={styles.menu}>
            <img src='' alt=''/>
            <ul className={styles.menuItem}>
                <li>Home</li>
                <li>Habilidades</li>
                <li>Projetos</li>
                <li>Contato</li>
            </ul>
        </nav>
    )
}