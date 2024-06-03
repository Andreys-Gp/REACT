
import { useState } from 'react'
import React from 'react'

/* function handleClick (events){
    console.log("soy un buton" , events)
    value +=1;
    console.log(value)

} */

/* const Button=()=>{
    return(
        <button onClick={(events)=> handleClick(events)}>
            Soy un boton</button>
        )
} */


export const EventDom = ({value}) => {
    
    const [contador,setContador]=useState(value)

    const handleClick= ()=>{
            /* console.log("soy un buton" , events)
            value +=1;
            console.log(value) */
            setContador(contador+1)
            console.log(typeof(setContador))
            console.log(contador)

    
    }
  return (
        <>
        <h2>contador:</h2>
        <p>{contador}</p>
        <button onClick={()=> handleClick(value)}>
            soy un button
        </button>
        </> 
        )
}

