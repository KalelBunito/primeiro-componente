// importar estilo, outros componentes e etc...
import styles from './Hero.module.css'

export default function Hero() {
    // Lógica do JAVASCRIPT
    return (
        <main className={styles.heroContainer}>
            <div className={styles.heroLeft}>
                <h1>Kalel <br></br> Hauck Barboza </h1>
                <h2>Desenvolvedor FullStack</h2>
                <span className={styles.containerButtons}>
                    <button>Fale Comigo</button>
                    <button>Baixar meu currículo</button>
                </span>
            </div>
            <div className={styles.heroRight}>
                <img src='rena.webp' alt='imagem seçao hero' />
            </div>
        </main>
    )
}