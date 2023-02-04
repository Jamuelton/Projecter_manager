import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'


function NewProject(){

    return(
        <div className={styles.container}>
            <h1>Criar projeto</h1>
            <p>Crie um projeto antes para poder adicionar os detalhes</p>
            <ProjectForm btnText="Criar projeto"/>
        </div>
    )

}

export default NewProject