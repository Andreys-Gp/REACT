


const Items = ({nombre,visto} ) => { 
    return (
        <li> 
         {nombre}
         {visto ? '😁' : '😒'}
         
         </li>
    )
}


export const ListadoApp = () => {
  return (
    <>
    <h1>listado de temas del curso</h1>

    <ol>

       <Items nombre='name1' visto={true} ></Items>
       <Items nombre='name2' visto={true}></Items>
       <Items nombre='name3' visto={true}></Items>
       <Items nombre='name4' visto={false}></Items>
       <Items nombre='name5' visto={false}></Items>
       

    </ol>
    </>
  )
}
