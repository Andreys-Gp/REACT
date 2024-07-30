import { useState } from "react"
import {AgregarTarea} from './AgregarTarea'



const Items = ({nombre,visto} ) => { 
    return (
        <li className="color"> 
         {nombre}
         {visto ? '😁' : '😒'}
         
         </li>
    )
}




export const ListadoMap = () => {


  const addtask = () =>{
    setarreglo([...arreglo , {nombre: ' nuevo ' , visto: false}])
  }

    let listadoSecciones = [ 
        {id:1 , nombre: 'name1' , visto: true},
        {id: 2, nombre: 'name2' , visto: true},
        {id: 3, nombre: 'name3' , visto: true},
        { id: 4,nombre: 'name4' , visto: false},
        {id: 5, nombre: 'name5' , visto: false}
    ]

    const [arreglo, setarreglo] = useState(listadoSecciones)

    const agregarTarea = (inputValue) => {
      let valor = inputValue.trim()
      if (inputValue<1) return
      console.log(inputValue)
      const envio = {
        id : arreglo.length + 1,
        nombre : inputValue,
        visto : false
      }
      setarreglo([...arreglo , envio])

    }


  return (
    
    <>
    <h1>listado de temas del curso</h1>

    <AgregarTarea  agregarTarea={agregarTarea} />

    <ol>

      {arreglo.map(item => <Items key={item.id} nombre={item.nombre} visto={item.visto}></Items>)} 


    </ol>

    
    

    </>
    
  )
}
