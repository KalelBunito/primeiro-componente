import { useState } from 'react';
import { MdCatchingPokemon } from "react-icons/md";
import { BsNintendoSwitch } from "react-icons/bs";
import { CgPacman } from "react-icons/cg";
import { FaHtml5 } from "react-icons/fa";
import { motion } from 'framer-motion';
import styles from './Project.module.css'

const projects = [
        { id: 1, icon: <CgPacman />, title: 'PacMan Game', desc: '', img: './pacmanIMG.png', demo: '', },
        { id: 2, icon: <BsNintendoSwitch />, title: 'Mario Run Game', desc: '', img: './MarioIMG.png', demo: '' },
        { id: 3, icon: <MdCatchingPokemon />, title: 'Pokedéx', desc: '', img: './pokedexIMG.png', demo: '' },
        { id: 4, icon: <FaHtml5 />, title: 'Formulário-API', desc: '', img: './formularioIMG.png', demo: '' }
    ]

export default function Projects() {
    const [current, setCurrent] = useState(0)

    const prevSlide = () => {
        // remover unidades na const current
        if (current === 0) {
            setCurrent(projects.length - 1)
        } else {
            setCurrent(current - 1)
        }
    }
    const nextSlide = () => {
         // adicionar unidades na const current
         if(current === projects.length - 1){
            setCurrent(0)
        }else{
            setCurrent(current + 1)
        }
    }
   

    return (
        <section className={styles.carousel}>
            <h2 className={styles.heading}>Meus Projetos</h2>
            <div className={styles.cardCarousel}>
                <motion.div
                className={styles.inner}
                    animate={{x: `-${current * 100}%`}}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}>
                    {projects.map((project) => (
                        <div className={styles.card} key={project.id}>
                            <div className={styles.icon}>{project.icon}</div>
                            <h3 className={styles.title}>{project.title}</h3>
                            <img className={styles.img} src={project.img} alt={project.title} />
                            <p>{project.desc}</p>
                        </div>
                    ))}
                </motion.div>
                <div className={styles.control}>
                    <button onClick={prevSlide}>&lt;</button>
                <button onClick={nextSlide}>&gt;</button>
            </div>
        </div>
        </section >
    )
}