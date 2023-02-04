import Container from "./Container";

import { Link } from "react-router-dom";

import money from "../Img/money.png";

import Styles from "./NavBar.module.css"

function NavBar(){

    return(
       <nav className={Styles.navbar}>
            <Container >
                <Link>
                    <img src={money} alt="" className={Styles.imgSize} />
                </Link>
                <ul className={Styles.list}>
                    <li className={Styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={Styles.item}>
                        <Link to='/project'>Projetos</Link>
                    </li>
                    <li className={Styles.item}>
                        <Link to='/contact'>Contatos</Link>
                    </li>
                    <li className={Styles.item}>
                        <Link to='/company'>Empresa</Link>
                    </li>
                </ul>
            </Container>
       </nav> 
    )

}

export default NavBar