import Input from '../form/Input'
import Select from '../form/Select'
import SubmitBut from '../form/SubmitBut'
import styles from './ProjectForm.module.css'

import {useState, useEffect} from 'react'

function ProjectForm({btnText}){

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/category",{
            method: "GET",
            headers: {
                'Content-Type' :'application/json',
            },
        })
            .then((resp)=>resp.json())
            .then((data)=>{setCategories(data)})
            .catch((err)=>console.log(err))
    },[])


    return(
        <form className={styles.form}>
           
           <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeHolder="Insira o nome do projeto"
           />

            <Input
                type="text"
                text="Orçarmento do projeto"
                name="budget"
                placeHolder="Insira o Orçamento do projeto"
           />

            <Select
                name="category_id"
                text="Selecione uma categoria"
                options={categories}
            />

            <SubmitBut
                text={btnText}
            />
        </form> 
    )

}

export default ProjectForm