// importar estilo, outros componentes e etc...
import styles from './Hero.module.css';
import React, { useState } from 'react';


export default function Hero() {
    // Lógica do JAVASCRIPT
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <main className={styles.heroContainer}>
            <div className={styles.heroLeft}>
                <h1>Kalel <br></br> Hauck</h1>
                <h2>Desenvolvedor FullStack</h2>
                <span className={styles.containerButtons}>
                    <button onClick={() => setIsModalOpen(true)}>Fale Comigo</button>
                    <button>Baixar meu currículo</button>
                </span>
            </div>
            <div className={styles.heroRight}>
                <img src='rena.webp' alt='imagem seçao hero' />
            </div>

            {isModalOpen && (
                <div>
                    <p>Fui clicado</p>
                </div>
            )}

        </main>
    )
}