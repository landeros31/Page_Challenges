import React,{useState, useContext} from 'react'
import styles from './Header.module.css'
import list from '../../data'
import { dataSelection } from '../../Context/Context'
import logo from '../../Assets/logo.png'


function Header() {
    const {setvalor}=useContext(dataSelection)
     

    const [searchText, setSearchText] = useState('')

    
    if(searchText=== ""){
     
      setvalor(list)
    }

    

    const handelInput=(event)=>{
        const text=event.target.value
        setSearchText(text)

    const filterProjects= list.filter((project)=>
    project.title.includes(searchText))

    console.log('filterProjects');
    //console.log(filterProjects);

      setvalor(filterProjects)
    }
  

    
   //setinfo()
   // setvalor(news)
    // setChallenge(filterProjects)
    // filterProjects.map((info, index)=> <Carts img={info.img} title={info.title} link={info.link}/>)
    //
    return (
            <div className={styles.containerHeader}>
                <div className={styles.logoHeader}><img  src={logo} alt="LOGO" /></div>
                <h2 className={styles.title}>50 CHALLENGES </h2>
                <input type='text' className="from-control" onChange={handelInput} value={searchText} placeholder="Search"/>
            </div>
        
        
    )
}

export default Header