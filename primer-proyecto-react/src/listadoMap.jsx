import { useState } from "react"
import './styles.css'
import { AgregarItem } from "./components/TareaAgre.jsx"

const Opcion =({name,visto}) => {
    return(
        <li className="background">
        {name}
         {visto ? '✔' : '🔏'}
         </li>
    )
}




export const ListadoAppMap=() => {

    const addTask=()=>{
    setarreglo([...arreglo,{name:'nuevo',visto:false}])
}

    let Opciones = [
        {name:"instlaciones necesarias",visto:true},
        {name:"Uso de vite",visto:true},
        {name:"Componentes",visto:true},
        {name:"Variables en JSX",visto:true},
        {name:"CustomHooks",visto:false},
        
        
    ]
    
    const [arreglo, setarreglo] = useState(Opciones)

    return (
       <>
        
        <h1>listado componentes</h1> 

      <AgregarItem agregarTarea={setarreglo}></AgregarItem>

       <ol>
       {arreglo.map(iten=> <Opcion key={iten.name} name={iten.name} visto={iten.visto}></Opcion>)}
       </ol>


       </>
       
       
    )
}