import { useState } from "react"



export const AgregarTarea = ({ agregarTarea }) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = (event) => {
        setinputValue(event.target.value)
    }

    const onSubmit = (event) => { 
        event.preventDefault()
        agregarTarea(inputValue)

        }


  return (
     
    <form onSubmit={(event) => onSubmit(event)} >
    <input 
    type="text" 
    placeholder="ingrese tarea"
    value={inputValue}
    onChange={(event) => onInputChange(event)}
    />

    </form>
    

  )
}
