
const Items =({nombre,visto}) => {
    return(
        <li>{nombre} {visto ? '✔' : '🔏'}</li>
    )
}


export const ListadoApp=() => {
    return (
       <>
       <h1>listado componentes</h1> 
       <ol>
        <Items nombre="Instalaciones necesarias" visto={true}></Items>
        <Items nombre="Uso de vite" visto={true}></Items>
        <Items nombre="Componentes" visto={true}></Items>
        <Items nombre="Variables en jsx" visto={true}></Items>
        <Items nombre="Props" visto={true}></Items>
        <Items nombre="Eventos" visto={true}></Items>
        <Items nombre="UseState" visto={true}></Items>
        <Items nombre="Redux" visto={false}></Items>
        <Items nombre="CustomHooks" visto={false}></Items>

       </ol>
       </>
    )
}