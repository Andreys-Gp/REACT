
import PropTypes from 'prop-types'



export const Props = ({titulo  , subtitulo}) => {

    console.log(titulo, subtitulo)


  return (
    
  <>
  
  <h1>{titulo}</h1>
  <h2>{subtitulo}</h2>
  
  </>

  )
}


Props.PropTypes = {
    titulo : PropTypes.string.isRequired,
    subtitulo : PropTypes.number.isRequired
}

Props.defaultProps = {
    titulo : 'curso de react XD' , 
    subtitulo : 777

}