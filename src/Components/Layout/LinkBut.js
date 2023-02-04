import Styles from './LinkBut.module.css'
import { Link } from 'react-router-dom'

function LinkBut({to, text}){

    return(

        <Link to={to} className={Styles.but}>
            {text}
        </Link>

    )

}

export default LinkBut