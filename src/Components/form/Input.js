import styles from './Input.module.css'

function Input({type, text, name, placeHolder, HandleOnChange, value}){

    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input 
                type={type}
                name={name}
                id={name}
                placeholder={placeHolder}
                onChange={HandleOnChange}
                value={value} />
        </div>
    )

}

export default Input