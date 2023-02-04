import styles from './SubmitBut.module.css'

function SubmitBut({text}){

    return(

        <div>
            <button className={styles.but}>{text}</button>
        </div>

    )

}

export default SubmitBut