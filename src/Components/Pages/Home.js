import Styles from './Home.module.css'

import eco from '../Img/economizar.png'
import LinkBut from '../Layout/LinkBut'

function Home(){

    return(
        <section className={Styles.homeContainer}>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkBut to='/newProject' text='Criar Projeto'/>
            <img src={eco} alt="" className={Styles.imgSize}/>
        </section>
    )

}

export default Home