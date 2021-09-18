import React,{useContext} from 'react'
import { dataSelection } from '../../Context/Context'
import Cards from '../Cards/Cards'
import style from './Main.module.css'

function Main() {

  const {valor}=useContext(dataSelection)

  return (
    <div className={style.main}>
      
     {
       valor.map(el=> <Cards img={el.img} title={el.title} link={el.link} github={el.github} key={el.id}   />  )
     }

    </div>
  )
}

export default Main
