import './primerComponente.css'

const string='esto es un texto'
const number=123456
const array=['Curso de react','yotube',4,1000000]
const boolean=true
const funcion=()=>1+1
const objeto={nombre:'cusrso react',duracion:4}
const fecha=new Date()





export const PrimerComponente = () => {
  return (
/*     <h1>practicando con REACT</h1>
 */  <>
    <h1>{JSON.stringify(objeto)}</h1>
    <h1>
        practicando react con vite 
    </h1>

    <p>{string}</p>
    <p>{number}</p>
    <p>{array}</p>
    <p>{boolean}</p>
    <p>{funcion()}</p>
    <p>{JSON.stringify(fecha)}</p>

    
 </> 
  ) 
}













/* function PrimerComponente(){
    return(<h1>Hola mundo practicando REACT con VITE</h1>)
}
 */

/* class ClassPrimerComponente{
    state={}
    render(){
        return(
            <h1>Hola Mundo Practicando con REACT</h1>
        );
    }
} */
/* export default PrimerComponente; */