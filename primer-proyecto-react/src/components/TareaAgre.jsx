
import React, { useState } from 'react'

export const AgregarItem = ({agregarTarea}) => {

  const [inputValue, setinputValue] = useState('');

  const onInputChange = (event)=>{
    setinputValue(event.target.value)
    console.log(inputValue)

  }

  const prevenOnsumit=(event)=>{

    const envio={
      name:inputValue,
      visto: false
    }

    event.preventDefault()
    agregarTarea(tareas=>[...tareas,envio])

  }


  return (

    <form onSubmit={(event)=>prevenOnsumit(event)}>

    <input type='text' placeholder='ingresa nueva tarea'
    value={inputValue}
    onChange={onInputChange}
    ></input>

    </form>
    
  )
}
