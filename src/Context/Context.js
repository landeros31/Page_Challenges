import React,{createContext, useState} from 'react'

export const dataSelection=createContext();

function Context({children}) {
  
  const [valor, setvalor]=useState([])
  
  console.log(valor)
  return (
    <dataSelection.Provider value={{
       
      
      valor,
      setvalor
    }} >
        {children}
    </dataSelection.Provider>

  )
}

export default Context