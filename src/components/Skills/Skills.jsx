import styles from './Skills.module.css';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase } from 'react-icons/fa';
import { LuGamepad2 } from "react-icons/lu";

export default function Skills() {

    //elementos do JS
    const skills = [
        { icon: <FaCode />, title: 'Desenvolvimento Frontend', desc: 'Criação de interfaces responsivas com Bootstrap, React e Next.js, utilizando TypeScript.' },
        { icon: <FaDatabase />, title: 'Desenvolvimento Backend', desc: 'Desenvolvimento de APIs RESTful com Node.js para aplicações de alta performance.' },
        { icon: <LuGamepad2 />, title: 'Desenvolvimento de jogos', desc: 'esenvolvimento de jogos simples em 2D usando as linguagens Javascript e Python' }
    ]

    return (
        <main className={styles.containerMain}>
            <div className={styles.heading}>
                <h4>Serviços</h4>
                <h2>Minhas Habilidades</h2>
                <p>Transformo ideias complexas em soluçoes digitais elegantes...</p>
            </div>
            <div className={styles.containerCard}>
                {skills.map((item, index) => (
                    <motion.div key={index} className={styles.card} whileHover = {{scale:1.10}} transition={{type: 'spring', stiffness: 300}}>
                        <div className={styles.icon}>{item.icon}</div>
                        <h3 className={styles.title}>{item.title}</h3>
                        <p className={styles.desc}>{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </main>
    )
}